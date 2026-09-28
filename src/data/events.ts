export type EventItem = {
  id: string;
  title: string;
  date: string;
  dateLabel: string;
  location: string;
  city: string;
  spots: number;
  category: "Turnyras" | "Vakaras" | "Mokymai" | "Vaikams";
  image: string;
  description: string;
};

export const EVENTS: EventItem[] = [
  {
    id: "vasaros-turnyras-2026",
    title: "Vasaros Grand Prix Turnyras",
    date: "2026-07-12T18:00:00",
    dateLabel: "Liepos 12, 18:00",
    location: "Loftas",
    city: "Vilnius",
    spots: 60,
    category: "Turnyras",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1600&q=80",
    description:
      "Sezono kulminacija — didysis vasaros turnyras. Aštuonių komandų kova dėl Grand Prix titulo, gyva muzika ir DJ vakaras.",
  },
  {
    id: "penktadienio-vakaras",
    title: "Penktadienio Mafia Vakaras",
    date: "2026-06-06T19:00:00",
    dateLabel: "Birželio 6, 19:00",
    location: 'Klubas „Underground"',
    city: "Vilnius",
    spots: 40,
    category: "Vakaras",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80",
    description:
      "Neformalus vakaras naujokams ir profesionalams. Šeši stalai, patyrę vedėjai ir dvi žaidimo dalys.",
  },
  {
    id: "kauno-mokymai",
    title: "Kauno Meistriškumo Mokymai",
    date: "2026-06-20T17:00:00",
    dateLabel: "Birželio 20, 17:00",
    location: "Kaunas Arena Studio",
    city: "Kaunas",
    spots: 25,
    category: "Mokymai",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    description:
      "Praktinis seminaras: psichologija, blefavimas, komandinė kalba. Vedėjai — Lietuvos čempionato prizininkai.",
  },
  {
    id: "seimu-diena",
    title: "Šeimų Diena · Mafia jaunimui",
    date: "2026-06-15T14:00:00",
    dateLabel: "Birželio 15, 14:00",
    location: "Vingio parkas",
    city: "Vilnius",
    spots: 80,
    category: "Vaikams",
    image:
      "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=1600&q=80",
    description:
      "Nemokamas atviras renginys visai šeimai. Adaptuota versija paaugliams, animacijos ir prizai.",
  },
  {
    id: "rudens-lyga",
    title: "Rudens Lygos Atidarymas",
    date: "2026-09-05T18:30:00",
    dateLabel: "Rugsėjo 5, 18:30",
    location: 'Menų fabrikas „Loftas"',
    city: "Vilnius",
    spots: 100,
    category: "Turnyras",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
    description:
      "Naujo sezono pradžia — dvylikos komandų parade, atidarymo šou ir pirmasis lygos etapas.",
  },
  {
    id: "vip-vakariene",
    title: "VIP Vakarienė su Legendomis",
    date: "2026-08-22T20:00:00",
    dateLabel: "Rugpjūčio 22, 20:00",
    location: 'Restoranas „Familia"',
    city: "Vilnius",
    spots: 20,
    category: "Vakaras",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    description:
      "Uždara vakarienė su klubo legendomis. Vakarienė, žaidimas ir istorijos iš pirmųjų klubo dienų.",
  },
];
