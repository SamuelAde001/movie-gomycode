import React from "react";

export const BackgroundVideo = () => {
  return (
    <div className="relative">
      <video className="h-[400px] rounded-xl shadow-lg" autoPlay muted loop>
        <source src="src\assets\Marvel Opening Theme.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
