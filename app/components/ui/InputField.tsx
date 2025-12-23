import type { ChangeEvent } from "react";

type InputFieldProps = {
  title?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export default function InputField({
  title,
  placeholder,
  type = "text",
  value,
  name,
  onChange,
  disabled = false,
}: InputFieldProps) {
  return (
    <div className="w-full space-y-3">
      {title && (
        <label className="text-[18px] font-medium text-primaryText">
          {title}
        </label>
      )}

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className="
        mt-1
          w-full
          rounded-lg
          border
          border-[#E2E8F0]
          bg-[#F0F8FF]
          px-[11px]
          py-[11px]
          text-[16px]
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
