import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-[--color-primary]">
            NextStore
          </h2>
          <p className="max-w-sm text-sm text-gray-600">
            Simple demo store built with Next.js, RTK Query, and Tailwind.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 text-sm sm:w-auto sm:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Shop</h3>
            <div className="flex flex-col gap-1 text-gray-600">
              <Link href="#products" className="hover:text-[--color-primary]">
                Products
              </Link>
              <Link href="/" className="hover:text-[--color-primary]">
                Home
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800">Company</h3>
            <div className="flex flex-col gap-1 text-gray-600">
              <Link href="/" className="hover:text-[--color-primary]">
                About
              </Link>
              <Link href="/" className="hover:text-[--color-primary]">
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-2 col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-gray-800">Stay updated</h3>
            <form className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-md bg-[--color-primary] px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} NextStore. All rights reserved.
          </span>
          <div className="flex gap-3">
            <Link href="/" className="hover:text-[--color-primary]">
              Privacy
            </Link>
            <Link href="/" className="hover:text-[--color-primary]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
