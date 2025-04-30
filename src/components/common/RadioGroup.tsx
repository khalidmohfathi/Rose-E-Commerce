import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  register: UseFormRegisterReturn;
  name: string;
  error?: { message?: string };
  label?: string;
  options: RadioOption[];
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  register,
  name,
  error,
  label,
  options,
  required,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              {...register}
              type="radio"
              value={option.value}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {error?.message && (
        <p
          id={`${name}-error`}
          className="text-red-500 text-xs mt-1"
          role="alert"
        >
          {error.message}
        </p>
      )}
    </div>
  );
};

export default RadioGroup;
