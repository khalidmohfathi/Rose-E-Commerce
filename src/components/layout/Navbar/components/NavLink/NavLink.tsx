"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link: { url, name } }: { link: NavLink }) => {
  const path = usePathname();
  return (
    <Link
      href={url}
      className={`font-semibold ${
        path == url ? "text-[#F82BA9]" : "text-main"
      }`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
