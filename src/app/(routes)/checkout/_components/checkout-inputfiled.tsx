import React from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

const CheckoutInputfiled = ({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: {
  label: string;
  type?: string;
  placeholder: string;
  register?: ReturnType<UseFormRegister<FieldValues>>;
  error?: FieldError;
}) => (
  <div className="flex flex-col gap-2 p-1 w-full">
    <label className="text-base text-gray-800">{label}</label>
    {register ? (
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className="w-full py-3 px-2 text-gray-600 rounded-sm outline outline-gray-400 focus:outline-primary"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="w-full py-3 px-2 text-gray-600 rounded-sm outline outline-gray-400 focus:outline-primary"
      />
    )}
    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </div>
);

export default CheckoutInputfiled;
