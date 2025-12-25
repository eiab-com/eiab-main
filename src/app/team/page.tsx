"use client";

import React from "react";
// Removed next/image import to fix build error
import Image from "next/image";
import {
  Mail,
  Instagram,
  Youtube,
  Fingerprint,
  ScanFace,
  FileText,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// --- MOCK DATA ---
const teamMembers = [
  {
    id: "OP-01",
    name: "Vinayak Hulihalli",
    role: "Co-founder // Lead Ops",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//WhatsApp%20Image%202025-02-24%20at%204.04.50%20AM.jpeg",
    email: "vinayakhulihalli07@gmail.com",
    instagram: "https://www.instagram.com/_dronographer_",
    youtube: "https://www.youtube.com/@Dronographer",
    about:
      "Passionate traveler, motorbiking enthusiast, and professional photographer...",
    fullDescription:
      "I’m a passionate traveler, motorbiking enthusiast, and professional photographer who has explored over 15 Indian states, covering 60,000 km since 2019. As an audiologist by profession and co-founder of Explore India and Beyond, I capture and share the beauty of travel through photography and storytelling, inspiring others to embrace new adventures.",
  },
  {
    id: "OP-02",
    name: "Samarth Thite",
    role: "Co-founder // Logistics",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//Team%20photo.jpg",
    email: "Samarththite12@gmail.com",
    instagram: "https://www.instagram.com/a_travellester/",
    about:
      "With a passion for travel and adventure, I’ve explored 26 Indian states...",
    fullDescription:
      "With a passion for travel and adventure, I’ve explored 26 Indian states, covering 70,000 km on my motorbike since 2017. From Business Travel Consultant to Guest Relations Manager, I blend hospitality with exploration. As co-founder of ExploreIndiaandBeyond, I share my journey to inspire others to discover India’s beauty.",
  },
  {
    id: "TAC-01",
    name: "Praveen",
    role: "Adventure Guide // Recon",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//praveen.jpeg",
    email: "alex.johnson@example.com",
    instagram: "https://www.instagram.com/alex_adventures",
    about: "Experienced mountain guide and outdoor survival expert...",
    fullDescription:
      "Praveen is a professional biker with over 5 years of experience as a tour captain. He has clocked more than 120,000 kilometres on his motorbike and a well-known photographer.\n▪ His extensive knowledge of motorbikes, repair techniques, and local routes ensures a smooth and enjoyable journey.\n▪ With strong connections across the region, Praveen is well-prepared to handle any challenges that may arise during the trip.",
  },
  {
    id: "TAC-02",
    name: "Palli",
    role: "Adventure Guide // Medic",
    image:
      "https://jsccmjobjntyhiiwwdmv.supabase.co/storage/v1/object/public/team//palli.jpeg",
    email: "maria.gonzalez@example.com",
    instagram: "https://www.instagram.com/maria_travels",
    about: "Dedicated to creating seamless travel experiences...",
    fullDescription:
      "Pali is a professional biker with over 9 years of experience as a tour captain with nearly 50 tours in the region. He has clocked more than 200,000 kilometres on his motorbike\nHe’s also WAFA AND WR certified medical assistant\n▪ His extensive knowledge of motorbikes, repair techniques, and local routes ensures a smooth and enjoyable journey.\n▪ With strong connections across the region, Pali is well-prepared to handle any challenges that may arise during the trip.",
  },
];

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  email: string;
  instagram: string;
  youtube?: string;
  about: string;
  fullDescription: string;
}

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null);

  return (
    <Dialog
      open={!!selectedMember}
      onOpenChange={(isOpen) => !isOpen && setSelectedMember(null)}
    >
      <section
        id="teams-section"
        className="relative w-full bg-[#050505] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden font-sans selection:bg-amber-500 selection:text-black border-t border-white/5"
      >
        {/* --- VERTICAL GUIDE LINES --- */}
        <div className="absolute inset-0 z-0 pointer-events-none px-6 md:px-12 lg:px-24">
          <div className="absolute left-6 md:left-12 lg:left-24 top-0 h-full w-1px bg-white/5"></div>
          <div className="absolute right-6 md:right-12 lg:right-24 top-0 h-full w-1px bg-white/5"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto">
          {/* --- HEADER --- */}
          <div className="mb-20 space-y-6">
            <div className="flex items-center gap-3 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <ScanFace className="w-4 h-4" />
              <span>Personnel Log // Active Roster</span>
              <div className="h-1px w-12 bg-amber-500/50"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] text-white">
              MEET THE <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-amber-200">
                SQUADRON
              </span>
            </h2>
          </div>

          {/* --- TEAM GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 p-6 flex flex-col sm:flex-row gap-8 transition-all duration-500"
              >
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-amber-500 transition-colors z-20"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-amber-500 transition-colors z-20"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-amber-500 transition-colors z-20"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-amber-500 transition-colors z-20"></div>

                {/* Image / ID Photo */}
                <div className="relative w-full sm:w-48 h-64 sm:h-auto shrink-0 border border-white/5 bg-black overflow-hidden group/image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                  {/* ID Overlay */}
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur text-[9px] font-mono text-amber-500 tracking-widest border border-amber-500/20">
                    {member.id}
                  </div>
                  {/* Scan Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent h-[50%] w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>
                </div>

                {/* Data / Content */}
                <div className="flex flex-col flex-grow justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                        {member.name}
                      </h3>
                      <Fingerprint className="w-8 h-8 text-white/5 group-hover:text-amber-500/20 transition-colors" />
                    </div>

                    <div className="inline-block px-2 py-1 mb-4 border border-white/10 bg-white/5 text-[10px] font-mono text-amber-500 uppercase tracking-widest">
                      {member.role}
                    </div>

                    <p className="text-sm text-neutral-400 leading-relaxed border-l border-white/10 pl-4 mb-6 line-clamp-3">
                      {member.about}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-4">
                    {/* Social Icons */}
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500 text-neutral-400 transition-all"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500 text-neutral-400 transition-all"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      {member.youtube && (
                        <a
                          href={member.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500 text-neutral-400 transition-all"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Dialog Trigger */}
                    <DialogTrigger asChild>
                      <button
                        onClick={() => setSelectedMember(member)}
                        className="ml-auto px-4 py-2 bg-white text-black font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-amber-500 transition-colors flex items-center gap-2"
                      >
                        <span>Access File</span>
                        <FileText className="w-3 h-3" />
                      </button>
                    </DialogTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {selectedMember && (
          <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3">
                {selectedMember.name}
                <span className="px-2 py-1 text-[10px] font-mono bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-sm">
                  {selectedMember.id}
                </span>
              </DialogTitle>
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                {selectedMember.role}
              </p>
            </DialogHeader>
            <div className="mt-4 p-6 border border-white/5 bg-black/40 font-mono text-sm leading-relaxed text-neutral-300 whitespace-pre-line">
              {selectedMember.fullDescription}
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
              <span className="text-[10px] font-mono text-neutral-600 uppercase">
                Clearance Level: 5
              </span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-green-500 uppercase">
                  Active Duty
                </span>
              </div>
            </div>
          </DialogContent>
        )}
      </section>
    </Dialog>
  );
};

export default TeamPage;
