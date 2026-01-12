"use client";

import { ChangeEvent, useState } from "react";

type InputFieldProps = {
  title?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "date" | "tel";
  initialValue?: string;
  name?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function InputField({
  title,
  placeholder,
  type = "text",
  initialValue = "",
  name,
  onChange,
  disabled = false,
}: InputFieldProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="w-full space-y-3">
      {title && (
        <label className="text-[16px] font-semibold text-primaryText">
          {title}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        className="
        mt-1
          w-full
          h-12
          rounded-[6px]
          border
          border-[#E2E8F0]
          bg-[#F0F8FF]
          px-3
          py-3
          text-[14px]
          text-gray-900
          outline-none
          transition
          focus:border-primary
          focus:ring-1
          focus:ring-primary/20
          disabled:cursor-not-allowed
          disabled:bg-gray-100
        "
      />
    </div>
  );
}
