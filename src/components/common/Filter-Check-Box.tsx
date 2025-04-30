import React from "react";
import { Checkbox } from "../ui/checkbox";

const FilterCheckBox = ({
  label,
  hidden,
  id,
  number,
  checked,
  onChange,
}: {
  label: React.ReactNode;
  hidden?: boolean;
  id: string;
  number?: number;
  checked?: boolean;
  onChange?: () => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        name="category"
        id={id}
        className="border-[#757F95] text-white"
        hidden={hidden}
        checked={checked}
        onCheckedChange={onChange} // This works with Radix UI Checkbox
      />
      <label
        htmlFor={id}
        className="text-sm text-[#757F95] flex justify-between w-full"
      >
        <span>{label}</span>
        {!hidden && <span>({number})</span>}
      </label>
    </div>
  );
};

export default FilterCheckBox;
