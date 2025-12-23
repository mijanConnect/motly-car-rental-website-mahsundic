"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/app/components/ui/InputField";
import Button from "@/app/components/ui/Button";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-background shadow-sm p-8 rounded-lg w-full max-w-[525px] border border-gray-200">
      <div className="flex justify-center mb-6">
        <Image
          src="/assets/logo.png"
          alt="Login Image"
          width={130}
          height={130}
        />
      </div>
      <div className="mb-6">
        <h1 className="mb-1 text-[18px] font-bold text-primaryText">
          Login
        </h1>
        <p className="text-[15px] text-primaryParagraph">
          Login to access your travelwise account
        </p>
      </div>
      <div className="w-full space-y-4">
        <InputField
          title="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          title="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p
        className="text-right text-[15px] font-medium text-red-600 cursor-pointer mt-2 hover:underline"
        onClick={() => router.push("/forgot-password")}
      >
        Forgot Password?
      </p>
      <div className="mt-6">
        <Button fullWidth variant="primary" size="md">
          Login
        </Button>
      </div>
      <div>
        <div className="my-6 flex items-center">
          <hr className="grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="grow border-t border-gray-300" />
        </div>
      </div>
      <div>
        <Button fullWidth variant="secondary" size="md" className="mt-4">
          <Image
            src="/assets/google.png"
            alt="Login Image"
            width={20}
            height={20}
          />
          Continue with Google
        </Button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-[15px]">
          Don&apos;t have an account?{" "}
          <span className="font-semibold text-primary cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
