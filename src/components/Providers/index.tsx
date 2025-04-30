import React, { PropsWithChildren } from "react";
import { ModalProvider } from "./ModalProvider/Modal-Provider";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import CartProvider from "./CartProvider/CartProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ModalProvider>{children}</ModalProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
