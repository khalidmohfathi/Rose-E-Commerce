import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export interface ShopNowCardProps {
  image: string;
  title: string;
  header: React.ReactNode;
  buttonText: string;
  titleColor?: string;
}

export default function ShopNowCardSmall({
  image,
  title,
  header,
  buttonText,
  titleColor = "text-primary",
}: ShopNowCardProps) {
  return (
    <div className="relative">
      <Image src={image} className="w-full rounded-2xl" alt="" />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-end">
        <p className={titleColor}>{title}</p>
        <p className="text-main text-xl font-semibold mt-3.5 mb-8">{header}</p>
        <Button className="rounded-3xl text-sm font-normal">{buttonText}</Button>
      </div>
    </div>
  );
}
