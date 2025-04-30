"use client";
import { useState } from "react";
import CashIcon from "@/images/Cash.svg";
import { checkoutSchema } from "@/lib/schemas/Checkout.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PayAction } from "@/lib/actions/pay.action";
import useCart from "./useCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export type CheckoutFormInputs = z.infer<typeof checkoutSchema>;

const useCheckout = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [accordionValue, setAccordionValue] = useState("item-1");
  const { getUserCartItemsData } = useCart();
  const router = useRouter();
  const formControll = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutSchema),
    mode: "all",
  });
  const [userData, setUserData] = useState<CheckoutFormInputs | null>(null);
  const billingFields = [
    { label: "First Name", placeholder: "First Name", name: "First Name" },
    { label: "Last Name", placeholder: "Last Name", name: "First Name" },
    { label: "Email", type: "email", placeholder: "Email", name: "First Name" },
    { label: "Phone", type: "tel", placeholder: "Phone Number", name: "phone" },
    { label: "street", placeholder: "street", name: "street" },
    { label: "street 2", placeholder: "street 2", name: "street 2" },
    { label: "Country", placeholder: "Country", name: "Country" },
    { label: "City", placeholder: "City", name: "city" },
    { label: "Post Code", placeholder: "Post Code", name: "First Name" },
    { label: "State", placeholder: "State", name: "First Name" },
  ];

  const paymentFields = [
    { label: "Card Holder Name", placeholder: "Name on Card" },
    { label: "Card Number", placeholder: "Your Card Number" },
    { label: "Expire Date", placeholder: "Expire Date" },
    { label: "CCV", placeholder: "CCV" },
  ];

  const paymentOptions = [
    {
      icon: CashIcon,
      text: "Cash On Delivery",
      value: "cash",
    },
    {
      icon: CashIcon,
      text: "Pay With Credit Card",
      value: "card",
    },
  ];
  const submit = (values: CheckoutFormInputs) => {
    setUserData(structuredClone(values));
    setAccordionValue("item-2");
  };
  const pay = async () => {
    try {
      const data = await PayAction(
        userData as CheckoutFormInputs,
        selectedPayment
      );
      if (data.session?.url) {
        router.push(data.session.url);
      } else {
        getUserCartItemsData();
        toast.error("Your order has been confiermed");
        router.push("/allOrders");
      }
    } catch {
      toast.error("Error accourd");
    }
  };
  return {
    selectedPayment,
    setSelectedPayment,
    billingFields,
    paymentFields,
    paymentOptions,
    accordionValue,
    setAccordionValue,
    ...formControll,
    submit,
    pay,
  };
};

export default useCheckout;