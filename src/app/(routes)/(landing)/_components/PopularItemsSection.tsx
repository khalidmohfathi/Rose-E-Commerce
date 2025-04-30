"use client";
import ProductCard from "@/components/common/ProductCard";
import { FetchTopRatingProducts } from "@/lib/api/product.api";
import React, { useEffect, useState } from "react";

export default function PopularItemsSection() {
  const [products, setProducts] = useState<Product[]>();
  const getBestProduct = async () => {
    const data = await FetchTopRatingProducts();
    return data;
  };
  useEffect(() => {
    getBestProduct().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <section className="main-container">
      <div className="flex items-center justify-between">
        <h2 className="text-main text-3xl font-bold section-header">
          Popular Items
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {products?.map((item) => {
          return <ProductCard product={item} key={item._id} />;
        })}
      </div>
    </section>
  );
}
