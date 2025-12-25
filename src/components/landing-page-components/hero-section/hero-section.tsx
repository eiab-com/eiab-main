"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransitionRouter } from "next-view-transitions";
import {  Map, Play } from "lucide-react";
import VideoPlayer from "@/components/video-player";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const leftCurtain = useRef(null);
  const rightCurtain = useRef(null);
  const videoContainerRef = useRef(null);
  const textContentRef = useRef(null);

  const router = useTransitionRouter();

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // --- ANIMATION SEQUENCE ---
  useGSAP(() => {
    const tl = gsap.timeline();

    if (leftCurtain.current && rightCurtain.current) {
      tl.to([leftCurtain.current, rightCurtain.current], {
        width: "0%",
        duration: 2.0,
        ease: "power4.inOut",
        stagger: 0.1,
      });

      if (textContentRef.current) {
        tl.fromTo(
          textContentRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=1.0"
        );
      }
    }

    if (isImageLoaded && videoContainerRef.current) {
      gsap.fromTo(
        videoContainerRef.current,
        { scale: 1.2 },
        { scale: 1, duration: 2.5, ease: "power4.inOut" }
      );
    }
  }, [isImageLoaded]);

  const heroVideoAddresses = [
    "/assets/backdrop-videos/Back 1.mp4",
    "/assets/backdrop-videos/Back 2.mp4",
    "/assets/backdrop-videos/Back 3.mp4",
  ];

  return (
    <section
      id="home-section"
      className="relative col-span-12 h-screen w-full bg-black overflow-hidden font-sans selection:bg-amber-500 selection:text-black -mt-2"
    >
      {/* --- SHUTTER CURTAINS (Animation Layer) --- */}
      <div
        ref={leftCurtain}
        className="absolute top-0 left-0 h-full w-1/2 bg-black z-50 border-r border-white/10"
      ></div>
      <div
        ref={rightCurtain}
        className="absolute top-0 right-0 h-full w-1/2 bg-black z-50 border-l border-white/10"
      ></div>

      {/* --- VIDEO LAYER (The "Feed") --- */}
      <div ref={videoContainerRef} className="absolute inset-0 z-0">
        <VideoPlayer
          className="w-full h-full object-cover opacity-60 contrast-125 saturate-0 mix-blend-luminosity md:mix-blend-normal md:saturate-50"
          sources={heroVideoAddresses}
          onLoad={handleImageLoad}
        />
        {/* Digital noise/grid overlay on video */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div
        ref={textContentRef}
        className="absolute inset-0 z-30 flex items-center px-6 md:px-12 opacity-0"
      >
        <div className="w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Main Heading Area */}
          <div className="md:col-span-8 space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.85] mix-blend-difference">
              TRAVEL YOUR <br />
              WAY THROUGH <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 via-amber-200 to-white">
               {` INDIA'S SCENIC`}
              </span>
            </h1>

            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <p className="font-mono text-xs md:text-sm text-neutral-400 max-w-md border-l-2 border-amber-500 pl-4 leading-relaxed bg-black/40 backdrop-blur-xs p-2">
                Navigate challenging terrains, experience authentic culture, and
                create lasting memories with our expert-guided tours.
              </p>
            </div>

            {/* Technical Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 pointer-events-auto">
              <button
                onClick={() => router.push("/adventures")}
                className="group relative px-8 py-4 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase overflow-hidden hover:bg-amber-500 transition-colors duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Options <Play className="w-3 h-3 fill-current" />
                </span>
              </button>

              <button
                onClick={() => router.push("/adventure-stories")}
                className="group px-8 py-4 border border-white/20 bg-black/20 backdrop-blur-sm text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Access Logs
              </button>
            </div>
          </div>

          {/* Right Side Stats (Decorative) */}
          <div className="hidden md:flex md:col-span-4 flex-col gap-4 items-end justify-end h-full pb-4">
            <div className="p-4 border border-white/10 bg-black/60 backdrop-blur-sm w-full max-w-xs">
              <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">
                  Current Sector
                </span>
                <Map className="w-3 h-3 text-amber-500" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-neutral-300">
                  <span>Wind Speed</span>
                  <span>12 km/h</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-neutral-300">
                  <span>Visibility</span>
                  <span>98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
