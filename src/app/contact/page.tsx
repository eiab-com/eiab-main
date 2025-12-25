"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Mail, Send, Loader2 } from "lucide-react";
import {
  contactFormSchema,
  countryCodes,
  type ContactFormValues,
} from "@/schema";
import { submitContactForm } from "@/actions/contacts";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<{
    error?: string;
    success?: string;
  }>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+44",
      location: "",
      message: "",
      contactMethod: "Email",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormStatus({});

    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setIsSubmitted(true);
        reset();
      } else if (result.error) {
        setFormStatus({ error: result.error });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        error: "There was an error submitting your form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles =
    "bg-transparent border border-white/10 focus:border-amber-500/50 h-12 text-white placeholder:text-neutral-500";
  const labelStyles =
    "text-xs font-mono uppercase tracking-widest text-neutral-400";

  return (
    <section className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black font-sans">
      {/* --- HEADER SECTION --- */}
      <div className="relative z-10 pt-32 pb-8 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            <Mail className="w-3 h-3" />
            <span>Secure Transmission</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
            ESTABLISH CONTACT
          </h1>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Your message will be encrypted and transmitted to our command
            center. We typically respond within one standard solar cycle.
          </p>
        </div>
      </div>

      {/* --- FORM CONTAINER --- */}
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-3xl mx-auto">
        {isSubmitted ? (
          <div className="border border-dashed border-green-500/30 bg-green-500/5 rounded-lg p-8 text-center flex flex-col items-center gap-4 transition-all duration-500">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <h2 className="text-2xl font-semibold text-white">
              Transmission Received
            </h2>
            <p className="text-neutral-400">
              Thank you for your message. We will analyze the data and respond
              shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-amber-500 hover:text-amber-400 text-xs underline underline-offset-4"
            >
              Initiate New Transmission
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xs p-8 space-y-8"
          >
            {formStatus.error && (
              <p className="text-red-500/80 text-sm font-mono bg-red-500/10 p-3 border border-red-500/30">
                {formStatus.error}
              </p>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className={labelStyles}>
                  Full Name
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="Operator ID"
                  className={inputStyles}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className={labelStyles}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  {...register("email")}
                  placeholder="secure@channel.com"
                  className={inputStyles}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className={labelStyles}>
                Location
              </Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="City, Sector"
                className={inputStyles}
              />
              {errors.location && (
                <p className="text-red-500 text-xs font-mono mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="countryCode" className={labelStyles}>
                  Country Code
                </Label>
                <Select
                  onValueChange={(value) => setValue("countryCode", value)}
                  defaultValue="+44"
                >
                  <SelectTrigger className={inputStyles}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0a0a0a] border-white/20 text-white">
                    {countryCodes.map(({ code, country }) => (
                      <SelectItem
                        key={code}
                        value={code}
                        className="focus:bg-amber-500/20"
                      >
                        {country} ({code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone" className={labelStyles}>
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="Comms Line"
                  className={inputStyles}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs font-mono mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactMethod" className={labelStyles}>
                Preferred Comms Channel
              </Label>
              <Select
                onValueChange={(value) =>
                  setValue("contactMethod", value as "Email" | "Phone")
                }
                defaultValue="Email"
              >
                <SelectTrigger className={inputStyles}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#0a0a0a] border-white/20 text-white">
                  <SelectItem value="Email" className="focus:bg-amber-500/20">
                    Email
                  </SelectItem>
                  <SelectItem value="Phone" className="focus:bg-amber-500/20">
                    Phone
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.contactMethod && (
                <p className="text-red-500 text-xs font-mono mt-1">
                  {errors.contactMethod.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className={labelStyles}>
                Message
              </Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Include all relevant intel..."
                className={`${inputStyles} min-h-[120px]`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs font-mono mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-sm font-bold tracking-widest uppercase bg-white text-black hover:bg-amber-500 transition-colors duration-300 flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  Send Transmission
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
