import { AdventureForm } from "@/components/adventures/adventure-form";
import { Database } from "lucide-react";

const Page = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Database className="w-3 h-3" />
            <span>Data Stream / Adventures / Add</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9] mt-2">
            ADD NEW ADVENTURE
          </h1>
        </div>
      </div>

      {/* --- FORM --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
        <div className="border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xs overflow-x-auto p-8 rounded-lg">
            <AdventureForm />
        </div>
      </div>
    </section>
  );
};

export default Page;