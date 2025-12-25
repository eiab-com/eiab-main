"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createAdventure, updateAdventure } from "@/actions/adventures";
import { useRouter } from "next/navigation";
import { Loader2, Plus, Trash } from "lucide-react";
import { toast } from "sonner";
import { Adventure } from "@/types";

const adventureSchema = z.object({
  
  title: z.string().min(1, "Title is required"),
  state: z.string().optional(),
  partOfIndia: z.enum([
    "north",
    "south",
    "east",
    "west",
    "northeast",
    "northwest",
    "southeast",
    "southwest",
  ]).optional(),
  imageSrc: z.string().url("Must be a valid URL"),
  altText: z.string().min(1, "Alt text is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  longDescription: z.string().min(1, "Long description is required"),
  startDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  endDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date",
  }),
  groupSize: z.string().min(1, "Group size is required"),
  infoPackUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  keyHighlights: z.array(z.string()).min(1, "At least one highlight is required"),
  ridePrice: z.string().min(1, "Ride price is required"),
  pillionPrice: z.string().min(1, "Pillion price is required"),
  deposit: z.string().min(1, "Deposit is required"),
  rideDuration: z.string().min(1, "Ride duration is required"),
  highestAltitude: z.string().min(1, "Highest altitude is required"),
  suitableFor: z.string().min(1, "Suitable for is required"),
  totalDistance: z.string().min(1, "Total distance is required"),
  startingPoint: z.string().min(1, "Starting point is required"),
  accommodationType: z.string().min(1, "Accommodation type is required"),
  pickupPoint: z.string().min(1, "Pickup point is required"),
  photoGallery: z.array(z.string().url()).min(1, "At least one photo gallery URL is required"),
  bikeModels: z.array(z.string()).min(1, "At least one bike model is required"),
  difficultyLevel: z.string().min(1, "Difficulty level is required"),
  averageDailyRide: z.string().min(1, "Average daily ride is required"),
  region: z.string().min(1, "Region is required"),
  disabled: z.boolean().default(false),
  itinerary: z.array(
    z.object({
      day: z.number().int(),
      title: z.string().min(1, "Itinerary title is required"),
      distance: z.string().optional(),
      highlights: z.array(z.string()).min(1, "At least one itinerary highlight is required"),
    })
  ),
});

export function AdventureForm({ adventure }: { adventure?: Partial<Adventure> }) {
  const router = useRouter();
  const form = useForm<z.infer<typeof adventureSchema>>({
    resolver: zodResolver(adventureSchema),
    defaultValues: adventure
      ? {
          ...adventure,
          state: adventure.state ?? "",
          partOfIndia: adventure.partOfIndia ?? undefined,
          infoPackUrl: adventure.infoPackUrl ?? "",
          startDate: adventure.startDate ? new Date(adventure.startDate).toISOString().split("T")[0] : "",
          endDate: adventure.endDate ? new Date(adventure.endDate).toISOString().split("T")[0] : "",
          itinerary: adventure.itinerary
            ? adventure.itinerary.map((day) => ({
                ...day,
                distance: day.distance ?? "",
              }))
            : [],
        }
      : {
          
          title: "",
          state: "",
          imageSrc: "",
          altText: "",
          shortDescription: "",
          longDescription: "",
          startDate: "",
          endDate: "",
          groupSize: "",
          infoPackUrl: "",
          keyHighlights: [],
          ridePrice: "",
          pillionPrice: "",
          deposit: "",
          rideDuration: "",
          highestAltitude: "",
          suitableFor: "",
          totalDistance: "",
          startingPoint: "",
          accommodationType: "",
          pickupPoint: "",
          photoGallery: [],
          bikeModels: [],
          difficultyLevel: "",
          averageDailyRide: "",
          region: "",
          disabled: false,
          itinerary: [],
        },
  });

  const { fields: itineraryFields, append: appendItinerary, remove: removeItinerary } = useFieldArray({
    control: form.control,
    name: "itinerary",
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof adventureSchema>) {
    const dataToSubmit = {
      ...values,
      startDate: new Date(values.startDate),
      endDate: new Date(values.endDate),
    };

    const result = (adventure && adventure.id)
      ? await updateAdventure(adventure.id, dataToSubmit)
      : await createAdventure(dataToSubmit);

    if (result.success) {
      toast.success(
        `Adventure ${adventure ? "updated" : "created"} successfully!`
      );
      router.push("/admin/adventures");
    } else {
      toast.error(result.error);
    }
  }

  // Helper for array fields
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleArrayInputChange = (field: any, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split(',').map(item => item.trim()).filter(Boolean);
    field.onChange(value);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Info */}
          
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Adventure Title" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., North" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Himachal Pradesh" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="partOfIndia"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Part of India</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-neutral-900 border-neutral-700">
                      <SelectValue placeholder="Select a part of India" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-neutral-900 text-white">
                    {adventureSchema.shape.partOfIndia.unwrap().options.map((option) => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="difficultyLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Difficulty Level</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Challenging" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Descriptions */}
           <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem className="md:col-span-2 lg:col-span-3">
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="A brief summary of the adventure" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="longDescription"
            render={({ field }) => (
              <FormItem className="md:col-span-2 lg:col-span-3">
                <FormLabel>Long Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="A detailed description of the adventure" {...field} rows={5} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Images */}
          <FormField
            control={form.control}
            name="imageSrc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Main Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/image.jpg" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="altText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Alt Text</FormLabel>
                <FormControl>
                  <Input placeholder="A descriptive alt text" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="photoGallery"
            render={({ field }) => (
              <FormItem className="md:col-span-2 lg:col-span-3">
                <FormLabel>Photo Gallery URLs (comma-separated)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="https://.../img1.jpg, https://.../img2.jpg" 
                    {...field} 
                    value={Array.isArray(field.value) ? field.value.join(', ') : ''}
                    onChange={(e) => handleArrayInputChange(field, e)}
                    className="bg-neutral-900 border-neutral-700" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Dates */}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rideDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ride Duration</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 9 days" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pricing */}
          <FormField
            control={form.control}
            name="ridePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ride Price</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., £ 2899" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pillionPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pillion Price</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., £ 2599" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deposit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deposit</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., £ 899" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Ride Details */}
          <FormField
            control={form.control}
            name="groupSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group Size</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 6-12 riders" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="highestAltitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Highest Altitude</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 14000 ft" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="suitableFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suitable For</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Intermediate riders" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalDistance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Distance</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 800 miles" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="averageDailyRide"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Daily Ride</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 130-200 km" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="bikeModels"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bike Models (comma-separated)</FormLabel>
                <FormControl>
                   <Input 
                    placeholder="Himalayan 450, Bullet 350" 
                    {...field} 
                    value={Array.isArray(field.value) ? field.value.join(', ') : ''}
                    onChange={(e) => handleArrayInputChange(field, e)}
                    className="bg-neutral-900 border-neutral-700" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Logistical Info */}
          <FormField
            control={form.control}
            name="startingPoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Starting Point</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Chandigarh" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pickupPoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Point</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Chandigarh Airport" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="accommodationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Accommodation Type</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Hotels, Guesthouses" {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="infoPackUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Info Pack URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://..." {...field} className="bg-neutral-900 border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="keyHighlights"
            render={({ field }) => (
              <FormItem className="md:col-span-2 lg:col-span-3">
                <FormLabel>Key Highlights (comma-separated)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Highlight 1, Highlight 2" 
                    {...field} 
                    value={Array.isArray(field.value) ? field.value.join(', ') : ''}
                    onChange={(e) => handleArrayInputChange(field, e)}
                    className="bg-neutral-900 border-neutral-700" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="disabled"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border border-neutral-700 p-3 shadow-sm bg-neutral-900 md:col-span-1">
                <div className="space-y-0.5">
                  <FormLabel>Disabled</FormLabel>
                </div>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Itinerary */}
        <div className="space-y-4">
            <h3 className="text-xl font-bold">Itinerary</h3>
            {itineraryFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 border border-neutral-800 p-4 rounded-md">
                     <FormField
                        control={form.control}
                        name={`itinerary.${index}.day`}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Day</FormLabel>
                            <FormControl>
                            <Input type="number" {...field} onChange={e => field.onChange(parseInt(e.target.value))} className="bg-neutral-800 border-neutral-700"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`itinerary.${index}.title`}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                            <Input {...field} className="bg-neutral-800 border-neutral-700"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`itinerary.${index}.distance`}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Distance</FormLabel>
                            <FormControl>
                            <Input {...field} className="bg-neutral-800 border-neutral-700"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`itinerary.${index}.highlights`}
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Highlights (comma-separated)</FormLabel>
                            <FormControl>
                            <Input 
                                {...field} 
                                value={Array.isArray(field.value) ? field.value.join(', ') : ''}
                                onChange={(e) => handleArrayInputChange(field, e)}
                                className="bg-neutral-800 border-neutral-700"
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="button" variant="destructive" size="sm" onClick={() => removeItinerary(index)}>
                        <Trash className="h-4 w-4 mr-2" />
                        Remove Day
                    </Button>
                </div>
            ))}
            <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendItinerary({ day: itineraryFields.length, title: '', distance: '', highlights: [] })}
            >
                <Plus className="h-4 w-4 mr-2" />
                Add Itinerary Day
            </Button>
        </div>


        <Button type="submit" disabled={isSubmitting} className="bg-amber-500 hover:bg-amber-600 text-black w-full">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {adventure ? "Update" : "Create"} Adventure
        </Button>
      </form>
    </Form>
  );
}