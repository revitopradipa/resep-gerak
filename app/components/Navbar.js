"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Tubuh", href: "/#body-parts" },
  { label: "Olahraga", href: "/#sports" },
  { label: "Kondisi", href: "/#conditions" },
  { label: "Artikel", href: "/#articles" },
  { label: "Perpustakaan", href: "/#library" },
];

export default function Navbar({ theme = "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "nav-glass shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/Logo_ResepGerak_2.svg"
              alt="Resep Gerak Logo"
              className="h-9 w-auto transition-transform group-hover:scale-110"
            />
            <img
              src="/Logo_ResepGerak_3.svg"
              alt="Resep Gerak"
              className={`h-5 w-auto transition-opacity ${scrolled || theme === "light" ? "opacity-100" : "brightness-0 invert"
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-lexend uppercase tracking-wider font-semibold text-xs px-4 py-2 rounded-lg transition-all duration-200 hover:bg-accent-gold/10 hover:text-accent-gold ${scrolled || theme === "light"
                  ? "text-on-surface-variant"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/#subscribe"
              className="hidden sm:inline-flex font-lexend uppercase tracking-wider font-bold text-xs bg-accent-gold text-white px-5 py-2.5 rounded-lg hover:bg-accent-gold-hover transition-all active:scale-95 shadow-sm"
            >
              Login
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || theme === "light" ? "text-primary-container hover:bg-surface-container" : "text-white hover:bg-white/10"
                }`}
              aria-label="Open menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] drawer-backdrop" onClick={() => setDrawerOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl animate-fade-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
              <span className="font-oswald font-bold text-lg text-primary-container tracking-tight">
                RESEP GERAK
              </span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-lg hover:bg-surface-container transition-colors"
                aria-label="Close menu"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l8 8M14 6l-8 8" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col py-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-3 px-6 py-4 font-lexend uppercase tracking-wider font-semibold text-sm text-on-surface-variant hover:bg-accent-gold/10 hover:text-accent-gold transition-all"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-outline-variant/20">
              <Link
                href="/#subscribe"
                onClick={() => setDrawerOpen(false)}
                className="block text-center font-lexend uppercase tracking-wider font-bold text-sm bg-accent-gold text-white px-5 py-3 rounded-lg hover:bg-accent-gold-hover transition-all"
              >
                Konsultasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
