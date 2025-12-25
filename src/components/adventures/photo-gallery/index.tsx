"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

interface PhotoViewerProps {
  images: string[];
  title: string;
}

export default function PhotoViewer({ images, title }: PhotoViewerProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    new Array(images.length).fill(true)
  );

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  const handleImageError = (index: number) => {
    setLoadingStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <section className="space-y-6">
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                {/* Skeleton Loader */}
                {loadingStates[index] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-primary/20 rounded-lg" />
                )}
                <Image
                  src={image}
                  alt={`${title} gallery image ${index + 1}`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    loadingStates[index] ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                />
              </div>
            </DialogTrigger>
            <DialogTitle className="hidden">
              <h3 className="text-lg font-semibold">{title}</h3>
            </DialogTitle>
            <DialogContent className="sm:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl p-0 bg-transparent border-none">
              {/* Carousel Navigation */}
              <div className="relative aspect-video w-full h-full">
                {/* Skeleton Loader for Dialog Image */}
                {selectedImageIndex !== null &&
                  loadingStates[selectedImageIndex] && (
                    <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-gray-700 rounded-lg" />
                  )}
                {selectedImageIndex !== null && (
                  <Image
                    src={images[selectedImageIndex]}
                    alt={`${title} gallery image ${selectedImageIndex + 1}`}
                    fill
                    className={`object-contain rounded-lg transition-opacity duration-300 ${
                      loadingStates[selectedImageIndex]
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
                    loading="lazy"
                    onLoad={() => handleImageLoad(selectedImageIndex)}
                    onError={() => handleImageError(selectedImageIndex)}
                  />
                )}
                {/* Previous Button */}
                {selectedImageIndex !== null && selectedImageIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 rounded-full hover:bg-background/80"
                    onClick={handlePrevious}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                )}
                {/* Next Button */}
                {selectedImageIndex !== null &&
                  selectedImageIndex < images.length - 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 rounded-full hover:bg-background/80"
                      onClick={handleNext}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </Button>
                  )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
