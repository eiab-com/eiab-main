"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

import { Calendar, MapPin, Mountain, Route, ArrowRight, Crosshair, Radio ,  } from "lucide-react";
import dayjs from "dayjs";
import { getLatestAdventure } from "@/actions/adventures";
import { Adventure } from "@/types";

const LatestAdventureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [latestAdventure, setLatestAdventure] = useState<Adventure | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);

    const fetchLatest = async () => {
        const result = await getLatestAdventure();
        if (result.success && result.data) {
            setLatestAdventure(result.data);
        }
    }

    fetchLatest();
    
    return () => clearTimeout(timer);
  }, []);

  if (!latestAdventure) return null;

  const formattedStartDate = dayjs(latestAdventure.startDate).format(
    "MMM DD, YYYY"
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 text-white p-0 gap-0 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.9)] sm:rounded-sm font-sans">
        {/* --- CHASSIS DECORATION --- */}
        {/* Corner Brackets */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 z-50"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 z-50"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 z-50"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 z-50"></div>

      
        <div className="relative z-10 flex flex-col md:flex-row h-full min-h-[400px]">
          {/* --- LEFT: VISUAL FEED --- */}
          <div className="w-full md:w-5/12 relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
            {/* Image Feed */}
            <Image
              src={latestAdventure.imageSrc}
              alt={latestAdventure.altText}
              fill
              className="object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Scanning Animation Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent h-[15%] w-full animate-[scan_3s_linear_infinite] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            {/* HUD Elements */}
            <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
              <div className="w-2 h-2 bg-red-500 rounded-sm animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold text-white tracking-[0.2em] bg-black/80 px-2 py-1 border border-white/10">
                LIVE FEED
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-20">
              <div className="flex items-center justify-end gap-2 text-amber-500">
                <Crosshair className="w-4 h-4 animate-[spin_10s_linear_infinite]" />
                <span className="text-[10px] font-mono tracking-widest">
                  TARGET LOCKED
                </span>
              </div>
            </div>
          </div>

          {/* --- RIGHT: DATA MODULE --- */}
          <div className="w-full md:w-7/12 p-8 flex flex-col justify-between relative bg-gradient-to-br from-transparent to-white/[0.02]">
            <DialogHeader className="mb-6 space-y-4 text-left">
              {/* Status Header */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <Radio className="w-3 h-3" />
                  <span>Priority Transmission</span>
                </div>
                <div className="text-[10px] font-mono text-neutral-500">
                  ID: {latestAdventure.id.slice(-6).toUpperCase()}
                </div>
              </div>

              <DialogTitle className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-white uppercase">
                {latestAdventure.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-8">
              {/* Telemetry Grid */}
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                {/* Cell 1 */}
                <div className="bg-[#0a0a0a] p-3 group hover:bg-white/5 transition-colors">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-1">
                    <Calendar className="w-3 h-3 text-amber-500" /> Launch
                  </span>
                  <span className="text-xs font-mono text-white">
                    {formattedStartDate}
                  </span>
                </div>
                {/* Cell 2 */}
                <div className="bg-[#0a0a0a] p-3 group hover:bg-white/5 transition-colors">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-1">
                    <MapPin className="w-3 h-3 text-amber-500" /> Sector
                  </span>
                  <span className="text-xs font-mono text-white truncate">
                    {latestAdventure.state}
                  </span>
                </div>
                {/* Cell 3 */}
                <div className="bg-[#0a0a0a] p-3 group hover:bg-white/5 transition-colors">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-1">
                    <Mountain className="w-3 h-3 text-amber-500" /> Elev.
                  </span>
                  <span className="text-xs font-mono text-white">
                    {latestAdventure.highestAltitude}
                  </span>
                </div>
                {/* Cell 4 */}
                <div className="bg-[#0a0a0a] p-3 group hover:bg-white/5 transition-colors">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2 mb-1">
                    <Route className="w-3 h-3 text-amber-500" /> Range
                  </span>
                  <span className="text-xs font-mono text-white">
                    {latestAdventure.totalDistance}
                  </span>
                </div>
              </div>

              {/* Briefing Text */}
              <div className="relative pl-4 border-l-2 border-amber-500/50">
                <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                  <span className="text-amber-500 font-bold mr-2">
                    MISSION BRIEF:
                  </span>
                  {latestAdventure.shortDescription}
                </p>
              </div>

              {/* Technical Action Button */}
              <a
                href={`/adventures/${latestAdventure.id}`}
                className="block group"
              >
                <button className="relative w-full overflow-hidden bg-white text-black px-6 py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-amber-500 transition-colors duration-300">
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <span>Start Exploring</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Hover Scan Effect */}
                  <div className="absolute inset-0 bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
              </a>
            </div>

            {/* Footer Decor */}
            <div className="absolute bottom-2 right-2 text-[8px] font-mono text-neutral-700 select-none">
              SYS_V.2.0.4 // LOG_ENTRY_ACTIVE
            </div>
          </div>
        </div>
      </DialogContent>

      
    </Dialog>
  );
};

export default LatestAdventureModal;