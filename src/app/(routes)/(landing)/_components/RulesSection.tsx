import HeadphonesIcon from "@/components/icons/HeadphonesIcon";
import RefundIcon from "@/components/icons/RefundIcon";
import TruckIcon from "@/components/icons/TruckIcon";
import WalletIcon from "@/components/icons/WalletIcon";
import React from "react";

interface RulesType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const rules: RulesType[] = [
  {
    icon: <TruckIcon />,
    title: "Free Delivery",
    description: "Orders Over $120",
  },
  {
    icon: <RefundIcon />,
    title: "Get Refund",
    description: "Within 30 Days Returns",
  },
  {
    icon: <WalletIcon />,
    title: "Safe Payment",
    description: "100% Secure Payment",
  },
  {
    icon: <HeadphonesIcon />,
    title: "24/7 Support",
    description: "Feel Free To Call Us",
  },
];

export default function RulesSection() {
  return (
    <div className="main-container bg-primary-subtle p-6 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-md:gap-6 gap-4 justify-items-center">
      {rules.map((item, index) => {
        return (
          <div key={index} className="flex max-md:flex-col max-md:text-center items-center max-md:gap-2 gap-4">
            <div className="size-16 bg-primary flex items-center justify-center rounded-full">
              {item.icon}
            </div>
            <div>
              <p className="text-main text-xl font-semibold mb-0.5">{item.title}</p>
              <p className="text-slate-gray text-sm">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
