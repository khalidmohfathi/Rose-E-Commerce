"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { BriefcaseBusiness, Heart, Minus, Plus } from "lucide-react";

import Button from "@/components/common/Button";
import ProductGallery from "../_components/ProductGallery";
import BestSellerSlider from "@/app/(routes)/(landing)/_components/BestSellerSlider";
import {
  FetchALLProductsInCategory,
  FetchProduct,
} from "@/lib/api/product.api";
import useCart from "@/hooks/useCart";

const Page = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addCartItem } = useCart();
  useEffect(() => {
    const fetchProductData = async () => {
      const data = await FetchProduct(params.id as string);
      setProduct(data);

      const related = await FetchALLProductsInCategory(data.category);
      setRelatedProducts(related);
    };

    fetchProductData();
  }, [params.id]);

  if (!product) return null;

  const handleIncrease = () => {
    if (quantity < product.quantity) {
      setQuantity((prev) => prev + 1);
      toast.success("Quantity increased");
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      toast.success("Quantity decreased");
    }
  };

  return (
    <div className="main-container mt-8">
      <div className="flex flex-col md:flex-row gap-10">
        <ProductGallery images={[...product.images, product.imgCover]} />

        <div className="flex flex-col gap-6 md:w-2/5">
          <h1 className="text-main font-semibold text-2xl">{product.title}</h1>

          <div className="flex items-center gap-2">
            <span className="line-through text-[#757F95] text-lg">
              ${product.price}
            </span>
            <span className="text-primary font-medium text-xl">
              ${product.priceAfterDiscount}
            </span>
            <span className="text-[#F05454] font-medium text-sm">
              {product.discount}% off
            </span>
          </div>

          <p className="text-[#757F95]">{product.description}</p>

          <div className="flex gap-8">
            {/* Quantity Selector */}
            <div className="flex flex-col gap-3 text-[#757F95]">
              <p>Quantity</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleIncrease}
                  disabled={quantity >= product.quantity}
                  className="bg-[#FEEDF7] text-primary size-8 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus />
                </button>
                <div>{quantity}</div>
                <button
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                  className="bg-[#FEEDF7] text-primary size-8 rounded-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus />
                </button>
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex flex-col gap-3 text-[#757F95]">
              <p>Size</p>
              <select className="border p-1 rounded">
                <option value="sm">Small</option>
                <option value="lg">Large</option>
                <option value="xl">X-Large</option>
              </select>
            </div>
          </div>

          {/* Product Details */}
          <ul className="ps-5 list-disc text-[#757F95] space-y-2 my-3">
            <li>
              <strong className="mx-2">Stock:</strong>{" "}
              {product.quantity > 0 ? "Available" : "Unavailable"}
            </li>
            <li>
              <strong className="mx-2">SKU:</strong> 266TYFD
            </li>
            <li>
              <strong className="mx-2">Category:</strong> Jewelry & Accessories
            </li>
            <li>
              <strong className="mx-2">Brand:</strong> Novak
            </li>
            <li>
              <strong className="mx-2">Tags:</strong> {product.slug}
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                addCartItem(product._id, quantity);
              }}
              label={
                <div className="flex items-center gap-2">
                  <BriefcaseBusiness />
                  Add To Cart
                </div>
              }
            />
            <div className="size-10 flex justify-center items-center bg-primary rounded-full hover:bg-primary/80 cursor-pointer">
              <Heart className="stroke-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="my-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="section-header text-3xl font-bold">Related Items</h2>
          <Link href="/products" className="text-gray-400">
            View more
          </Link>
        </div>
        <BestSellerSlider products={relatedProducts} related />
      </div>
    </div>
  );
};

export default Page;
