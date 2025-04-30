import React from "react";
import CartSummary from "../cart/_components/CartSummary";
import CheckoutAccordion from "./_components/checkout-Accordion";

const Page = () => {
  return (
    <div className="main-container flex max-lg:flex-col justify-between gap-6">
      <div className="w-3/4 max-lg:w-full overflow-x-auto">
        <CheckoutAccordion />
      </div>
      <CartSummary />
    </div>
  );
};

export default Page;
