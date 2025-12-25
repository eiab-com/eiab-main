export const dynamic = "force-dynamic";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Database, Loader2, Plus, Pencil } from "lucide-react";
import Link from "next/link";
import { getAdventures } from "@/actions/adventures";
import { AdventurePublishSwitch } from "@/components/adventures/adventure-publish-switch";
import { Adventure } from "@/types";

const Page = async () => {
  let adventures: Adventure[] = [];
  try {
    const result = await getAdventures();
    if (result.success && result.data) {
      adventures = result.data as Adventure[];
    }
  } catch (error) {
    console.error("Error fetching adventures:", error);
  }

  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Database className="w-3 h-3" />
              <span>Data Stream / Adventures</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9] mt-2">
              MANAGE ADVENTURES
            </h1>
          </div>
          <Link href="/admin/adventures/add">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black">
              <Plus className="h-4 w-4 mr-2" />
              Add Adventure
            </Button>
          </Link>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
        <div className="border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xs overflow-x-auto">
          <Table>
            <TableCaption className="py-4 text-neutral-500 text-xs font-mono">
              List of all adventures.
            </TableCaption>
            <TableHeader className="hover:bg-transparent">
              <TableRow className="border-b border-white/10">
                <TableHead className="text-white font-bold">Title</TableHead>
                <TableHead className="text-white font-bold">Status</TableHead>
                <TableHead className="text-white font-bold">Region</TableHead>
                <TableHead className="text-white font-bold">State</TableHead>
                <TableHead className="text-white font-bold">Start Date</TableHead>
                <TableHead className="text-white font-bold">End Date</TableHead>
                <TableHead className="text-white font-bold">Price</TableHead>
                <TableHead className="text-white font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adventures.length > 0 ? (
                adventures.map((adventure: Adventure) => (
                  <TableRow key={adventure.id} className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium text-neutral-200">{adventure.title}</TableCell>
                    <TableCell>
                      <AdventurePublishSwitch id={adventure.id} initialPublished={adventure.published} />
                    </TableCell>
                    <TableCell className="text-neutral-400 font-mono text-xs">{adventure.region}</TableCell>
                    <TableCell className="text-neutral-400 font-mono text-xs">{adventure.state}</TableCell>
                    <TableCell className="text-neutral-500 font-mono text-xs">
                      {new Date(adventure.startDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-neutral-500 font-mono text-xs">
                      {new Date(adventure.endDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-neutral-300">{adventure.ridePrice}</TableCell>
                    <TableCell className="flex gap-2 justify-end">
                      <Link href={`/admin/adventures/edit/${adventure.id}`}>
                        <Button size="icon" variant="outline" className="bg-transparent border-white/20 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-500 text-neutral-300">
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center h-48 text-neutral-500 font-mono">
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Awaiting data stream...</span>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow className="border-t border-white/10 hover:bg-transparent">
                <TableCell colSpan={8} className="text-right font-mono text-xs text-neutral-400">
                  Total Records: {adventures.length}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Page;