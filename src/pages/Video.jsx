import React from "react";

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        pointerEvents: "none", // Prevents any interaction
      }}
    >
      <source src="/jobs_video.mp4" type="video/mp4" className="rounded-lg shadow-lg"/>
      
    </video>
  );
};

export default BackgroundVideo;
