import React from "react";
import img1 from "@/images/images/unsplash_EnOliwbSrxE.png";
import img2 from "@/images/images/unsplash_TT6Hep-JzrU.png";
import img3 from "@/images/images/unsplash_eBE3pEIZjbc.png";
import Image from "next/image";

export default function Store() {
  return (
    <div className="main-container">
      <h2 className="section-header text-3xl font-bold my-8">
        Our Stores
      </h2>
      <div className="store flex max-md:flex-col justify-between items-center border-2 p-6 rounded-[12px] border-primary">
        <div className="img">
          <Image src={img1} alt="store1" />
        </div>
        <div
          className="content text-center text-[#160E4B]"
        >
          <h2 className="text-[24px] color-dark font-bold mb-4">Store 1</h2>
          <p className="text-[10px]">
            3030 SW 8th St Miami <br /> Miami, Florida 33135 <br /> United
            States
          </p>
        </div>
        <div className="work-hours">
          <ul className="list-disc">
            <li>Mon.09:00AM - 07:00PM</li>
            <li className="my-2">Tue.09:00AM - 07:00PM</li>
            <li>Wed.09:00AM - 07:00PM</li>
            <li className="my-2">Thu.09:00AM - 07:00PM</li>
            <li>Fri.09:00AM - 07:00PM</li>
            <li className="my-2">Sat.10:00AM - 04:00PM</li>
            <li>Sun.10:00AM - 04:00PM</li>
          </ul>
        </div>
      </div>
      <div className="store flex max-md:flex-col justify-between items-center border-2 p-6 rounded-[12px] border-primary my-8">
        <div className="img">
          <Image src={img2} alt="store1" />
        </div>
        <div
          className="content text-center text-[#160E4B]"
        >
          <h2 className="text-[24px] color-dark font-bold mb-4">Store 2</h2>
          <p className="text-[10px]">
            3030 SW 8th St Miami <br /> Miami, Florida 33135 <br /> United
            States
          </p>
        </div>
        <div className="work-hours">
          <ul className="list-disc">
            <li>Mon.09:00AM - 07:00PM</li>
            <li className="my-2">Tue.09:00AM - 07:00PM</li>
            <li>Wed.09:00AM - 07:00PM</li>
            <li className="my-2">Thu.09:00AM - 07:00PM</li>
            <li>Fri.09:00AM - 07:00PM</li>
            <li className="my-2">Sat.10:00AM - 04:00PM</li>
            <li>Sun.10:00AM - 04:00PM</li>
          </ul>
        </div>
      </div>
      <div className="store flex max-md:flex-col justify-between items-center border-2 p-6 rounded-[12px] border-primary">
        <div className="img">
          <Image src={img3} alt="store1" />
        </div>
        <div
          className="content text-center text-[#160E4B]"
        >
          <h2 className="text-[24px] color-dark font-bold mb-4">Store 3</h2>
          <p className="text-[10px]">
            3030 SW 8th St Miami <br /> Miami, Florida 33135 <br /> United
            States
          </p>
        </div>
        <div className="work-hours">
          <ul className="list-disc">
            <li>Mon.09:00AM - 07:00PM</li>
            <li className="my-2">Tue.09:00AM - 07:00PM</li>
            <li>Wed.09:00AM - 07:00PM</li>
            <li className="my-2">Thu.09:00AM - 07:00PM</li>
            <li>Fri.09:00AM - 07:00PM</li>
            <li className="my-2">Sat.10:00AM - 04:00PM</li>
            <li>Sun.10:00AM - 04:00PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
