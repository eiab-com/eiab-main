import { AdventureForm } from "@/components/adventures/adventure-form";
import { getAdventureById } from "@/actions/adventures";
import { Database } from "lucide-react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const result = await getAdventureById(id);

  if (!result.success || !result.data) {
    return (
      <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center">
        <p>Adventure not found.</p>
      </section>
    );
  }

  const adventure = result.data;

  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Database className="w-3 h-3" />
            <span>Data Stream / Adventures / Edit</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9] mt-2">
            EDIT ADVENTURE
          </h1>
          <p className="text-neutral-400 mt-2">Editing: {adventure.title}</p>
        </div>
      </div>

      {/* --- FORM --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
        <div className="border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xs overflow-x-auto p-8 rounded-lg">
          <AdventureForm adventure={adventure} />
        </div>
      </div>
    </section>
  );
};

export default Page;
