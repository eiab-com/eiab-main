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
import React from "react";
import { Database, Loader2 } from "lucide-react";
import { Contact } from "@/types";

const Page = async () => {
  let contactedList: Contact[] = [];
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts`,
      { cache: 'no-store' }
    );
    const jsonData = await response.json();
    if (jsonData.success) {
      contactedList = jsonData.data;
    }
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
  
  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      

      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Database className="w-3 h-3" />
            <span>Data Stream / Contact Logs</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9] mt-2">
            GENERAL CONTACTS
          </h1>
        </div>
      </div>

      {/* --- TABLE --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-[1800px] mx-auto">
        <div className="border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xs overflow-x-auto">
          <Table>
            <TableCaption className="py-4 text-neutral-500 text-xs font-mono">
              List of all incoming general contact messages.
            </TableCaption>
            <TableHeader className="hover:bg-transparent">
              <TableRow className="border-b border-white/10">
                <TableHead className="text-white font-bold">Name</TableHead>
                <TableHead className="text-white font-bold">Email</TableHead>
                <TableHead className="text-white font-bold">Phone</TableHead>
                <TableHead className="text-white font-bold">Location</TableHead>
                <TableHead className="text-white font-bold">Contact Method</TableHead>
                <TableHead className="text-white font-bold">Message</TableHead>
                <TableHead className="text-white font-bold">Date</TableHead>
                <TableHead className="text-white font-bold text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contactedList.length > 0 ? (
                contactedList.map((contact: Contact) => (
                  <TableRow key={contact.id} className="border-white/10 hover:bg-white/5">
                    <TableCell className="font-medium text-neutral-200">{contact.name}</TableCell>
                    <TableCell className="text-neutral-400 font-mono text-xs">{contact.email}</TableCell>
                    <TableCell className="text-neutral-400 font-mono text-xs">{contact.phone}</TableCell>
                    <TableCell className="text-neutral-300">{contact.location}</TableCell>
                    <TableCell className="text-neutral-300 font-mono text-xs">{contact.contactMethod}</TableCell>
                    <TableCell className="text-neutral-400 text-sm max-w-xs truncate">{contact.message}</TableCell>
                    <TableCell className="text-neutral-500 font-mono text-xs">
                      {new Date(contact.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" className="bg-transparent border-white/20 hover:bg-white/10 text-neutral-300 text-xs font-mono">
                        View
                      </Button>
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
                  Total Records: {contactedList.length}
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
