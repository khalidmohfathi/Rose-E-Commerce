"use client";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CartSummary = () => {
  const { cart } = useCart();
  const router = useRouter();
  return (
    <div className=" bg-primary-subtle max-h-fit px-10 rounded-xl">
      <h2 className="font-bold my-8">Cart Summary</h2>
      <div className="item flex justify-between gap-20 my-2">
        <span className="font-bold">Sub Total:</span>
        <span className="text-[#757F95]">${cart?.totalPriceAfterDiscount}</span>
      </div>
      <div className="item flex justify-between gap-20 my-2">
        <span className="font-bold">Discount:</span>
        <span className="text-[#757F95]">${cart?.discount}</span>
      </div>
      <div className="item flex justify-between gap-20 my-2">
        <span className="font-bold">Shipping:</span>
        <span className="text-[#757F95]">Free</span>
      </div>
      <div className="item flex justify-between gap-20 my-2">
        <span className="font-bold">Taxes:</span>
        <span className="text-[#757F95]">
          ${(cart?.totalPriceAfterDiscount as number) * 0.001}
        </span>
      </div>
      <div className="item flex justify-between gap-20 my-2">
        <span className="font-bold">Total:</span>
        <span className="color-rose">
          ${((cart?.totalPriceAfterDiscount as number) * 1.1).toFixed(2)}
        </span>
      </div>
      <div className="text-end">
        <Button
          onClick={() => {
            router.push("/checkout");
          }}
          className="text-white bg-primary py-[10px] px-[20px] rounded-[10px] my-8"
        >
          Checkout Now <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
