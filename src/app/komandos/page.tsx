import type { Metadata } from "next";
import { Trophy, Users, Calendar } from "lucide-react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { TEAMS } from "@/data/teams";

export const metadata: Metadata = {
  title: "Komandos",
  description:
    "Susipažink su Mafia Klubo komandomis — jų istorijos, kapitonai, pergalės ir žaidimo stiliai.",
};

export default function KomandosPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blood-950/40 via-background to-background" />
        <div className="noise-overlay" />

        <div className="container-page relative">
          <SectionEyebrow>Komandos</SectionEyebrow>
          <h1 className="heading-display mt-6 text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            Šeimos, kurios <span className="text-gradient-blood">rašo istoriją</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted leading-relaxed">
            Kiekviena komanda — savas stilius, savas charakteris, savas kelias
            į pergalę. Susipažink su Lietuvos mafijos scenos elitu.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="grid gap-8 md:gap-10">
            {TEAMS.map((team, i) => (
              <article
                key={team.slug}
                className={`group relative overflow-hidden card-dark grid lg:grid-cols-2 min-h-[420px] ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[280px] lg:min-h-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${team.image})` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 40%, ${team.accent}66 100%)`,
                    }}
                  />
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <div
                      className="h-3 w-3"
                      style={{ background: team.accent }}
                    />
                    <span className="text-xs uppercase tracking-widest text-white/80">
                      Est. {team.founded}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <div className="text-xs uppercase tracking-[0.3em] text-blood-500">
                    {team.tagline}
                  </div>
                  <h2 className="heading-display mt-4 text-5xl md:text-6xl lg:text-7xl">
                    {team.name}
                  </h2>
                  <p className="mt-6 text-muted leading-relaxed">
                    {team.description}
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    <Stat
                      icon={<Users size={16} />}
                      value={team.members.toString()}
                      label="Nariai"
                    />
                    <Stat
                      icon={<Trophy size={16} />}
                      value={team.wins.toString()}
                      label="Pergalės"
                    />
                    <Stat
                      icon={<Calendar size={16} />}
                      value={team.founded}
                      label="Įkurta"
                    />
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-sm">
                    <span className="text-muted">Kapitonas:</span>
                    <span className="font-medium text-foreground">
                      {team.captain}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-blood-500">
        {icon}
        <span className="font-display text-2xl">{value}</span>
      </div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}
