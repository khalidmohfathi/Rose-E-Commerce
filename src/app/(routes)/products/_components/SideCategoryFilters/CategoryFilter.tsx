"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";
import { fetchAllCategories } from "@/lib/api/category.api";
import { useRouter, useSearchParams } from "next/navigation";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterCategory, setIsFilterCategory] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllCategories();
      setCategories(data);
    };
    getData();
  }, []);

  const handleCheckboxChange = (id: string) => {
    setIsFilterCategory(true);
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (isFilterCategory) {
      params.delete("category");
      selectedCategories.forEach((categoryId) => {
        params.append("category", categoryId);
      });
      router.push(`/products?${params.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Category</h2>
      <div className="h-[1px] w-full bg-gray-500"></div>
      <div className="max-md:flex max-md:gap-3 max-md:flex-wrap">
        {categories.map((item) => (
          <FilterCheckBox
            number={item.productsCount}
            key={item._id}
            id={item._id}
            label={item.name}
            checked={selectedCategories.includes(item._id)}
            onChange={() => handleCheckboxChange(item._id)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default CategoryFilter;
