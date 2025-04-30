import React from "react";
import img1 from "@/images/images/instagram-1.svg";
import img2 from "@/images/images/instagram-2.svg";
import img3 from "@/images/images/instagram-3.svg";
import img4 from "@/images/images/instagram-4.svg";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/icons/InstagramIcon";
import localFont from "next/font/local";

const alexBrush = localFont({
  src: '../../../../../public/assets/fonts/AlexBrush-Regular.ttf',
  weight: '400',
  style: 'normal',
});const images = [img1, img2, img3, img4, img1];

export default function InstagramSection() {
  return (
    <section className="main-container space-y-10">
      <h2 className="text-main text-3xl font-bold text-center">
        Instagram{" "}
        <span className={`text-primary ${alexBrush.className}`}>@Rose</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((item, index) => {
          return (
            <div key={index} className="relative group">
              <Image src={item} alt="" className="w-full" />
              <div className="absolute size-full bg-[#0000004D] rounded-3xl top-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Link
                  href={""}
                  className="size-8 bg-primary flex items-center justify-center rounded-full"
                >
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
