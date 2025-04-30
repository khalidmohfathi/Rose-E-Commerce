import React from "react";

declare type ButtonProps = {
  type?: "submit" | "reset" | "button";
  label: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?:string
};
const Button = ({ type = "button", label, onClick ,className}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} text-sm sm:text-base px-4 sm:px-6 py-2 bg-[#F82BA9] hover:bg-[#F82BA9]/75 text-white  rounded-4xl cursor-pointer` }
    >
      {label}
    </button>
  );
};

export default Button;
