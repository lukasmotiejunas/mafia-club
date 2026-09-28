"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/shared/SocialIcons";

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="noise-overlay" />

      <div className="container-page relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 rotate-45 bg-blood-600" />
                <span className="relative font-display text-2xl text-white leading-none">
                  M
                </span>
              </div>
              <span className="font-display text-2xl tracking-widest">
                MAFIA<span className="text-blood-500">.</span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-muted leading-relaxed">
              Didžiausia mafijos žaidimo bendruomenė Lietuvoje. Kviečiame
              įsitraukti į strategijos, blefavimo ir bendruomenės pasaulį.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-white">
              Nuorodos
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-blood-500 transition-colors"
                >
                  Pradžia
                </Link>
              </li>
              <li>
                <Link
                  href="/bilietai"
                  className="text-muted hover:text-blood-500 transition-colors"
                >
                  Bilietai · Abonementas
                </Link>
              </li>
              <li>
                <Link
                  href="/komandos"
                  className="text-muted hover:text-blood-500 transition-colors"
                >
                  Komandos
                </Link>
              </li>
              <li>
                <Link
                  href="/renginiai"
                  className="text-muted hover:text-blood-500 transition-colors"
                >
                  Renginiai
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-white">
              Kontaktai
            </h4>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted">
                <MapPin size={18} className="mt-0.5 text-blood-500 shrink-0" />
                <span>Vilnius, Lietuva</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-blood-500 shrink-0" />
                <a
                  href="tel:+37060000000"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  +370 600 00000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-blood-500 shrink-0" />
                <a
                  href="mailto:info@mafia-klubas.lt"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  info@mafia-klubas.lt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-widest text-white">
              Sek mus
            </h4>
            <div className="mt-6 flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted hover:border-blood-600 hover:text-blood-500 transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted hover:border-blood-600 hover:text-blood-500 transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-border text-muted hover:border-blood-600 hover:text-blood-500 transition-colors"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>

            <p className="mt-8 text-xs text-muted">
              Darbo laikas: I–VII, 10:00–22:00
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mafia Klubas. Visos teisės saugomos.</p>
          <div className="flex gap-6">
            <Link href="/admin/login" className="hover:text-foreground transition-colors">
              Admin
            </Link>
            <span>Sukurta su aistra Lietuvoje</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
