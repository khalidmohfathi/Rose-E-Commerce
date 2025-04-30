import React from "react";
import ShopNowCard from "./ShopNowCard";
import MainSlider from "./MainSlider";
import ShopNowCardSmall, { ShopNowCardProps } from "./ShopNowCardSmall";
import img1 from "@/images/images/gift-image-1.svg";
import img2 from "@/images/images/gift-image-2.svg";
import img3 from "@/images/images/gift-image-3.svg";
import CategorySlider from "@/app/(routes)/(landing)/_components/CategorySlider";

const smallCards: ShopNowCardProps[] = [
  {
    image: img1,
    title: "Gifts Box",
    header: (
      <>
        Awesome Gifts Box <br /> Collections
      </>
    ),
    buttonText: "Shop Now",
  },
  {
    image: img2,
    title: "Occasion Gifts",
    header: (
      <>
        Best Occasion Gifts <br /> Collections
      </>
    ),
    buttonText: "Discover Now",
  },
  {
    image: img3,
    title: "Gifts Box",
    header: (
      <>
        Combo Sets Gift Box <br /> Up To 50% Off
      </>
    ),
    buttonText: "Discover Now",
    titleColor: "text-white",
  },
];

export default function ShopNowSection() {
  return (
    <section className="main-container grid grid-cols-12 gap-4 sm:gap-6">
      <div className="max-lg:-order-2 col-span-full">
        <CategorySlider />
      </div>

      <div className="max-lg:-order-1 col-span-full lg:col-span-3 h-full md:max-lg:hidden">
        <ShopNowCard />
      </div>
      <div className="col-span-full lg:col-span-9 h-full">
        <MainSlider />
      </div>

      {smallCards.map((item, i) => (
        <div key={i} className="col-span-full md:max-lg:last:col-start-4 md:col-span-6 lg:col-span-4 h-full">
          <ShopNowCardSmall {...item} />
        </div>
      ))}
    </section>
  );
}
