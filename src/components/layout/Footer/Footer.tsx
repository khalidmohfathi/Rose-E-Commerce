import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

const links: { text: string; link: string }[] = [
  { text: "About Us", link: "/about" },
  { text: "Store Location", link: "/store" },
  { text: "Contact", link: "/contact" },
  { text: "Delivery", link: "/delivery" },
  { text: "Policy", link: "/policy" },
  { text: "FAQs", link: "/faqs" },
];

export default function Footer() {
  return (
    <footer className="bg-[url('/assets/images/footer-img.svg')] bg-cover bg-no-repeat py-10 mt-8 flex flex-col items-center gap-10 px-4 sm:px-6 lg:px-12">
      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-center">
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-main font-bold text-sm sm:text-base hover:text-primary transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </div>

      {/* Discount Message */}
      <div className="text-center space-y-2 px-2">
        <p className="text-main text-2xl sm:text-3xl font-bold">
          Get <span className="text-primary">20%</span> Off Discount Coupon
        </p>
        <p className="text-slate-gray text-lg sm:text-xl font-medium">
          By Subscribe Our Newsletter
        </p>
      </div>

      {/* Input + Button */}
      <div className="w-full max-w-md relative">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full p-4 pr-32 rounded-full text-sm placeholder:text-slate-gray font-medium bg-white shadow"
        />
        <Button className="absolute top-1/2 right-1.5 transform -translate-y-1/2 rounded-full px-5 h-10 flex items-center gap-1.5">
          <span className="text-sm">Subscribe</span>
          <ChevronRightIcon />
        </Button>
      </div>
    </footer>
  );
}
