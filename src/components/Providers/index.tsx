import React, { PropsWithChildren } from "react";
import { ModalProvider } from "./ModalProvider/Modal-Provider";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import TanstackQueryProvider from "./TanstackQueryProvider/TanstackQueryProvider";
import CartProvider from "./CartProvider/CartProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <TanstackQueryProvider>
        <CartProvider>
          <ModalProvider>{children}</ModalProvider>
        </CartProvider>
      </TanstackQueryProvider>
    </AuthProvider>
  );
};

export default Providers;
