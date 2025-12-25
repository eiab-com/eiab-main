"use client";

import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import {
  MapPin,
  Mountain,
  Gauge,
  Calendar,
  Users,
  CalendarPlus,
  Compass,
  Download,
  Info,
  Activity,
  Radio,
  Shield,
  Share2,
} from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import AdventureEnquiryForm from "@/components/adventures/adventure-enquiry-form";
import { toast } from "sonner";
import { Adventure } from "@/types";

// --- 1. UTILITY FUNCTIONS ---
const createGoogleCalendarLink = (title: string, start: string, end: string, details: string) => {
  const formatDate = (date: string) => dayjs(date).format("YYYYMMDD");
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${formatDate(start)}/${formatDate(
    end
  )}&details=${encodeURIComponent(details)}`;
};

// --- 3. SUB-COMPONENTS ---

const SectionHeader = ({ title, id }: { title: string; id: string }) => (
  <div className="flex items-end gap-4 mb-8 border-b border-white/10 pb-4">
    <span className="text-4xl font-bold text-white/10 font-mono leading-none select-none">
      {id}
    </span>
    <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
      {title}
    </h2>
  </div>
);

const TelemetryItem = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string | number | null | undefined }) => (
  <div className="p-6 flex flex-col justify-center items-center text-center gap-2 group hover:bg-white/2 transition-colors">
    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-amber-500 transition-colors" />
    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
      {label}
    </span>
    <span className="text-sm font-bold text-white">{value || "N/A"}</span>
  </div>
);

const PhotoViewer = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    {images?.map((src, idx) => (
      <div
        key={idx}
        className="relative aspect-video bg-black overflow-hidden group"
      >
        <Image
          src={src}
          alt="Gallery"
          fill
          className="object-cover opacity-70 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
        />
        <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
        {/* Corner Markers */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
      </div>
    ))}
  </div>
);

export default function AdventureDetailClient({ adventure }: { adventure: Adventure }) {
  const formattedStartDate = dayjs(adventure.startDate).format("DD MMM YYYY");
  const formattedEndDate = dayjs(adventure.endDate).format("DD MMM YYYY");

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <Dialog>
      <section className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-amber-500 selection:text-black font-sans overflow-x-hidden -mt-2">
        {/* --- MOBILE SHARE BUTTON --- */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
            <Button onClick={handleShare} size="icon" className="rounded-full h-14 w-14 bg-amber-500 text-black shadow-lg hover:bg-amber-600">
                <Share2 className="h-6 w-6" />
            </Button>
        </div>

        {/* --- VERTICAL GUIDES --- */}
        <div className="absolute inset-0 z-0 pointer-events-none px-6 md:px-12 max-w-[1800px] mx-auto">
          <div className="absolute left-6 md:left-12 top-0 h-full w-[1px] bg-white/5"></div>
          <div className="absolute right-6 md:right-12 top-0 h-full w-[1px] bg-white/5"></div>
        </div>

        {/* --- HERO SECTION --- */}
        <div className="relative z-10 w-full h-[85vh] flex flex-col justify-end pb-12 border-b border-white/10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={adventure.imageSrc}
              alt={adventure.altText}
              fill
              className="object-cover opacity-60 grayscale-[0.3]"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 px-6 md:px-12 max-w-[1800px] mx-auto w-full">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-amber-500 mb-6">
              <Link
                href="/adventures"
                className="hover:text-white transition-colors"
              >
                Archive 01
              </Link>
              <span>/</span>
              <span className="text-white">
                {adventure.state || "Unknown Sector"}
              </span>
              <span>/</span>
              <span className="text-white opacity-50">
                Mission {adventure.id.substring(20, 4).toUpperCase()}
              </span>
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-mono uppercase tracking-widest">
                  <Radio className="w-3 h-3 animate-pulse" />
                  <span>Status: Recruiting</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.85] uppercase mix-blend-lighten">
                  {adventure.title}
                </h1>
              </div>

              {/* Hero HUD Stats */}
              <div className="hidden md:flex gap-8 border-l border-white/20 pl-8">
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    Operation Duration
                  </p>
                  <p className="text-3xl font-bold text-white font-mono">
                    {adventure.rideDuration}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    Clearance Level
                  </p>
                  <p className="text-3xl font-bold text-white font-mono">
                    {adventure.difficultyLevel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TELEMETRY STRIP --- */}
        <div className="relative z-10 border-b border-white/10 bg-[#0a0a0a]">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 divide-x divide-white/10 border-x border-white/10">
              <TelemetryItem
                icon={Mountain}
                label="Max Altitude"
                value={adventure.highestAltitude}
              />
              <TelemetryItem
                icon={Gauge}
                label="Total Distance"
                value={adventure.totalDistance}
              />
              <TelemetryItem
                icon={MapPin}
                label="Extraction Point"
                value={adventure.startingPoint}
              />
              <TelemetryItem
                icon={Users}
                label="Squad Size"
                value={adventure.groupSize}
              />
              <TelemetryItem
                icon={Compass}
                label="Region"
                value={adventure.state}
              />
              <TelemetryItem icon={Shield} label="Support" value="Full Team" />
            </div>
          </div>
        </div>

        {/* --- MAIN LAYOUT --- */}
        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* --- LEFT COLUMN: INTEL --- */}
            <div className="lg:col-span-8 space-y-16">
              {/* Mission Briefing */}
              <section>
                <SectionHeader title="Mission Briefing" id="01" />
                <div className="prose prose-invert max-w-none text-neutral-300 leading-relaxed text-lg border-l-2 border-amber-500/20 pl-6">
                  {adventure.longDescription}
                </div>
              </section>

              {/* Objectives */}
              <section>
                <SectionHeader title="Key Objectives" id="02" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adventure.keyHighlights?.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                    >
                      <div className="mt-1 w-1.5 h-1.5 bg-amber-500 rounded-sm group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all"></div>
                      <p className="text-sm font-mono text-neutral-300">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Visual Logs */}
              {adventure.photoGallery && (
                <section>
                  <SectionHeader title="Visual Recon" id="03" />
                  <div className="border border-white/10 p-1 bg-white/[0.02]">
                    <PhotoViewer images={adventure.photoGallery} />
                  </div>
                </section>
              )}

              {/* Mission Log (Itinerary) */}
              <section>
                <SectionHeader title="Mission Log" id="04" />
                <div className="border border-white/10 divide-y divide-white/10 bg-[#0a0a0a]">
                  <Accordion type="single" collapsible className="w-full">
                    {adventure.itinerary?.map((day) => (
                      <AccordionItem
                        key={day.day}
                        value={`day-${day.day}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="hover:no-underline hover:bg-white/5 px-6 py-5 group data-[state=open]:bg-white/5">
                          <div className="flex items-center gap-6 text-left">
                            <div className="flex flex-col items-center justify-center w-12 h-12 border border-white/10 bg-black group-hover:border-amber-500/50 transition-colors">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase">
                                Day
                              </span>
                              <span className="text-lg font-bold text-white font-mono">
                                {day.day.toString().padStart(2, "0")}
                              </span>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                                {day.title}
                              </h4>
                              {day.distance && (
                                <p className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mt-1">
                                  Distance: {day.distance}
                                </p>
                              )}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-6 bg-black/50 border-t border-white/5">
                          <div className="pl-[4.5rem] relative">
                            <div className="absolute left-[1.5rem] top-0 bottom-0 w-[1px] bg-white/10 border-l border-dashed border-white/20"></div>
                            <ul className="space-y-3">
                              {day.highlights.map((highlight, index) => (
                                <li
                                  key={index}
                                  className="flex items-start gap-3 text-neutral-300 font-mono text-sm"
                                >
                                  <span className="text-amber-500 mt-1">
                                    ::
                                  </span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
            </div>

            {/* --- RIGHT COLUMN: MISSION CONTROL --- */}
            <div className="lg:col-span-4 space-y-8">
              {/* Control Panel */}
              <div className="sticky top-24 bg-[#0a0a0a] border border-white/10 will-change-transform">
                {/* Panel Header */}
                <div className="p-4 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500">
                    Mission Parameters
                  </span>
                  <Activity className="w-4 h-4 text-neutral-600" />
                </div>

                {/* Pricing Module */}
                <div className="p-6 grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                    <span className="text-xs font-mono text-neutral-400 uppercase">
                      Rider Access
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {adventure.ridePrice?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/5 pb-4">
                    <span className="text-xs font-mono text-neutral-400 uppercase">
                      Pillion Access
                    </span>
                    <span className="text-xl font-bold text-neutral-300">
                      {adventure.pillionPrice?.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">
                      Required Deposit
                    </span>
                    <span className="text-sm font-mono text-white">
                      {adventure.deposit?.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Dates Module */}
                <div className="bg-white/[0.02] p-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-black">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase">
                        Launch
                      </p>
                      <p className="text-sm font-bold text-white">
                        {formattedStartDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-black">
                      <Calendar className="w-4 h-4 text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-neutral-500 uppercase">
                        Return
                      </p>
                      <p className="text-sm font-bold text-white">
                        {formattedEndDate}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 space-y-3 border-t border-white/10">
                  <DialogTrigger asChild>
                    <Button className="w-full bg-white text-black hover:bg-amber-500 hover:text-black font-bold uppercase tracking-[0.2em] text-xs h-12 rounded-none border border-transparent transition-all">
                      Request Access
                    </Button>
                  </DialogTrigger>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent text-neutral-400 hover:text-white border-white/10 hover:border-white/30 font-mono text-xs uppercase tracking-widest h-12 rounded-none"
                  >
                    <a
                      href={createGoogleCalendarLink(
                        adventure.title,
                        adventure.startDate.toString(),
                        adventure.endDate.toString(),
                        adventure.shortDescription
                      )}
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <CalendarPlus className="w-3 h-3" /> Sync to Cal
                    </a>
                  </Button>
                </div>

                {/* Download Module */}
                <div className="p-6 bg-amber-950/10 border-t border-amber-500/10">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-amber-500 mb-3 flex items-center gap-2">
                    <Info className="w-3 h-3" /> Data Packet Available
                  </h4>
                  <a
                    href={adventure.infoPackUrl ?? undefined}
                    download
                    className="group flex items-center justify-between w-full p-3 border border-dashed border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/10 transition-colors"
                  >
                    <span className="text-xs font-bold text-amber-500/80 group-hover:text-amber-500">
                      Download PDF Brief
                    </span>
                    <Download className="w-3 h-3 text-amber-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Dialog Content */}
        <AdventureEnquiryForm adventureTitle={adventure.title} />
      </section>
    </Dialog>
  );
}
