"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Pradžia" },
  { href: "/bilietai", label: "Bilietai · Abonementas" },
  { href: "/komandos", label: "Komandos" },
  { href: "/renginiai", label: "Renginiai" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rotate-45 bg-blood-600 transition-transform group-hover:rotate-90" />
            <span className="relative font-display text-2xl text-white leading-none">
              M
            </span>
          </div>
          <span className="font-display text-2xl tracking-widest">
            MAFIA<span className="text-blood-500">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors",
                  active
                    ? "text-blood-500"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-blood-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/bilietai" className="btn-primary text-xs">
            Registruotis
          </Link>
        </div>

        <button
          type="button"
          aria-label="Meniu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded border border-border hover:border-blood-600 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-background/98 backdrop-blur-xl animate-fade-in-up">
          <nav className="container-page flex flex-col gap-1 pt-8 pb-12">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b border-border py-5 font-display text-3xl tracking-wider transition-colors",
                    active
                      ? "text-blood-500"
                      : "text-foreground hover:text-blood-500"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/bilietai" className="btn-primary mt-8 w-full">
              Registruotis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
