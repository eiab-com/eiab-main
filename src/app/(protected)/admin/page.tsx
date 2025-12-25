"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ListIcon, MailIcon, LayoutDashboard, LogOut } from "lucide-react";

const Page = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      

      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <LayoutDashboard className="w-3 h-3" />
            <span>Administration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
            CONTROL PANEL
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Access and manage internal data streams. Handle enquiries and review contact logs.
          </p>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Adventure Enquiries Card */}
          <Link href="/admin/adventure-enquiry" className="group">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xs border border-white/10 hover:border-amber-500/50 p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 h-full">
              <ListIcon className="w-16 h-16 text-neutral-400 group-hover:text-amber-500 transition-colors" />
              <h2 className="text-xl font-bold tracking-tight text-white">Adventure Enquiries</h2>
              <p className="text-sm text-neutral-500 font-mono">View and manage all incoming tour enquiries.</p>
            </div>
          </Link>
          
          {/* Manage Adventures Card */}
          <Link href="/admin/adventures" className="group">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xs border border-white/10 hover:border-amber-500/50 p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-neutral-400 group-hover:text-amber-500 transition-colors"><path d="m12 19-7-7 7-7 7 7-7 7Z"/><path d="m19 12-7 7-7-7"/></svg>
              <h2 className="text-xl font-bold tracking-tight text-white">Manage Adventures</h2>
              <p className="text-sm text-neutral-500 font-mono">Add, edit, and view all adventure listings.</p>
            </div>
          </Link>

          {/* Contact List Card */}
          <Link href="/admin/contact-list" className="group">
            <div className="bg-[#0a0a0a]/80 backdrop-blur-xs border border-white/10 hover:border-amber-500/50 p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 h-full">
              <MailIcon className="w-16 h-16 text-neutral-400 group-hover:text-amber-500 transition-colors" />
              <h2 className="text-xl font-bold tracking-tight text-white">Contact Logs</h2>
              <p className="text-sm text-neutral-500 font-mono">Review general contact form submissions.</p>
            </div>
          </Link>
        </div>

        {/* Sign Out Button */}
        <div className="flex justify-center mt-12 border-t border-white/10 pt-8">
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            variant="outline"
            className="border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/50 transition-colors flex items-center gap-2 w-48"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Page;
