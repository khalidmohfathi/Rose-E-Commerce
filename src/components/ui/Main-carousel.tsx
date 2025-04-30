"use client"

import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselProps = {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  infinite?: boolean
}

export function MainCarousel({
  children,
  className,
  autoPlay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  infinite = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState(false)
  const childrenArray = React.Children.toArray(children)
  const length = childrenArray.length

  const nextSlide = React.useCallback(() => {
    if (infinite) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % length)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === length - 1 ? prevIndex : prevIndex + 1))
    }
  }, [length, infinite])

  const prevSlide = React.useCallback(() => {
    if (infinite) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length)
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1))
    }
  }, [length, infinite])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  React.useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null

    if (autoPlay && !isHovering) {
      intervalId = setInterval(() => {
        nextSlide()
      }, interval)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [autoPlay, interval, nextSlide, isHovering])

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex w-full min-h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="min-w-full w-full min-h-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {showArrows && length > 1 && (
        <>
          <Button
            // variant="outline"
            size="icon"
            className="absolute right-18 text-black bottom-2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 shadow-md hover:bg-white"
            onClick={prevSlide}
            disabled={!infinite && currentIndex === 0}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            // variant="outline"
            size="icon"
            className="absolute right-8 bottom-2 text-black z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-white/80 shadow-md hover:bg-white"
            onClick={nextSlide}
            disabled={!infinite && currentIndex === length - 1}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      {showDots && length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full bg-primary transition-all ${
                currentIndex === index ? "bg-primary w-4" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function CarouselItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("min-w-full w-full h-full", className)}>{children}</div>
}