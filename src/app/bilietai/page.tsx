import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

export const metadata: Metadata = {
  title: "Bilietai · Abonementas",
  description:
    "Įsigyk mafijos žaidimo abonementą — mėnesio, sezono ar VIP planas. Registracija ir mokomoji video medžiaga.",
};

const VIDEOS = [
  {
    title: "Kas yra Mafijos žaidimas?",
    duration: "6 min",
    description:
      "Pagrindai naujokui: vaidmenys, ratai, dienos ir nakties dinamika.",
    thumb:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Blefavimo pamokos",
    duration: "12 min",
    description:
      "Kaip skaityti oponentus, valdyti emocijas ir manipuliuoti dienos balsavimais.",
    thumb:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sherifo strategija",
    duration: "8 min",
    description:
      "Kaip išnaudoti Sherifo vaidmenį ir dirbti su civilių komanda.",
    thumb:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dono taktikos",
    duration: "10 min",
    description: "Kaip vadovauti mafijai, dengti kolegas ir laimėti finalus.",
    thumb:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function BilietaiPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blood-950/40 via-background to-background" />
        <div className="noise-overlay" />

        <div className="container-page relative">
          <SectionEyebrow>Bilietai · Abonementas</SectionEyebrow>
          <h1 className="heading-display mt-6 text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Įsigyk pass'ą į <span className="text-gradient-blood">visą sezoną</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Vienas mokestis — visi renginiai, mokomoji medžiaga ir prieiga prie
            uždaros bendruomenės. Pasirink planą ir užpildyk formą — susisieksime
            per 24 valandas.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="card-dark p-6 md:p-12">
            <RegistrationForm />
          </div>
        </div>
      </section>

      <section className="section border-t border-border bg-surface/30">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <SectionEyebrow>Mokomoji medžiaga</SectionEyebrow>
              <h2 className="heading-display mt-6 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                Video pamokos <br />
                <span className="text-blood-500">nariams</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Aktyvūs abonementų turėtojai gauna pilną prieigą prie video
              bibliotekos ir mėnesio naujienlaiškio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {VIDEOS.map((v) => (
              <article
                key={v.title}
                className="card-dark group overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${v.thumb})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blood-600/90 backdrop-blur transition-transform group-hover:scale-110">
                      <PlayCircle size={32} className="text-white" />
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 bg-black/70 backdrop-blur px-3 py-1 text-xs text-white">
                    {v.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-wider group-hover:text-blood-500 transition-colors">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
