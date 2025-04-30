import AuthModal from "@/components/layout/Navbar/components/AuthModal";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar";
import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const UserLayout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Toaster />
      <AuthModal />
    </>
  );
};

export default UserLayout;
