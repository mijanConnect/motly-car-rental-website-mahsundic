"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendOTP = () => {
    // Handle send OTP logic here
    console.log("Sending OTP to:", email);
    // After OTP is sent, navigate to verify-otp page
    router.push("/verify-otp");
  };

  return (
    <div className="bg-background shadow-sm p-4 lg:p-8 rounded-lg w-full max-w-[525px] border border-gray-200">
      <div className="flex justify-center mb-6">
        <Image src="/assets/logo.png" alt="Logo" width={130} height={130} />
      </div>
      <div className="mb-6">
        <h1 className="mb-1 text-[18px] font-bold text-primaryText">
          Forgot Password
        </h1>
        <p className="text-[14px] text-primaryParagraph">
          Enter your email to receive a password reset code
        </p>
      </div>
      <div className="w-full space-y-8">
        <InputField
          title="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button fullWidth variant="primary" size="md" onClick={handleSendOTP}>
          Send OTP
        </Button>
      </div>
    </div>
  );
}
