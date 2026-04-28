import React from "react";

function VideoRobot() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-gradient-to-b from-[#050146] to-[#561cc9]">
      <div className="w-full max-w-4xl px-4">
        <div className="relative w-full overflow-hidden rounded-2xl border border-purple-800 shadow-2xl">
          
          {/* <video
            className="w-full h-auto"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video> */}

        </div>

        <p className="text-center text-gray-400 text-sm mt-4">
          Démonstration du robot dessinateur en action
        </p>
      </div>
    </section>
  );
}

export default VideoRobot;
