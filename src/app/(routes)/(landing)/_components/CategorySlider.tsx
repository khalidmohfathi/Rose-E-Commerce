"use client";
import CategorySliderItem from "@/app/(routes)/(landing)/_components/CategorySliderItem";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fetchAllCategories } from "@/lib/api/category.api";

const CategorySlider = () => {
  const [categories, setCategories] = useState<Category[]>();
  const getData = async () => {
    const data = await fetchAllCategories();
    return data;
  };
  useEffect(() => {
    getData().then((data) => {
      setCategories(data.sort((a , b) => b.productsCount - a.productsCount));
    });
  }, []);
  return (
    <Carousel opts={{ align: "start" }}>
      <CarouselContent className="sm:-ml-6">
        {categories?.map((item) => {
          return (
            <CarouselItem
              key={item._id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/5 sm:pl-6"
            >
              <CategorySliderItem category={item} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default CategorySlider;
