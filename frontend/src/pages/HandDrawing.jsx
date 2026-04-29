import React, { useRef, useEffect, useState } from "react";

const Hands = window.Hands;
const Camera = window.Camera;

function HandDrawing() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const cameraRef = useRef(null);

  const prevPoint = useRef({ x: null, y: null });

  // stores real strokes
  const strokes = useRef([]);

  const [mode, setMode] = useState("draw");
  const [color, setColor] = useState("white");

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || !Hands || !Camera) return;

    const ctx = canvas.getContext("2d");

    canvas.width = 640;
    canvas.height = 480;

    if (cameraRef.current) {
      cameraRef.current.stop?.();
      cameraRef.current = null;
    }

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.6,
      minTrackingConfidence: 0.6,
    });

    // ===== distance helper for erasing =====
    const distanceToSegment = (px, py, x1, y1, x2, y2) => {
      const A = px - x1;
      const B = py - y1;
      const C = x2 - x1;
      const D = y2 - y1;

      const dot = A * C + B * D;
      const lenSq = C * C + D * D;

      let t = lenSq !== 0 ? dot / lenSq : -1;

      let xx, yy;

      if (t < 0) {
        xx = x1;
        yy = y1;
      } else if (t > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + t * C;
        yy = y1 + t * D;
      }

      return Math.hypot(px - xx, py - yy);
    };

    hands.onResults((results) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const hand = results.multiHandLandmarks?.[0];

      if (!hand || mode === "view") {
        prevPoint.current = { x: null, y: null };
      } else {
        const index = hand[8];
        if (!index) return;

        let x = index.x * canvas.width;
        let y = index.y * canvas.height;

        const prev = prevPoint.current;

        if (prev.x !== null) {
          x = prev.x * 0.6 + x * 0.4;
          y = prev.y * 0.6 + y * 0.4;
        }

        if (mode === "erase") {
          strokes.current = strokes.current.filter((s) => {
            const d = distanceToSegment(
              x,
              y,
              s.from.x,
              s.from.y,
              s.to.x,
              s.to.y
            );
            return d > 15; // erase radius
          });
        }

        if (mode === "draw") {
          if (prev.x !== null) {
            strokes.current.push({
              from: { x: prev.x, y: prev.y },
              to: { x, y },
              color,
              width: 4,
            });
          }
        }

        prevPoint.current = { x, y };

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const s of strokes.current) {
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.width;

        ctx.beginPath();
        ctx.moveTo(s.from.x, s.from.y);
        ctx.lineTo(s.to.x, s.to.y);
        ctx.stroke();
      }

      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
    });

    const camera = new Camera(video, {
      onFrame: async () => {
        await hands.send({ image: video });
      },
      width: 640,
      height: 480,
    });

    cameraRef.current = camera;
    camera.start();

    return () => {
      camera.stop?.();
      hands.close?.();
      cameraRef.current = null;
    };
  }, [mode, color]);

  const clearCanvas = () => {
    strokes.current = [];
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

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        playsInline
      />

      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      <div className="absolute bottom-[-90px] flex gap-2 flex-wrap justify-center w-full z-50">

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
