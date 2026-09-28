export type Team = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  founded: string;
  members: number;
  wins: number;
  captain: string;
  image: string;
  accent: string;
};

export const TEAMS: Team[] = [
  {
    slug: "corleone",
    name: "Corleone",
    tagline: "Šeima virš visko",
    description:
      "Legendinė komanda, garsėjanti šalta strategija ir nepalaužiama sąjunga. Corleone lauke — visada tyla prieš audrą.",
    founded: "2019",
    members: 12,
    wins: 47,
    captain: 'Tomas „Don" Kazlauskas',
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    accent: "#c8102e",
  },
  {
    slug: "capone",
    name: "Capone",
    tagline: "Chicago dvasia",
    description:
      "Agresyvus stilius, drąsios kalbos ir psichologinis spaudimas. Capone žaidėjai neduoda oponentams nė sekundės ramybės.",
    founded: "2020",
    members: 10,
    wins: 38,
    captain: 'Justinas „Al" Ramonas',
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80",
    accent: "#8b0f24",
  },
  {
    slug: "bratva",
    name: "Bratva",
    tagline: "Broliškas kodas",
    description:
      "Rytų mokykla — analitiška, kantri, negailestinga finale. Bratva žinoma dėl geležinės logikos ir taktinių gudrybių.",
    founded: "2021",
    members: 11,
    wins: 32,
    captain: 'Andrej „Volk" Petrov',
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    accent: "#e63946",
  },
  {
    slug: "yakuza",
    name: "Yakuza",
    tagline: "Garbė ir tyla",
    description:
      "Ramūs, disciplinuoti, itin sunkiai perskaitomi. Yakuza žaidėjai laimi tada, kai atrodo, jog viskas jau prarasta.",
    founded: "2022",
    members: 9,
    wins: 24,
    captain: 'Kenji „Shogun" Aoki',
    image:
      "https://images.unsplash.com/photo-1552057426-c4dcc7cbeaa8?auto=format&fit=crop&w=1200&q=80",
    accent: "#741324",
  },
  {
    slug: "camorra",
    name: "Camorra",
    tagline: "Neapolio ugnis",
    description:
      "Karšto kraujo grupė. Improvizacija, drąsūs sprendimai ir netikėti aljansai — Camorra vakarai visada įsimintini.",
    founded: "2022",
    members: 10,
    wins: 21,
    captain: 'Marco „Vulcano" Rossi',
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=1200&q=80",
    accent: "#c8102e",
  },
  {
    slug: "phantoms",
    name: "Phantoms",
    tagline: "Šešėlių žaidimas",
    description:
      "Naujoji karta — greiti, drąsūs, technologiški. Phantoms šturmuoja turnyrus ir stebina veteranus savo pasitikėjimu.",
    founded: "2024",
    members: 8,
    wins: 12,
    captain: 'Lukas „Ghost" Butkus',
    image:
      "https://images.unsplash.com/photo-1508188609340-4d3f5f0a80c6?auto=format&fit=crop&w=1200&q=80",
    accent: "#e63946",
  },
];
