"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  autoPlayInterval?: number;
}

export default function ProductGallery({
  images,
  autoPlayInterval = 3000,
}: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, images.length, autoPlayInterval]);

  const handleClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md  lg:h-full ">
      <div className="relative aspect-[4/3] rounded-lg border-2 border-main mb-4">
        <Image
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
          priority
          fill
          className="object-cover rounded-lg"
        />

        <button
          onClick={togglePlayPause}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm transition-colors"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? (
            <Pause size={22} className="stroke-primary" />
          ) : (
            <Play size={22} className="stroke-gray-700" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => handleClick(index)}
            className={cn(
              "border rounded-lg overflow-hidden p-1 transition-all",
              currentImageIndex === index
                ? "border-[#F82BA9] ring-1 ring-[#F82BA9]"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <Image
              src={image}
              alt={`Thumbnail for ${image}`}
              width={100}
              height={100}
              className="w-full "
            />
          </button>
        ))}
      </div>
    </div>
  );
}
