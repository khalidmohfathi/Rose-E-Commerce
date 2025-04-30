"use client";
import React, { useState } from "react";
import { LogOut, Truck, User } from "lucide-react";
import useCart from "@/hooks/useCart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import HeartIcon from "@/components/icons/HeartIcon";
import CartIcon from "@/components/icons/CartIcon";

const ProfileMenu = () => {
  const nav = useRouter();

  const logout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <div className="absolute bg-primary-subtle text-primary border-2 border-primary shadow-md right-0 top-[130%] rounded-xl p-2 z-30 text-sm">
      <button
        onMouseDown={() => {
          nav.push("/allOrders");
        }}
        className="text-nowrap flex items-center gap-2 hover:bg-white/80 rounded-lg p-2 cursor-pointer w-full"
      >
        <Truck size={22} />
        My Orders
      </button>
      <div className="h-px w-full mx-auto bg-primary my-2"></div>
      <button
        onMouseDown={logout}
        className="text-nowrap flex items-center gap-2 hover:bg-white/80 rounded-lg p-2 cursor-pointer w-full"
      >
        <LogOut size={22} />
        Logout
      </button>
    </div>
  );
};

const NavActions = () => {
  const { numberOfCartItems } = useCart();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Link href={"/wishlist"} className="relative">
        <HeartIcon />
        {/* <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-primary text-white flex justify-center items-center  rounded-full">
          2
        </div> */}
      </Link>
      <Link href={"/cart"} className="relative">
        <CartIcon />
        <div className="notification absolute size-5 top-[-17px] end-[-9px] bg-primary text-white flex justify-center items-center  rounded-full">
          {numberOfCartItems}
        </div>
      </Link>
      <div className="relative">
        <User
          tabIndex={0}
          onClick={() => {
            toggleMenu();
          }}
          onBlur={() => {
            setShowMenu(false);
          }}
          className="text-primary hover:cursor-pointer outline-none"
        />
        {showMenu && <ProfileMenu />}
      </div>
    </>
  );
};

export default NavActions;
