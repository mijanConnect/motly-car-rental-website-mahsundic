"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navbarStyles = `
  .nav-link {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: #ffffff;
  }

  .nav-link::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: '';
    color: transparent;
    background: #ffffff;
    height: 2px;
    transition: width 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    color: #ffffff;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "DE" : "EN"));
  };

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{navbarStyles}</style>
      <header
        className={`sticky top-0 z-20 bg-primary rounded-b-2xl shadow-[0_3px_5px_rgba(0,0,0,0.10)] px-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3">
          <Link
            href="/"
            className="text-lg font-semibold hover:opacity-90 border rounded-sm p-1"
          >
            <Image
              src="/assets/logo-nav.png"
              alt="Login Image"
              width={46}
              height={46}
            />
          </Link>

          <nav
            className={`${
              open
                ? "max-h-96 opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            } absolute left-0 right-0 mt-1 top-full overflow-hidden bg-linear-to-b from-primary via-primary/95 to-primary/90 px-4 shadow-2xl transition-all duration-300 ease-out lg:static lg:max-h-none lg:flex lg:items-center lg:justify-end lg:gap-4 lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:visible`}
          >
            <div className="flex flex-col gap-4 lg:gap-18 py-6 text-[16px] font-medium text-white lg:flex-row lg:items-center lg:py-0 items-center">
              <Link
                href="/"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/car-details"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/car-details") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Service
              </Link>
              <Link
                href="/my-booking"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/my-booking") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                My Booking
              </Link>
              {/* <Link
                href="#products"
                className={`nav-link py-1 transform transition-all ${
                  isActive("#products") ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                About us
              </Link> */}
              <Link
                href="/contact-us"
                className={`nav-link py-1 transform transition-all ${
                  isActive("/contact-us") ? "active" : ""
                }`}
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
                    lang === "EN" ? "opacity-100" : "opacity-50"
                  }`}
                >
                  EN
                </span>
                <div className="border-l border-white h-6" />
                <span
                  className={`pl-2 ${
                    lang === "DE" ? "opacity-100" : "opacity-50"
                  }`}
                >
                  DE
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <Link
                  href="/profile"
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  {/* <UserIcon /> */}
                  <Image
                    src="/assets/avatar.png"
                    alt="Profile Image"
                    width={46}
                    height={46}
                    className="rounded-full border border-white"
                  />
                </Link>
                <Link
                  href="/login"
                  className="text-white"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex justify-start items-center gap-3">
                    {/* <UserIcon /> */}
                    <p className="text-[18px]">Sign In</p>
                  </div>
                </Link>
              </div>
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
    </>
  );
}
