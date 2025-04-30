import React from "react";
import { Button } from "@/components/ui/button";
import { CarouselItem, MainCarousel } from "@/components/ui/Main-carousel";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

const imgs = [
  "bg-[url('/assets/images/main-slider.jpg')]",
  "bg-[url('/assets/images/main-slider2.jpg')]",
  "bg-[url('/assets/images/main-slider3.jpg')]",
];

export default function MainSlider() {
  return (
    <MainCarousel
      autoPlay
      interval={2000}
      showArrows
      showDots
      className="rounded-2xl h-full"
    >
      {imgs.map((item , index) => {
        return (
          <CarouselItem key={index}>
            <div className={`${item} bg-cover bg-center h-full p-8 md:p-12 flex items-center`}>
              <div className="flex flex-col gap-6">
                <h3 className="text-primary text-lg md:text-xl font-bold uppercase tracking-[3px]">
                  Best Gift Shop
                </h3>
                <p className="text-main text-3xl md:text-5xl font-bold md:leading-14">
                  Choose Perfect <br />{" "}
                  <span className="text-primary">Gifts</span> From Us
                </p>
                <p className="text-main max-w-48 md:max-w-sm leading-7">
                  Culpa ducimus nesciunt aliquam non rerum esse recusandae
                  omnis. Rerum optio dolores et.
                </p>
                <Button className="flex items-center gap-1.5 rounded-lg w-fit py-3">
                  <span className="text-sm leading-6">Shop Now</span>
                  <ChevronRightIcon />
                </Button>
              </div>
            </div>
          </CarouselItem>
        );
      })}
    </MainCarousel>
  );
}
