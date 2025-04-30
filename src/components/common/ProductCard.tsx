"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, Heart, Star, Loader2 } from "lucide-react";

import BagIcon from "../icons/BagIcon";
import ProductCardPill, { PillProps } from "./ProductCardPill";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
  showPill?: PillProps;
}

export default function ProductCard({ product, showPill }: ProductCardProps) {
  const { addCartItem } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setLoading(true);
      await addCartItem(product._id);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (filled: number, total = 5) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, index) => (
        <Star
          key={index}
          size={18}
          className={`${
            index < filled
              ? "fill-[#FBA707] stroke-[#FBA707]"
              : "stroke-[#FBA707]"
          }`}
        />
      ))}
    </div>
  );

  const formattedTitle =
    product.title.split(" ").length > 3
      ? product.title.split(" ").slice(0, 3).join(" ") + "..."
      : product.title;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="group bg-primary-subtle relative rounded-2xl h-64">
        <Image
          src={product.imgCover}
          alt={product.description || "Product image"}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover rounded-2xl"
        />
        {showPill && (
          <ProductCardPill
            variant={showPill.variant}
            className="absolute top-2 right-2 z-20"
          />
        )}
        <div className="bg-[#F82BA9B2] absolute size-full rounded-2xl flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="flex items-center gap-10 text-primary">
            <Link
              href={`/products/${product._id}`}
              className="bg-white p-1.5 rounded-full"
            >
              <Eye size={32} strokeWidth={1.5} />
            </Link>
            <button className="bg-white p-1.5 rounded-full">
              <Heart size={32} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col gap-2">
          <Link
            href={`/products/${product._id}`}
            className="text-main font-semibold"
          >
            {formattedTitle}
          </Link>
          {renderStars(product.rateAvg)}
          <div className="flex items-center gap-2 font-medium">
            <p className="text-[#F05454]">${product.priceAfterDiscount}</p>
            <p className="text-[#DEE2E6] line-through">${product.price}</p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className={`size-11 bg-[#8C52FF] rounded-full flex items-center justify-center transition-opacity cursor-pointer ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <Loader2 size={20} className="animate-spin text-white" />
          ) : (
            <BagIcon />
          )}
        </button>
      </div>
    </div>
  );
}
