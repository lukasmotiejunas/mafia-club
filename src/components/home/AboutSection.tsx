"use client";

import { motion } from "framer-motion";
import { Crown, Shield, Users } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";

const PILLARS = [
  {
    icon: Crown,
    title: "Elito lygis",
    text: "Meistriški vedėjai, kruopščiai paruoštos partijos ir aukščiausio lygio atmosfera. Kiekvienas vakaras — kaip kinematografinė scena.",
  },
  {
    icon: Shield,
    title: "Sąžininga kova",
    text: "Aiškios taisyklės, patikrinti scenarijai ir arbitražas. Čia laimi ne triukšmingiausias, o gudriausias.",
  },
  {
    icon: Users,
    title: "Stipri bendruomenė",
    text: "Nuo pirmųjų sekundžių tapsi dalimi šeimos. Renginiai, keliones, uždaros vakarienės, draugystės visam gyvenimui.",
  },
];

export function AboutSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <SectionEyebrow>Apie klubą</SectionEyebrow>
            <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-6xl">
              Vieta, kur strategija{" "}
              <span className="text-blood-500">susitinka</span> su charakteriu
            </h2>
            <div className="mt-8 space-y-6 text-muted leading-relaxed">
              <p>
                Mafia Klubas gimė 2019 metais iš mažo draugų rato Vilniuje.
                Šiandien tai — bendruomenė, jungianti daugiau nei 60 aktyvių
                žaidėjų, dešimtis komandų ir šimtus renginių dalyvių visoje
                Lietuvoje.
              </p>
              <p>
                Mūsų misija paprasta: sukurti erdvę, kurioje suaugę žmonės gali
                atsijungti nuo kasdienybės, panerti į vaidmens žaidimą ir
                išeiti su nauja patirtimi bei draugais.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {["Strategija", "Psichologija", "Blefavimas", "Komandinė dvasia"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-medium uppercase tracking-widest text-foreground border border-border"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="card-dark p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center border border-blood-600/40 text-blood-500 group-hover:bg-blood-600 group-hover:text-white transition-colors">
                    <p.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl tracking-wider">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
