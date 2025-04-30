"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import img1 from "@/images/images/Group 6.png";
import msg from "@/images/images/feedback-icon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: StaticImageData;
  text: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 pb-14 rounded-[100px] rounded-tl-[50px] relative flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center md:gap-2 gap-4">
          <div className="relative h-12 w-12">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name}'s avatar`}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-sm lg:text-lg">{testimonial.name}</p>
            <p className="text-primary text-xs lg:text-sm">
              {testimonial.role}
            </p>
          </div>
        </div>
        <hr className="my-4 border-slate-gray" />
        <p className="text-sm text-slate-gray line-clamp-4">
          {testimonial.text}
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <Star
              key={index}
              className="h-5 w-5 fill-primary stroke-primary"
              aria-label="Rating star"
            />
          ))}
        </div>
      </div>
      <Image src={msg} alt="" className="absolute bottom-5 right-12" />
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Khalid Mohammed",
    role: "Customer",
    image: img1,
    text: "Ab vel consequatur repellat eos omnis accusamus porro sunt dolorem. Totam voluptas ullam ut. Neque accusantium voluptas rerum. Dolorem veritatis quo omnis nihil nulla harum eum. Dignissimos laborum necessitatibus vero nihil.",
    rating: 4,
  },
  {
    id: "2",
    name: "Yassin Mohamed",
    role: "Customer",
    image: img1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    id: "3",
    name: "Ahmed Gamal",
    role: "Customer",
    image: img1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    id: "4",
    name: "Youssef Mohammed",
    role: "Customer",
    image: img1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    id: "5",
    name: "Mahmoud Salah",
    role: "Customer",
    image: img1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    id: "6",
    name: "Mohammed Magdy",
    role: "Customer",
    image: img1,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      className="bg-[url('/assets/images/background.png')] bg-cover bg-center py-20"
      aria-label="Customer testimonials"
    >
      <div className="main-container mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-white border-none hover:bg-pink-400 transition-colors left-4" />
          <CarouselNext className="bg-primary text-white border-none hover:bg-pink-400 transition-colors right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
