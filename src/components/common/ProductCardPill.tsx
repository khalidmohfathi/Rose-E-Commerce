import React from "react";

export interface PillProps {
  variant: "New" | "OutOfStock" | "Hot";
  className?: string;
}

interface Variant {
  color: string;
  text: string;
}

const variants: Record<PillProps["variant"], Variant> = {
  New: {
    color: "bg-primary px-4",
    text: "New",
  },
  OutOfStock: {
    color: "bg-[#F05454] px-2",
    text: "Out of Stock",
  },
  Hot: {
    color: "bg-[#00BFFF] px-4",
    text: "Hot",
  },
};

export default function ProductCardPill({ variant, className }: PillProps) {
  return (
    <div
      className={`${variants[variant].color} uppercase w-fit text-xs text-white pt-0.5 rounded-4xl leading-5 ${className}`}
    >
      {variants[variant].text}
    </div>
  );
}
