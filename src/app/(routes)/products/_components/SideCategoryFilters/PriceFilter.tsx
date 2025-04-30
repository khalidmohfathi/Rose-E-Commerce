"use client";
import React from "react";
import Wrapper from "./wrapper";
import { Slider } from "@/components/ui/slider";

const PriceFilter = () => {
  // const [value, setValue] = useState([0]);

  return (
    <div>
      <Wrapper>
        <h2 className="font-bold text-main">Price Rating</h2>
        <div className="h-[1px] w-full bg-gray-500"></div>
        <div className="text-primary">
          <p>
            <span>$0</span> - <span>${0}</span>
          </p>
        </div>
        <div className="">
          <Slider
            defaultValue={[0, 100]}
            className="rounded-sm"
            minStepsBetweenThumbs={1}
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default PriceFilter;
