"use client";

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Radio, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AdventureEnquiryFormSchema,
  adventureEnquiryType,
  countryCodes,
} from "@/schema";
import { submitAdventureEnquiryForm } from "@/actions/enquiries";
import { toast } from "sonner";
import { useTransition } from "react";

const AdventureEnquiryForm = ({
  adventureTitle,
}: {
  adventureTitle: string;
}) => {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<adventureEnquiryType>({
    resolver: zodResolver(AdventureEnquiryFormSchema),
    defaultValues: {
      destination: adventureTitle,
    },
  });

  const onSubmit = (data: adventureEnquiryType) => {
    startTransition(async () => {
      const result = await submitAdventureEnquiryForm(data);
      if (result.success) {
        toast.success(result.success);
        reset();
      } else {
        toast.error(result.error);
      }
    });
  };

  return (
    <DialogContent className="max-w-md bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 text-white sm:rounded-sm p-8 font-sans">
      <DialogHeader className="mb-6">
        <DialogTitle className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
          <Radio className="w-4 h-4 text-amber-500 animate-pulse" />
          Secure Uplink
        </DialogTitle>
        <p className="text-xs font-mono text-neutral-500 uppercase">
          Subject: {adventureTitle}
        </p>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input type="hidden" {...register("destination")} />
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-neutral-400">
            Identity
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-amber-500 focus:outline-none text-white placeholder:text-neutral-700"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-neutral-400">
            Comms Frequency
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-amber-500 focus:outline-none text-white placeholder:text-neutral-700"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="flex gap-2">
          <div className="w-1/3 space-y-1">
            <label className="text-[10px] font-mono uppercase text-neutral-400">
              Country Code
            </label>
            <select
              {...register("countryCode")}
              className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-amber-500 focus:outline-none text-white placeholder:text-neutral-700"
            >
              {countryCodes.map((c) => (
                <option
                  key={c.code}
                  value={c.code}
                  className="bg-black text-white"
                >
                  {c.country} ({c.code})
                </option>
              ))}
            </select>
          </div>
          <div className="w-2/3 space-y-1">
            <label className="text-[10px] font-mono uppercase text-neutral-400">
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Contact Number"
              className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-amber-500 focus:outline-none text-white placeholder:text-neutral-700"
            />
          </div>
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}

        <div className="space-y-1">
          <label className="text-[10px] font-mono uppercase text-neutral-400">
            Transmission
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Mission queries or requirements... (min. 10 characters)"
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-amber-500 focus:outline-none text-white placeholder:text-neutral-700"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-amber-500 text-black font-bold uppercase tracking-widest hover:bg-amber-400 mt-2 flex items-center justify-center"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Send className="w-3 h-3 mr-2" /> Send Signal
            </>
          )}
        </Button>
      </form>
    </DialogContent>
  );
};

export default AdventureEnquiryForm;