import React from "react";
import Image from "next/image";
import {
  Shield,
  Users,
  Radio,
  Globe,
  Zap,
  Crosshair,
  Map,
} from "lucide-react";

// --- MOCK DATA ---
const featuresData = [
  {
    icon: Shield,
    title: "Safety Protocols",
    description:
      "Rigorous safety standards and expert-led navigation through challenging terrains.",
  },
  {
    icon: Users,
    title: "Community Uplink",
    description:
      "Forging deep connections between riders through shared adversity and triumph.",
  },
  {
    icon: Globe,
    title: "Cultural Respect",
    description:
      "Immersive experiences that honor and support local rural communities.",
  },
  {
    icon: Zap,
    title: "Mental Resilience",
    description:
      "Empowering riders to find clarity and strength through the art of exploration.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden font-sans selection:bg-amber-500 selection:text-black">
     

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1800px] mx-auto">
        {/* --- CONTENT SECTION --- */}
        <div className="flex flex-col gap-10">
          {/* Header Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>Mission Protocol // Status: Active</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">
              CRAFTING JOURNEYS <br />
              BEYOND{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-200">
                TYPICAL TRAILS
              </span>
            </h2>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed border-l-2 border-amber-500/20 pl-6 max-w-xl">
              At EIAB, our mission is to unite adventurers worldwide. We
              prioritize safety, camaraderie, and mental well-being, aspiring to
              empower riders while making a positive impact on rural
              communities.
            </p>
          </div>

          {/* Technical Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-[#0a0a0a]/50 backdrop-blur-xs border border-white/5 hover:border-amber-500/50 p-6 transition-all duration-300"
              >
                {/* Corner Markers */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-amber-500 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-amber-500 transition-colors"></div>

                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-amber-500/10 group-hover:border-amber-500/50 transition-colors">
                    <feature.icon className="w-5 h-5 text-neutral-300 group-hover:text-amber-500 transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- IMAGE / HUD SECTION --- */}
        <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full">
          {/* Main Frame Container */}
          <div className="absolute inset-0 border border-white/10 p-2">
            {/* Inner Image Container */}
            <div className="relative w-full h-full overflow-hidden bg-[#0a0a0a] group">
              {/* Decorative Overlays */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1 border border-white/10">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono font-bold text-white tracking-widest">
                  LIVE FEED
                </span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 flex flex-col items-end">
                <div className="flex items-center gap-1 text-[10px] font-mono text-amber-500 tracking-widest bg-black/80 px-2 py-1">
                  <Crosshair className="w-3 h-3" />
                  TARGET: LADAKH PASS
                </div>
                <div className="text-[9px] font-mono text-neutral-500 mt-1">
                  ELEV: 17,582 FT
                </div>
              </div>

              {/* Grid Overlay on Image */}
              
              {/* The Image */}
              <Image
                src="https://images.pexels.com/photos/30743692/pexels-photo-30743692/free-photo-of-adventurous-motorcyclist-at-misty-ladakh-pass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Adventurous motorcyclist at misty Ladakh pass"
                fill
                className="w-full h-full object-cover opacity-80 grayscale-[0.5] contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            
            </div>
          </div>

          {/* Exterior Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-4">
            <div className="w-24 h-24 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center">
              <Map className="w-8 h-8 text-neutral-700" />
            </div>
            <div className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest space-y-1">
              <div>Sector: North-East</div>
              <div>Grid: 44-Alpha</div>
              <div>Visibility: Low</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
