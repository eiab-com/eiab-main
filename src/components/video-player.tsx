import React, { useState, useEffect, useRef, useCallback } from "react";

interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  sources: string[];
  className?: string;
  onLoad?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  sources,
  onLoad,
  className = "",
}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Handle video ended event to play the next video
  const handleVideoEnded = useCallback(() => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % sources.length);
  }, [sources.length]);

  // Effect to set up the event listener when the video element is available
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnded);

      // Clean up the event listener when component unmounts
      return () => {
        videoElement.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, [handleVideoEnded]);

  // Effect to load and play the video when the index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    }
  }, [currentVideoIndex, sources]);

  return (
    <div className={`w-full h-full ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        onLoad={onLoad}
        disablePictureInPicture

        
      >
        <source src={sources[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
