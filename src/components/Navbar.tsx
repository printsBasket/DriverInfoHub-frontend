"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Drivers", href: "/drivers/" },
    { name: "Blog", href: "/blog/" },
    { name: "Knowledge", href: "/knowledge/" },
    { name: "About", href: "/about/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 border-b border-slate-200 bg-white/95 backdrop-blur-xl z-50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link className="flex shrink-0 items-center gap-2 sm:gap-3" href="/">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg shadow-blue-200">
              <span className="text-base sm:text-lg font-bold text-white">D</span>
            </div>
            <div className="hidden sm:block">
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                Driver Info Hub
              </h2>
              <p className="text-xs text-slate-500">Device Drivers Hub</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1.5">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href.replace(/\/$/, '')));
              return (
                <Link
                  key={link.name}
                  className={`rounded-full px-3 md:px-4 lg:px-5 py-2 md:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-white hover:text-blue-600"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            className="hidden sm:block rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105"
            href="/contact/"
          >
            Contact Us
          </Link>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95 backdrop-blur-xl">
                <nav className="flex flex-col gap-4 mt-8">
                  {links.map((link) => {
                    const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href.replace(/\/$/, '')));
                    return (
                      <Link
                        key={link.name}
                        className={`text-lg font-medium transition-colors ${
                          isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
                        }`}
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <Link
                    className="mt-4 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:scale-105"
                    href="/contact/"
                  >
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
