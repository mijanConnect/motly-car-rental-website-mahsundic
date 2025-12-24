"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import UserIcon from "./Svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "DE" : "EN"));
  };

  return (
    <header className="sticky top-0 z-20 bg-primary rounded-b-[20px] drop-shadow-lg px-4">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link
          href="/"
          className="text-lg font-semibold text-[--color-primary] hover:opacity-90"
        >
          <Image
            src="/assets/logo-nav.png"
            alt="Login Image"
            width={54}
            height={54}
          />
        </Link>

        <nav
          className={`${
            open ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
          } absolute left-0 right-0 top-full overflow-hidden border-b border-t bg-white/95 px-4 shadow-md transition-all duration-200 lg:static lg:max-h-none lg:flex lg:items-center lg:justify-end lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none`}
        >
          <div className="flex flex-col gap-3 py-3 text-[16px] font-medium text-white lg:flex-row lg:items-center lg:py-0 lg:gap-12">
            <Link
              href="/"
              className="hover:text-[--color-primary] hover:scale-115 px-2 transform transition-all"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="hover:text-[--color-primary] hover:scale-115 px-2 transform transition-all"
              onClick={() => setOpen(false)}
            >
              Service
            </Link>
            <Link
              href="#products"
              className="hover:text-[--color-primary] hover:scale-115 px-2 transform transition-all"
              onClick={() => setOpen(false)}
            >
              My Booking
            </Link>
            <Link
              href="#products"
              className="hover:text-[--color-primary] hover:scale-115 px-2 transform transition-all"
              onClick={() => setOpen(false)}
            >
              About us
            </Link>
            <Link
              href="#products"
              className="hover:text-[--color-primary] hover:scale-115 px-2 transform transition-all"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>

        <div className="flex gap-4 align-middle justify-between">
          <div className="flex justify-start items-center gap-4">
            <div
              onClick={toggleLanguage}
              className="flex items-center cursor-pointer select-none text-white border-r pr-4 h-10"
            >
              <span
                className={`pr-2 ${
                  lang === "EN" ? "font-bold" : "opacity-70"
                } border-r`}
              >
                EN
              </span>

              <span
                className={`pl-2 ${lang === "DE" ? "font-bold" : "opacity-70"}`}
              >
                DE
              </span>
            </div>

            <Link
              href="#products"
              className="text-white"
              onClick={() => setOpen(false)}
            >
              <div className="flex justify-start items-center gap-3">
                <UserIcon />
                <p className="text-[18px]">Sign In</p>
              </div>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-white hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[--color-primary] lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
