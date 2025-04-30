import React from "react";
import { ArrowLeft } from "lucide-react";
import CartSummary from "./_components/CartSummary";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import { Button } from "@/components/ui/button";
import ItemsTable from "./_components/ItemsTable";
import Link from "next/link";

const Page = () => {
  return (
    <main className="main-container flex justify-between gap-8 max-lg:flex-col mt-8">
      <div className="space-y-8">
        <div className="overflow-x-auto">
          <ItemsTable />
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-4 pr-32 rounded-full border border-gray-500 text-sm placeholder:text-slate-gray font-medium bg-white shadow outline-primary"
            />
            <Button className="absolute top-1/2 right-1.5 transform -translate-y-1/2 rounded-full px-5 h-10 flex items-center gap-1.5">
              <span className="text-sm">Subscribe</span>
              <ChevronRightIcon />
            </Button>
          </div>
          <Link
            href={"/products"}
            className="text-white bg-primary py-2.5 px-5 rounded-[10px] flex gap-1 text-nowrap"
          >
            <ArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
      <CartSummary />
    </main>
  );
};

export default Page;
