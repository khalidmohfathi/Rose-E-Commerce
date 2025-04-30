import ProductCard from "@/components/common/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export default function BestSellerSlider({
  products,
  related = false,
}: {
  products: Product[];
  related ?: boolean;
}) {
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent>
        {products.map((item) => {
          return (
            <CarouselItem key={item._id} className={`md:basis-1/2 ${related ? 'lg:basis-1/4' : 'lg:basis-1/3'}`}>
              <ProductCard
                product={item}
                showPill={{ variant: item.price % 2 ? "Hot" : "New" }}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselNext className="bg-primary text-white hover:bg-primary-subtle hover:text-slate-gray right-4" />
      <CarouselPrevious className="bg-primary text-white hover:bg-primary-subtle hover:text-slate-gray left-4" />
    </Carousel>
  );
}
