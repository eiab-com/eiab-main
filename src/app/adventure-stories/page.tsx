"use client";
import { stories } from "@/mock-data/content";
import React, { useState } from "react";
import Image from "next/image";
import { Star, BookOpen, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Story {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  imageSrc: string;
}

const Page = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <Dialog
      open={!!selectedStory}
      onOpenChange={(isOpen) => !isOpen && setSelectedStory(null)}
    >
      <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
        {/* --- HEADER SECTION --- */}
        <div className="relative z-10 pt-32 pb-16 px-6 md:px-12 border-b border-white/5 bg-linear-to-b from-black to-black/90">
          <div className="max-w-[1800px] mx-auto">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
                <BookOpen className="w-3 h-3" />
                <span>Field Reports // Testimonials</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
                ADVENTURE <span className="text-neutral-600">LOGS</span>
              </h1>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed border-l-2 border-amber-500/30 pl-4 max-w-xl">
                First-hand accounts from operators who have navigated our
                expeditions. Read their stories of challenge, discovery, and
                triumph.
              </p>
            </div>
          </div>
        </div>

        {/* --- STORIES GRID --- */}
        <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="group relative bg-[#0a0a0a]/80 backdrop-blur-xs border border-white/10 hover:border-amber-500/50 transition-colors duration-300 flex flex-col md:flex-row overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <Image
                    src={story.imageSrc}
                    alt={`${story.name}'s adventure`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {story.name}
                    </h2>
                    <p className="text-sm text-neutral-300 font-mono">
                      {story.location}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between p-6 grow">
                  <div>
                    <div className="flex items-center mb-4">
                      {Array.from({ length: story.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-neutral-400 leading-relaxed text-sm line-clamp-5">
                      {story.text}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="self-start mt-6 px-4 py-2 bg-transparent border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
                  >
                    Read Full Report <FileText className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dialog Content */}
        {selectedStory && (
          <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 text-white max-w-3xl p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-2xl font-bold uppercase tracking-tight flex items-center justify-between">
                <span className="flex items-center gap-3">
                  {selectedStory.name}{" "}
                  <span className="px-2 py-1 text-[10px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-sm">
                    {selectedStory.location}
                  </span>
                </span>
              </DialogTitle>
              <div className="flex mt-1">
                {Array.from({ length: selectedStory.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="relative h-80 w-full overflow-hidden border border-white/10">
                <Image
                  src={selectedStory.imageSrc}
                  alt={`${selectedStory.name}'s adventure`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-mono text-sm leading-relaxed text-neutral-300 whitespace-pre-line max-h-80 overflow-y-auto pr-2">
                {selectedStory.text}
              </div>
            </div>
          </DialogContent>
        )}
      </section>
    </Dialog>
  );
};

export default Page;
