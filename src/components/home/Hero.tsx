"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520637836862-4d197d17c55a?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_75%)]" />
        <div className="noise-overlay" />
      </div>

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col justify-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-blood-500"
        >
          <span className="h-px w-12 bg-blood-500" />
          Est. 2019 · Lietuva
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="heading-display mt-8 text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] max-w-5xl"
        >
          Įženg<span className="text-blood-500">k</span> į<br />
          <span className="text-gradient-blood">Mafios</span> pasaulį
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 max-w-xl text-lg text-muted leading-relaxed"
        >
          Strategija. Blefavimas. Bendruomenė. Didžiausias mafijos žaidimo
          klubas Lietuvoje kviečia į vakarus, turnyrus ir mokymus, kuriuose
          gimsta legendos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/bilietai" className="btn-primary group">
            Įsigyti abonementą
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link href="/renginiai" className="btn-ghost group">
            <PlayCircle size={18} />
            Artimiausi renginiai
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-24 grid max-w-2xl grid-cols-3 gap-8 border-t border-border/60 pt-8"
        >
          {[
            { value: "7", label: "Metai bendruomenėje" },
            { value: "60+", label: "Aktyvūs žaidėjai" },
            { value: "120+", label: "Įvykdyti renginiai" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl text-blood-500">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted animate-pulse">
        <span>Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-blood-500 to-transparent" />
      </div>
    </section>
  );
}
