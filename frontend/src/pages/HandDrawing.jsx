import React, { useRef, useEffect, useState } from "react";

const Hands = window.Hands;
const Camera = window.Camera;

function HandDrawing() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [mode, setMode] = useState("draw");
  const [color, setColor] = useState("white");

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let prevX = null;
    let prevY = null;

    // FIX: ensure canvas size matches video
    canvas.width = 640;
    canvas.height = 480;

    const rect = {
      x1: 150,
      y1: 80,
      x2: 490,
      y2: 400,
    };

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    hands.onResults((results) => {
      // ONLY overlay drawing (NO clearing video)

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw zone
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(rect.x1, rect.y1, rect.x2 - rect.x1, rect.y2 - rect.y1);

      if (!results.multiHandLandmarks || mode === "view") {
        prevX = null;
        prevY = null;
        return;
      }

      const index = results.multiHandLandmarks[0][8];

      const x = index.x * canvas.width;
      const y = index.y * canvas.height;

      const inside =
        x > rect.x1 &&
        x < rect.x2 &&
        y > rect.y1 &&
        y < rect.y2;

      // draw line
      if (inside && prevX !== null) {
        ctx.strokeStyle = mode === "erase" ? "black" : color;
        ctx.lineWidth = mode === "erase" ? 20 : 4;

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      if (inside) {
        prevX = x;
        prevY = y;
      } else {
        prevX = null;
        prevY = null;
      }

      // fingertip dot
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    const camera = new Camera(video, {
      onFrame: async () => {
        await hands.send({ image: video });
      },
      width: 640,
      height: 480,
    });

    camera.start();
  }, [mode, color]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="relative w-[640px] h-[480px] mx-auto bg-black">

      {/* 🎥 CAMERA (IMPORTANT: MUST BE VISIBLE OR MEDIAPIPE BREAKS) */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        playsInline
      />

      {/* 🖊️ CANVAS OVERLAY */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      {/* 🎮 CONTROLS */}
      <div className="absolute bottom-[-90px] flex gap-2 flex-wrap justify-center w-full">

        <button onClick={() => setMode("draw")} className="bg-green-600 px-2">
          Draw
        </button>

        <button onClick={() => setMode("erase")} className="bg-yellow-600 px-2">
          Erase
        </button>

        <button onClick={() => setMode("view")} className="bg-gray-600 px-2">
          View
        </button>

        <button onClick={clearCanvas} className="bg-red-600 px-2">
          Clear
        </button>

        <button onClick={saveImage} className="bg-blue-600 px-2">
          Save
        </button>

        <button onClick={() => setColor("white")} className="bg-white text-black px-2">
          White
        </button>

        <button onClick={() => setColor("red")} className="bg-red-500 px-2">
          Red
        </button>

        <button onClick={() => setColor("blue")} className="bg-blue-500 px-2">
          Blue
        </button>

      </div>
    </div>
  );
}

export default HandDrawing;