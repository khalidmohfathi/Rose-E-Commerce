import React from "react";
import { FieldError, Path, UseFormRegister } from "react-hook-form";

type FormInputProps<T extends Record<string, string|number>> = {
  label?: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  className?: string;
};

const FormInput = <T extends Record<string, string|number>>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  className = "",
}: FormInputProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        className={`p-2 rounded-3xl shadow  ${
          error ? "border border-red-500" : "border-gray-300"
        } ${className}`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
