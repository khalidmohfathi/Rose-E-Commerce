"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface ModalContextType {
  openModals: Record<string, boolean>;
  currentModalName: string;
  setCurrentModalName: (modalName: string) => void;
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [openModals, setOpenModals] = useState<Record<string, boolean>>({});
  const [currentModalName, setCurrentModalName] = useState<string>("");
  const openModal = (modalName: string) => {
    setOpenModals((prev) => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName: string) => {
    setOpenModals((prev) => ({ ...prev, [modalName]: false }));
  };
  useEffect(() => {
    openModal(currentModalName);
  }, [currentModalName]);
  return (
    <ModalContext.Provider
      value={{
        openModals,
        openModal,
        closeModal,
        currentModalName,
        setCurrentModalName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
