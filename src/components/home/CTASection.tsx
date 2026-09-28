"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1533747122510-52ffcf2b62b3?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      <div className="noise-overlay" />

      <div className="container-page relative py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-blood-500">
            Prisijunk prie šeimos
          </div>
          <h2 className="heading-display mt-6 text-5xl md:text-6xl lg:text-7xl">
            Tavo pirmasis vakaras <br />
            <span className="text-gradient-blood">jau laukia</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed">
            Užsiregistruok abonementui ir gauk prieigą prie visų mėnesio
            renginių, mokomosios medžiagos ir uždarų vakarienių.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/bilietai" className="btn-primary group">
              Registruotis dabar
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link href="/renginiai" className="btn-ghost">
              Pažiūrėti renginius
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
