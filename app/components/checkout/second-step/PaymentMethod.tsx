import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useState } from "react";
import { Maestro, PayPal, Visa } from "../../Svg";

export default function PaymentMethod() {
  const [title, setTitle] = useState("visa");

  const baseBox =
    "flex items-center space-x-2 rounded-xl px-5 py-[25px] border transition-colors cursor-pointer";
  const activeBorder = "border-primary bg-primary/10";
  const inactiveBorder = "border-gray-300";

  return (
    <div className="mt-6 lg:mt-10">
      <h1 className="text-[24px] lg:text-[32px] text-primaryText font-bold">
        Payment Method
      </h1>

      <p className="text-[20px] text-primaryText mt-3">
        Choose how you&apos;d like to pay for the rental deposit.
      </p>

      <RadioGroup
        value={title}
        onValueChange={setTitle}
        className="flex flex-col gap-4 mt-6"
      >
        <div
          onClick={() => setTitle("visa")}
          className={`${baseBox} ${
            title === "visa" ? activeBorder : inactiveBorder
          }`}
        >
          <RadioGroupItem value="visa" id="visa" />
          <label
            htmlFor="visa"
            className="text-[20px] text-primaryText flex justify-between w-full items-center cursor-pointer"
          >
            <p>Credit Card (Visa / Mastercard)</p>
            <div className="flex gap-4">
              <div className="border border-gray-100 bg-gray-50 rounded-sm h-[50px] w-[75px] flex items-center justify-center">
                <Visa width={45} height={14} />
              </div>
              <div className="border border-gray-100 bg-gray-50 rounded-sm h-[50px] w-[75px] flex items-center justify-center">
                <Maestro width={48} height={29} />
              </div>
            </div>
          </label>
        </div>

        <div
          onClick={() => setTitle("paypal")}
          className={`${baseBox} ${
            title === "paypal" ? activeBorder : inactiveBorder
          }`}
        >
          <RadioGroupItem value="paypal" id="paypal" />
          <label
            htmlFor="paypal"
            className="text-[20px] text-primaryText flex justify-between w-full items-center cursor-pointer"
          >
            <p>Pay with PayPal</p>
            <div className="border border-gray-100 rounded-sm h-[50px] w-[75px] flex items-center justify-center">
              <PayPal width={42} height={37} />
            </div>
          </label>
        </div>
      </RadioGroup>

      <p className="text-[18px] text-primaryTextLight mt-3">
        By proceeding, you agree to the{" "}
        <Link
          href="/terms-conditions"
          className="text-blue-700 hover:text-blue-500 underline transition transform duration-200"
        >
          Terms and Conditions
        </Link>{" "}
        and confirm that you have read the rental agreement.
      </p>
    </div>
  );
}
