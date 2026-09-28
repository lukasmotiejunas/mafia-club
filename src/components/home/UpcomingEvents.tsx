"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { EVENTS } from "@/data/events";

export function UpcomingEvents() {
  const upcoming = EVENTS.slice(0, 3);

  return (
    <section className="section relative">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionEyebrow>Artimiausi renginiai</SectionEyebrow>
            <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
              Nepraleisk{" "}
              <span className="text-blood-500">progos</span> būti dalyviu
            </h2>
          </div>
          <Link href="/renginiai" className="btn-ghost self-start md:self-auto group">
            Visi renginiai
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {upcoming.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-dark group overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blood-600 text-white">
                  {event.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wider group-hover:text-blood-500 transition-colors">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
                  {event.description}
                </p>

                <div className="mt-6 space-y-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-blood-500" />
                    {event.dateLabel}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-blood-500" />
                    {event.location}, {event.city}
                  </div>
                </div>

                <Link
                  href="/renginiai"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blood-500 group-hover:gap-3 transition-all"
                >
                  Susisiekti
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
