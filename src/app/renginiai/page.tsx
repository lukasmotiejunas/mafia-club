import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { EventsList } from "@/components/events/EventsList";

export const metadata: Metadata = {
  title: "Renginiai",
  description:
    "Artimiausi Mafia Klubo renginiai — turnyrai, vakarai, mokymai. Registracija ir kontaktai.",
};

export default function RenginiaiPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blood-950/40 via-background to-background" />
        <div className="noise-overlay" />

        <div className="container-page relative">
          <SectionEyebrow>Renginiai</SectionEyebrow>
          <h1 className="heading-display mt-6 text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Susitinkame <span className="text-gradient-blood">prie stalo</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Turnyrai, mokymai, uždaros vakarienės ir šeimų dienos. Rezervuok
            vietą arba susisiek dėl privataus renginio.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <EventsList />
        </div>
      </section>
    </>
  );
}
