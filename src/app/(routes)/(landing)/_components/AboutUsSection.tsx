import React from "react";
import Image from "next/image";
import img from "@/images/images/about-us-section.svg"
import { Button } from "@/components/ui/button";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { Check } from "lucide-react";

const checklist = [
  "Streamlined Shipping Experience",
  "Affordable Modern Design",
  "Competitive Price & Easy To Shop",
  "We Made Awesome Products",
];

export default function AboutUsSection() {
  return (
    <section className="main-container flex max-md:flex-col max-md:gap-5 items-center justify-between">
      <div className="w-full md:w-2/5">
        <Image src={img} className="w-full" alt="" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-primary font-bold uppercase tracking-[4px]">
          About Us
        </h2>
        <p className="text-main text-2xl md:text-3xl font-bold">
          We Provide Best And Quality{" "}
          <span className="text-primary">
            Gifts <br /> Box
          </span>{" "}
          Product For You
        </p>
        <p className="text-slate-gray">
          Recusandae tempora aut laborum molestias veniam. A commodi sequi
          accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta
          necessitatibus ut ad.
        </p>
        <Button className="flex items-center gap-1.5 rounded-lg w-fit px-5 py-3">
          <span className="text-sm">Discover Now</span>
          <ChevronRightIcon />
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-2">
          {checklist.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="size-6 flex items-center justify-center bg-[#8C52FF] text-white rounded-full">
                  <Check size={18} />
                </div>
                <span className="text-xs font-medium">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
