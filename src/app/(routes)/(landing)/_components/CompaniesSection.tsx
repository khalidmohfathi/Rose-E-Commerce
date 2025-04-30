import React from "react";
import img1 from "@/images/images/company-1.svg";
import img2 from "@/images/images/company-2.svg";
import img3 from "@/images/images/company-3.svg";
import img4 from "@/images/images/company-4.svg";
import img5 from "@/images/images/company-5.svg";
import img6 from "@/images/images/company-6.svg";
import Image from "next/image";

const images = [img1, img2, img3, img4, img5, img6];

export default function CompaniesSection() {
  return (
    <section className="main-container">
      <div className="bg-primary-subtle py-10 px-6 rounded-2xl space-y-10">
        <p className="text-center text-main text-3xl font-bold">
          Trusted By Over <span className="text-primary">4.5k+</span> Companies
        </p>
        <div className="flex justify-between items-center overflow-x-auto">
          {images.map((item, index) => {
            return <Image key={index} src={item} alt="" />;
          })}
        </div>
      </div>
    </section>
  );
}
