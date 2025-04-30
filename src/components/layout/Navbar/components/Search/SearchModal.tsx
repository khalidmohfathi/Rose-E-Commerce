import SearchIcon from "@/components/icons/SearchIcon";
import useModal from "@/hooks/useModal";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchModal() {
  const { openModal, setCurrentModalName, closeModal, openModals } = useModal();
  const modalName = "searchModal";
  const nav = useRouter();

  const closeSearchModal = () => {
    closeModal(modalName);
    setCurrentModalName("");
  };

  const searchItems = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      const input = e.target as HTMLInputElement;
      closeSearchModal();
      nav.push(`/products?search=${input.value}`);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          openModal(modalName);
          setCurrentModalName(modalName);
        }}
        className="cursor-pointer"
      >
        <SearchIcon />
      </button>
      {openModals[modalName] && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black/80">
          <div className="flex flex-col items-center gap-20 mt-20">
            <button
              onClick={closeSearchModal}
              className="size-9 rounded-full flex items-center justify-center bg-primary cursor-pointer"
            >
              <X className="fill-main" />
            </button>
            <div className="relative w-10/12 md:w-8/12 lg:w-1/2">
              <input
                onKeyUp={searchItems}
                type="text"
                className="w-full text-white placeholder:text-white leading-10 p-2 pe-11 text-3xl font-bold outline-none"
                placeholder="Search Here..."
              />
              <Search
                stroke="white"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
