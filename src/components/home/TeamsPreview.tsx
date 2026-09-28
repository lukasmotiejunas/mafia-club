"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { TEAMS } from "@/data/teams";

export function TeamsPreview() {
  const preview = TEAMS.slice(0, 4);

  return (
    <section className="section relative border-t border-border bg-surface/30">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionEyebrow>Komandos</SectionEyebrow>
            <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Šeimos, kurios{" "}
              <span className="text-blood-500">valdo</span> žaidimų stalus
            </h2>
          </div>
          <Link
            href="/komandos"
            className="btn-ghost self-start md:self-auto group"
          >
            Visos komandos
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((team, i) => (
            <motion.article
              key={team.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden card-dark aspect-[3/4]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${team.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blood-900/70 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs uppercase tracking-widest text-blood-400">
                  {team.tagline}
                </div>
                <h3 className="mt-2 font-display text-3xl tracking-widest">
                  {team.name}
                </h3>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                  <span>{team.members} nariai</span>
                  <span className="h-1 w-1 rounded-full bg-blood-500" />
                  <span>{team.wins} pergalės</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
