"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/mock-data/content";
import Image from "next/image";
const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="col-span-12 h-fit px-4 sm:px-8 md:px-12 py-16 flex flex-col justify-center items-center gap-y-4 sm:gap-y-8 relative"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 uppercase font-heading">
        What Riders Say
      </h2>
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{ align: "start", loop: true }}
        className="w-full mx-auto z-40"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-1/3 px-4 py-2"
            >
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center p-6 h-full">
                    {/* Customer Image */}
                    <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4 text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <span key={i}>★</span>
                        )
                      )}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-center italic mb-4">
                      &quot;{testimonial.text}&quot;
                    </p>

                    {/* Name & Location */}
                    <div className="text-center mt-auto">
                      <p className="font-bold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};
export default TestimonialsSection;
