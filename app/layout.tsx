import "./globals.css";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Montly Car Rental Service",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} bg-[--background] text-[--foreground]`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
