import React from "react";
import Wrapper from "./wrapper";
import FilterCheckBox from "@/components/common/Filter-Check-Box";
import { Star } from "lucide-react";

const RatingFilter = () => {
  const ratings = [
    { id: "5-star", stars: 5, filled: 5 },
    { id: "4-star", stars: 5, filled: 4 },
    { id: "3-star", stars: 5, filled: 3 },
    { id: "2-star", stars: 5, filled: 2 },
    { id: "1-star", stars: 5, filled: 1 },
  ];

  const renderStars = (filled: number, total: number) => (
    <div className="flex gap-1">
      {[...Array(total)].map((_, index) => (
        <Star
          key={index}
          className={`size-5 ${
            index < filled ? "fill-primary stroke-0" : "stroke-primary stroke-1"
          }`}
        />
      ))}
    </div>
  );

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Rate</h2>
      <div className="h-[1px] w-full bg-gray-500"></div>
      <div className="max-md:flex max-md:gap-3 max-md:flex-wrap">
        {ratings.map(({ id, filled, stars }) => (
          <FilterCheckBox key={id} id={id} label={renderStars(filled, stars)} />
        ))}
      </div>
    </Wrapper>
  );
};

export default RatingFilter;
