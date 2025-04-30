"use client"
import React, { useEffect, useState } from "react";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import BestSellerSlider from "./BestSellerSlider";
import { Button } from "@/components/ui/button";
import { FetchTopProducts } from "@/lib/api/product.api";

export default function BestSellerSection() {
  const [products , setProducts] = useState<Product[]>([])
  const getBestProduct = async ()=>{
    const data = await FetchTopProducts()
    return data
  }
  useEffect(()=>{
    getBestProduct().then((data)=>{
      setProducts(data);
    })
  } , [])
  return (
    <section className="main-container grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div>
        <p className="text-primary font-bold tracking-[4px] uppercase">
          Premium Gifts
        </p>
        <h2 className="text-main text-3xl font-bold mt-7 mb-3 leading-10">
          Best <span className="text-primary">Seller</span> <br />{" "}
          <span className="text-primary">Gifts</span> and Products
        </h2>
        <p className="text-slate-gray leading-7 pe-10 mb-7">
          Recusandae tempora aut laborum molestias veniam. A commodi sequi
          accusantium ullam cupiditate. Neque quidem qui et autem dolor dicta
          necessitatibus ut ad.
        </p>
        <Button className="flex items-center gap-1.5 rounded-lg">
          <span className="text-sm leading-6">Explore More</span>
          <ChevronRightIcon />
        </Button>
      </div>
      <div className="lg:col-span-3">
        <BestSellerSlider products={products}/>
      </div>
    </section>
  );
}
