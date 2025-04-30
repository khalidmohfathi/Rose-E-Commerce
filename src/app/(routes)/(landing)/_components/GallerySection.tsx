import React from "react";
import img1 from "@/images/images/gallery-1.svg";
import img2 from "@/images/images/gallery-2.svg";
import img3 from "@/images/images/gallery-3.svg";
import img4 from "@/images/images/gallery-4.svg";
import img5 from "@/images/images/gallery-5.svg";
import Image from "next/image";

const images = [img1, img2, img3, img4, img5];

export default function GallerySection() {
  return (
      <section className="main-container">
        <div className="text-center">
          <h2 className="text-primary font-bold uppercase tracking-[4px]">
            Our Gallery
          </h2>
          <p className="text-main text-3xl font-bold mt-2 storing-header">
            Lets Check Our Photo Gallery
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
          {images.map((item, index) => {
            return (
              <div key={index} className={`${index == 3 ? "max-md:hidden col-span-2" : ""}`}>
                <Image src={item} className="w-full" alt="" />
              </div>
            );
          })}
        </div>
      </section>
  );
}
