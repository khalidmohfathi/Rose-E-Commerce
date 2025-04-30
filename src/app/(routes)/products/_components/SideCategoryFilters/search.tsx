"use client";
import React from "react";
import Wrapper from "./wrapper";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString()); // clone existing params
    const value = e.target.value;

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/products?${params.toString()}`);
  };

  return (
    <Wrapper>
      <h2 className="font-bold text-main">Search</h2>
      <input
        type="text"
        id="search-product"
        placeholder="Search"
        className="p-2 rounded-3xl shadow border-gray-300"
        onChange={handleSearchChange}
      />
    </Wrapper>
  );
};

export default Search;
