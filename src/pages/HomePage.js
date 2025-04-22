import React, { useEffect, useRef } from "react";

const HomePage = () => {
  // video
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
    // Set the volume 
      videoRef.current.volume = 0.003
    ; 
    }
  }, []);

  return (
    <div className="w-full h-screen relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
      >
        <source src="/video/gym_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Fit Body NRC
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Push Your Limits. Achieve Your Goals.
        </p>

      </div>
    </div>
  );
};

export default HomePage;
