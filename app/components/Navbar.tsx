"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold text-[--color-primary] hover:opacity-90"
        >
          NextStore
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[--color-foreground] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[--color-primary] lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
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

        <nav
          className={`${
            open ? "max-h-52 opacity-100" : "max-h-0 opacity-0"
          } absolute left-0 right-0 top-full overflow-hidden border-b border-t bg-white/95 px-4 shadow-md transition-all duration-200 lg:static lg:max-h-none lg:flex lg:items-center lg:justify-end lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none`}
        >
          <div className="flex flex-col gap-3 py-3 text-sm lg:flex-row lg:items-center lg:py-0 lg:gap-4">
            <Link
              href="/"
              className="hover:text-[--color-primary]"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#products"
              className="hover:text-[--color-primary]"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <button className="rounded-full border border-[--color-primary] px-3 py-1 text-xs font-semibold text-[--color-primary] transition hover:bg-[--color-primary] hover:text-white">
              Cart
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
