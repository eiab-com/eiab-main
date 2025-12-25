import React from "react";
import Image from "next/image";
import { Dayjs } from "dayjs";
import Link from "next/link";
import {
  Mountain,
  Route,
  ArrowUpRight,
  Play,
  MapPin,
  Calendar,
} from "lucide-react";

interface AdventureCardProps {
  title: string;
  coverImage: string;
  altText: string;
  id: string;
  startDate: Dayjs;
  shortDescription: string;
  altitude: string;
  distance: string;
  location?: string;
  difficulty?: "Easy" | "Moderate" | "Hard" | "Expert";
}

const AdventureCard = ({
  title,
  coverImage,
  altText,
  id,
  startDate,
  shortDescription,
  altitude,
  distance,
  location,
  difficulty = "Moderate",
}: AdventureCardProps) => {
  const constructedLink = `/adventures/${id}`;

  // Difficulty color mapping (Technical palette)
  const difficultyColor = {
    Easy: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    Moderate: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    Hard: "text-orange-500 border-orange-500/30 bg-orange-500/10",
    Expert: "text-rose-500 border-rose-500/30 bg-rose-500/10",
  }[difficulty];

  return (
    <div className="group relative w-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 hover:border-amber-500/50 transition-all duration-500 flex flex-col font-sans">
      {/* --- DECORATIVE CORNER MARKERS --- */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 group-hover:border-amber-500 transition-colors z-20"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40 group-hover:border-amber-500 transition-colors z-20"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40 group-hover:border-amber-500 transition-colors z-20"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 group-hover:border-amber-500 transition-colors z-20"></div>

      {/* --- IMAGE SECTION --- */}
      <div className="relative w-full h-56 overflow-hidden border-b border-white/5">
        <Image
          src={coverImage}
          alt={altText}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[0.3] group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Gradient for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/20 to-black/40 opacity-90" />

        {/* Top Row: Date & Difficulty */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs border border-white/10 px-2 py-1">
            <Calendar className="w-3 h-3 text-neutral-400" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-200">
              {startDate?.format ? startDate.format("MMM DD") : "TBD"}
            </span>
          </div>

          <div
            className={`px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest border backdrop-blur-xs ${difficultyColor}`}
          >
            {difficulty}
          </div>
        </div>

        {/* Bottom Row: Location (Left) & Stats (Right) */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end z-10">
          {location ? (
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-amber-500" />
              <span className="text-xs font-medium text-white tracking-wide drop-shadow-md">
                {location}
              </span>
            </div>
          ) : (
            <div />
          )}

          {/* Compact Stats HUD */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs border border-white/10 px-2 py-[2px]">
              <Mountain className="w-3 h-3 text-neutral-400" />
              <span className="text-[10px] font-mono font-bold text-neutral-200">
                {altitude}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs border border-white/10 px-2 py-[2px]">
              <Route className="w-3 h-3 text-neutral-400" />
              <span className="text-[10px] font-mono font-bold text-neutral-200">
                {distance}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-5 flex flex-col gap-3 grow relative">
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-lg font-bold text-white leading-tight group-hover:text-amber-500 transition-colors duration-300">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-amber-500 transition-colors duration-300 shrink-0 mt-1" />
          </div>
          <p className="mt-2 text-xs text-neutral-400 line-clamp-2 leading-relaxed border-l-2 border-white/5 pl-3 group-hover:border-amber-500/50 transition-colors">
            {shortDescription}
          </p>
        </div>

        {/* --- ACTION FOOTER --- */}
        <div className="mt-auto pt-3 border-t border-white/5">
          <Link
            href={constructedLink}
            className="group/btn block w-full py-2 bg-white text-black hover:bg-amber-500 transition-colors duration-300 font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
          >
            explore{" "}
            <Play className="w-3 h-3 fill-current group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
