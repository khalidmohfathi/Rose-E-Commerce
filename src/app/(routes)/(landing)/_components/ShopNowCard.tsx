import Image from "next/image";
import React from "react";
import img from "@/images/images/red-christmas-gifts.svg";
import { Button } from "@/components/ui/button";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

export default function ShopNowCard() {
  return (
    <div className="relative">
      <Image
        src={img}
        alt="Red Gifts"
        className="rounded-2xl w-full"
        priority
      />
      <div className="absolute left-4 top-1/2 max-sm:-translate-y-1/2 sm:bottom-6">
        <p className="text-primary font-bold uppercase">Start $10.99</p>
        <p className="text-main text-2xl font-semibold my-3">
          Special Gifts Box <br /> For Your Love
        </p>
        <Button className="flex items-center gap-1.5 rounded-lg">
          <span className="text-sm leading-6">Shop Now</span>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}
