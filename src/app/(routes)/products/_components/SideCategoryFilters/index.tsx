import React from "react";
import Search from "./search";
import PriceFilter from "./price-filter";
import CategoryFilter from "./catigory-filter";
import RatingFilter from "./rating-Filter";

const SideCategoryFilters = () => {
  const filters = [
    { id: "category", Component: CategoryFilter },
    { id: "price", Component: PriceFilter },
    { id: "rating", Component: RatingFilter },
  ];

  return (
    <div className="flex flex-col gap-6">
      <Search />
      {filters.map(({ id, Component }) => (
        <Component key={id} />
      ))}
    </div>
  );
};

export default SideCategoryFilters;
