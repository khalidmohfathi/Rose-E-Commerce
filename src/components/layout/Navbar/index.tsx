"use client";

import React, { useState } from "react";
import Image from "next/image";

import logo from "@/images/images/logo.svg";
import NavLink from "./components/NavLink/NavLink";
import { pages } from "@/lib/constants/pages.constant";
import SearchModal from "./components/Search/SearchModal";

import { useAuth } from "@/components/Providers/AuthProvider/AuthProvider";
import NavActions from "./components/NavActions/NavActions";
import useModal from "@/hooks/useModal";

import { Menu, X } from "lucide-react"; // for icons
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user } = useAuth();
  const { setCurrentModalName } = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="my-4">
        <div className="main-container flex items-center justify-between">
          <div>
            <Image priority src={logo} alt="Rose's Logo" />
          </div>
          <ul className="flex items-center gap-6 max-lg:hidden">
            {pages.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink link={link} />
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-3.5">
            <SearchModal />
            {user ? (
              <NavActions />
            ) : (
              <Button
                className="leading-7 rounded-full px-5"
                onClick={() => setCurrentModalName("LoginModal")}
              >
                Login
              </Button>
            )}

            {/* Hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-fit z-[1000] w-72 bg-white shadow-lg transform transition-transform duration-300  ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Image src={logo} alt="Logo" className="w-24" />
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <ul className="flex flex-col p-4 gap-4">
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink link={page} />
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gray-400/50 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
