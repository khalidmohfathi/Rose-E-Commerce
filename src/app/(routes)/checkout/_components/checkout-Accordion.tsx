"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CheckoutInputfiled from "./checkout-inputfiled";
import useCheckout from "@/hooks/useCheckout";

const CheckoutAccordion = () => {
  const {
    accordionValue,
    billingFields,
    paymentFields,
    paymentOptions,
    selectedPayment,
    setAccordionValue,
    setSelectedPayment,
    register,
    handleSubmit,
    submit,
    formState: { errors },
    pay,
  } = useCheckout();

  return (
    <Accordion
      value={accordionValue}
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => {
            setAccordionValue("item-1");
          }}
          className="rounded-lg AccordionTrigger"
        >
          Your Billing Address
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid grid-cols-2 gap-4">
              {billingFields.slice(0, 4).map((field, idx) => {
                if (field.name == "phone") {
                  return (
                    <CheckoutInputfiled
                      register={register("phone")}
                      key={idx}
                      {...field}
                      error={errors.phone}
                    />
                  );
                }
                return <CheckoutInputfiled key={idx} {...field} />;
              })}
            </div>
            {billingFields.slice(4, 6).map((field, idx) => {
              if (field.name == "street") {
                return (
                  <CheckoutInputfiled
                    register={register("street")}
                    key={idx}
                    {...field}
                    error={errors.street}
                  />
                );
              }
              return <CheckoutInputfiled key={idx} {...field} />;
            })}
            <div className="grid grid-cols-2 gap-4">
              {billingFields.slice(6).map((field, idx) => {
                if (field.name == "city") {
                  return (
                    <CheckoutInputfiled
                      register={register("city")}
                      key={idx}
                      {...field}
                      error={errors.city}
                    />
                  );
                }
                return <CheckoutInputfiled key={idx} {...field} />;
              })}
            </div>
            <div className="flex flex-col gap-2 p-1">
              <label className="text-base text-gray-800">
                Your Message For Order
              </label>
              <textarea
                placeholder="Your Message"
                className="w-full py-3 px-2 text-gray-600 rounded-sm outline outline-gray-400 focus:outline-primary"
              />
            </div>
            <div className="flex justify-between my-4 items-center">
              <Link
                href={"/cart"}
                className="bg-primary text-white flex py-3 px-5 rounded-[10px] gap-3 hover:bg-primary/80 transition-all"
              >
                <ArrowLeft />
                Back To Cart
              </Link>
              <Button
                type="submit"
                className="bg-primary text-white flex py-3 px-5 rounded-[10px] gap-3 hover:bg-primary/80 transition-all"
              >
                Next Step
                <ArrowRight />
              </Button>
            </div>
          </form>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          onClick={() => {
            setAccordionValue("item-2");
          }}
          className="rounded-lg AccordionTrigger"
        >
          Your Payment Info
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <div className="flex gap-3">
            {paymentOptions.map((option, idx) => (
              <div
                key={idx}
                className={`py-4 px-2 flex flex-col items-center border  rounded-2xl cursor-pointer ${
                  selectedPayment == option.value
                    ? "border-primary text-primary"
                    : "text-black border-gray-400"
                }`}
                onClick={() => {
                  setSelectedPayment(option.value);
                }}
              >
                <Image
                  src={option.icon}
                  alt={option.text}
                  width={48}
                  height={48}
                />
                <p className={`mt-4 font-light`}>{option.text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {selectedPayment == "card" &&
              paymentFields.map((field, idx) => (
                <CheckoutInputfiled key={idx} {...field} />
              ))}
          </div>
          <div className="flex justify-between my-4 items-center">
            <Link
              href={"/cart"}
              className="bg-primary text-white flex py-3 px-5 rounded-[10px] gap-3 hover:bg-primary/80 transition-all"
            >
              <ArrowLeft />
              Back To Cart
            </Link>
            <Button
              onClick={pay}
              className="bg-primary text-white flex py-3 px-5 rounded-[10px] gap-3 hover:bg-primary/80 transition-all"
            >
              Next Step
              <ArrowRight />
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CheckoutAccordion;
