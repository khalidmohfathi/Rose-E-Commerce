import React from "react";
import SideCategoryFilters from "./_components/SideCategoryFilters";
import ProductCard from "@/components/common/ProductCard";
import { FetchALLProducts } from "@/lib/api/product.api";
interface Props {
  searchParams: {
    category: string | string[] | undefined;
    search: string;
  };
}
const Page = async ({ searchParams }: Props) => {
  const params = await searchParams;

  let products: Product[] = [];
  try {
    products = await FetchALLProducts(params);
    if (params.search) {
      products = products.filter((item) => {
        return item.title.toLowerCase().includes(params.search.toLowerCase());
      });
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return (
      <main className="main-container">
        <p className="text-red-500">
          Failed to load products. Please try again later.
        </p>
      </main>
    );
  }

  if (!products || products.length === 0) {
    return (
      <main className="main-container">
        <p>No products available.</p>
      </main>
    );
  }

  return (
    <main className="main-container grid grid-rows-[minmax(0,auto)_minmax(0,auto)] md:grid-cols-[minmax(0,300px)_minmax(0,auto)] gap-6">
      <div className="">
        <SideCategoryFilters />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 content-start">
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Page;
