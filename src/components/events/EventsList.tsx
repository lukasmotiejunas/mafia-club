"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { Modal } from "@/components/shared/Modal";
import { ContactForm } from "@/components/forms/ContactForm";
import { EVENTS, type EventItem } from "@/data/events";

const CATEGORIES = ["Visi", "Turnyras", "Vakaras", "Mokymai", "Vaikams"] as const;

export function EventsList() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("Visi");
  const [selected, setSelected] = useState<EventItem | null>(null);

  const filtered =
    active === "Visi" ? EVENTS : EVENTS.filter((e) => e.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-colors ${
              active === cat
                ? "bg-blood-600 border-blood-600 text-white"
                : "border-border text-muted hover:border-blood-600 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-8">
        {filtered.map((event, i) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group card-dark overflow-hidden grid md:grid-cols-[minmax(0,320px)_1fr]"
          >
            <div className="relative aspect-video md:aspect-auto overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/60" />
              <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blood-600 text-white">
                {event.category}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <h3 className="font-display text-3xl md:text-4xl tracking-wider group-hover:text-blood-500 transition-colors">
                {event.title}
              </h3>
              <p className="mt-4 text-sm text-muted leading-relaxed max-w-xl">
                {event.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs">
                <Meta icon={<Calendar size={14} />} value={event.dateLabel} />
                <Meta
                  icon={<MapPin size={14} />}
                  value={`${event.location}, ${event.city}`}
                />
                <Meta icon={<Users size={14} />} value={`${event.spots} vietų`} />
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setSelected(event)}
                  className="btn-primary group/btn"
                >
                  Susisiekti
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </motion.article>
        ))}

        {filtered.length === 0 && (
          <div className="py-24 text-center text-muted">
            Šioje kategorijoje renginių dar nėra.
          </div>
        )}
      </div>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title="Užklausa į renginį"
      >
        {selected && (
          <ContactForm
            eventTitle={selected.title}
            onSuccess={() => setSelected(null)}
          />
        )}
      </Modal>
    </>
  );
}

function Meta({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2 text-muted">
      <span className="text-blood-500">{icon}</span>
      {value}
    </div>
  );
}
