"use client";
import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import dayjs from "dayjs";
import { Compass, SlidersHorizontal, X, Map, Loader2 } from "lucide-react";
import React, { useState, useMemo, useEffect } from "react";
import { Adventure } from "@/types";

// --- MAIN PAGE COMPONENT ---
const Page = () => {
  const [adventures, setAdventures] = useState<Adventure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/adventures");
        if (!response.ok) {
          throw new Error("Failed to fetch adventures");
        }
        const data = await response.json();
        setAdventures(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchAdventures();
  }, []);

  const availableStates = useMemo(() => {
    const states = adventures
      .map((adventure: Adventure) => adventure.state)
      .filter((state): state is string => Boolean(state));
    return Array.from(new Set(states)).sort();
  }, [adventures]);

  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  // Handle state filter toggle
  const handleStateToggle = (state: string) => {
    setSelectedStates((prev) =>
      prev.includes(state)
        ? prev.filter((s) => s !== state)
        : [...prev, state]
    );
  };

  // Filter adventures based on selected states
  const filteredAdventures = useMemo(() => {
    if (selectedStates.length === 0) {
      return adventures;
    }
    return adventures.filter(
      (adventure: Adventure) => adventure.state && selectedStates.includes(adventure.state)
    );
  }, [selectedStates, adventures]);

  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5 bg-linear-to-b from-black to-black/90">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Compass className="w-3 h-3" />
              <span>Expedition Log // Public Access</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
              ARCHIVE <span className="text-neutral-600">01</span>
            </h1>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed border-l-2 border-amber-500/30 pl-4 max-w-xl">
              Curated database of high-altitude biking trails. Navigate
              challenging terrains and experience authentic culture.
            </p>
          </div>

          {/* Stats / Metadata HUD */}
          <div className=" gap-8 font-mono text-[10px] tracking-widest text-neutral-500 uppercase hidden md:flex">
            <div className="flex flex-col">
              <span>Total Routes</span>
              <span className="text-xl text-white font-sans font-bold">
                {adventures.length}
              </span>
            </div>
            <div className="flex flex-col">
              <span>Active Regions</span>
              <span className="text-xl text-white font-sans font-bold">
                {availableStates.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTROL BAR (STICKY FILTER) --- */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-3 will-change-transform">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Filter Label */}
          <div className="flex items-center gap-2 text-neutral-400 text-xs font-mono uppercase tracking-widest min-w-fit">
            <SlidersHorizontal className="w-3 h-3 text-amber-500" />
            <span>Filter Protocols:</span>
          </div>

          {/* Scrollable Chip List */}
          <div className="flex-1 w-full overflow-x-auto no-scrollbar flex items-center gap-2 pb-2 md:pb-0">
            <button
              onClick={() => setSelectedStates([])}
              className={`
                        px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all border
                        ${
                          selectedStates.length === 0
                            ? "bg-white text-black border-white font-bold"
                            : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-neutral-300"
                        }
                    `}
            >
              ALL
            </button>

            {availableStates.map((state) => (
              <button
                key={state}
                onClick={() => handleStateToggle(state)}
                className={`
                            px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all border whitespace-nowrap
                            ${
                              selectedStates.includes(state)
                                ? "bg-amber-500/10 text-amber-500 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                                : "bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600 hover:text-neutral-300"
                            }
                        `}
              >
                {state}
              </button>
            ))}
          </div>

          {/* Active Filter Indicator */}
          {selectedStates.length > 0 && (
            <button
              onClick={() => setSelectedStates([])}
              className="hidden md:flex items-center gap-1 text-[10px] font-mono uppercase text-red-500 hover:text-red-400 transition-colors"
            >
              <X className="w-3 h-3" /> Reset
            </button>
          )}
        </div>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1800px] mx-auto min-h-[50vh]">
        {loading ? (
           <div className="w-full h-64 flex flex-col items-center justify-center">
              <Loader2 className="w-8 h-8 text-amber-500 animate-spin mb-4" />
              <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase">Loading Archive...</p>
           </div>
        ) : error ? (
          <div className="w-full h-64 flex flex-col items-center justify-center border border-dashed border-red-500/30 bg-red-500/5 rounded-lg">
            <p className="text-red-500 font-mono text-sm tracking-widest uppercase">{error}</p>
          </div>
        ) : filteredAdventures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center md:place-items-start">
            {filteredAdventures.map((adventure: Adventure, index: number) => (
              <AdventureCard
                key={adventure.id || index}
                title={adventure.title}
                coverImage={adventure.imageSrc}
                altText={adventure.altText}
                startDate={dayjs(adventure.startDate)}
                id={adventure.id}
                shortDescription={adventure.shortDescription}
                altitude={adventure.highestAltitude}
                distance={adventure.totalDistance}
                location={adventure.state ?? undefined} // Passing state as location for the card
                difficulty={
                  adventure.difficultyLevel as
                    | "Easy"
                    | "Moderate"
                    | "Hard"
                    | "Expert"
                    | undefined
                } // Default if missing
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-64 flex flex-col items-center justify-center border border-dashed border-white/10 bg-white/5 rounded-lg">
            <Map className="w-8 h-8 text-neutral-600 mb-4" />
            <p className="text-neutral-400 font-mono text-sm tracking-widest uppercase">
              No Expeditions Found in this Sector
            </p>
            <button
              onClick={() => setSelectedStates([])}
              className="mt-4 text-amber-500 hover:text-amber-400 text-xs underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;