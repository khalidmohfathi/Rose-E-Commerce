import React from "react";
import ProductSearch from "./ProductSearch";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";

const SideCategoryFilters = () => {
  const filters = [
    { id: "category", Component: CategoryFilter },
    { id: "price", Component: PriceFilter },
    { id: "rating", Component: RatingFilter },
  ];

  return (
    <div className="flex flex-col gap-6">
      <ProductSearch />
      {filters.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </div>
  );
};

export default SideCategoryFilters;
