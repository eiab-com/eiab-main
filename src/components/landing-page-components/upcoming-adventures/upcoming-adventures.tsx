import AdventureCard from "@/components/adventures/adventure-card/adventure-card";
import { getUpcomingAdventures } from "@/actions/adventures";
import dayjs from "dayjs";
import { Activity, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Adventure } from "@/types";

const UpcomingAdventures = async () => {
  let upcomingAdventures: Adventure[] = [];
  try {
    const result = await getUpcomingAdventures();
    if (result.success && result.data) {
      upcomingAdventures = result.data as Adventure[];
    }
  } catch (error) {
    console.error("Error fetching upcoming adventures:", error);
  }

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden font-sans selection:bg-amber-500 selection:text-black border-t border-white/5">
      {/* --- GRID AND GUIDELINES REMOVED --- */}

      <div className="relative z-10 max-w-[1800px] mx-auto">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-6">
            {/* Technical Label */}
            <div className="flex items-center gap-3 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Calendar className="w-3 h-3" />
              <span>Temporal Log // Q3-Q4</span>
              <div className="h-px w-12 bg-amber-500/50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] text-white">
              UPCOMING <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-200">
                DEPLOYMENTS
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 max-w-md text-left md:text-right">
            <p className="text-neutral-400 text-sm leading-relaxed border-l-2 md:border-l-0 md:border-r-2 border-amber-500/30 pl-4 md:pr-4 md:pl-0">
              Next-gen expeditions featuring high-altitude passes and remote
              sector navigation. Slots are limited for optimal team cohesion.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              <Activity className="w-3 h-3 text-green-500 animate-pulse" />
              <span>Registration Status: Open</span>
            </div>
          </div>
        </div>

        {/* --- ADVENTURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {upcomingAdventures.map((adventure) => (
            <AdventureCard
              key={adventure.id}
              title={adventure.title}
              id={adventure.id}
              coverImage={adventure.imageSrc}
              altText={adventure.altText}
              shortDescription={adventure.shortDescription}
              altitude={adventure.highestAltitude}
              distance={adventure.totalDistance}
              startDate={dayjs(adventure.startDate)}
              location={adventure.state ?? undefined}
              difficulty={adventure.difficultyLevel as "Easy" | "Moderate" | "Hard" | "Expert" | undefined}
            />
          ))}
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="mt-16 flex justify-center border-t border-white/5 pt-12">
          <Link href="/adventures">
            <button className="group relative px-8 py-4 bg-[#0a0a0a] border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:border-transparent transition-all duration-300">
              <span className="flex items-center gap-3">
                Exlore All Expeditions{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Decorative Corner Markers for Button */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-white group-hover:bg-black transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-white group-hover:bg-black transition-colors"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingAdventures;
