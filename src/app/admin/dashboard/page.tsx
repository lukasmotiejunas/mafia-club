"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ClipboardList,
  LogOut,
  MessageSquare,
  Search,
  Ticket,
} from "lucide-react";

type Submission = {
  id: string;
  type: "Abonementas" | "Renginys";
  name: string;
  email: string;
  phone: string;
  detail: string;
  date: string;
  status: "Naujas" | "Peržiūrėta" | "Patvirtinta";
};

const MOCK_SUBMISSIONS: Submission[] = [
  {
    id: "s-001",
    type: "Abonementas",
    name: "Jonas Petraitis",
    email: "jonas@example.com",
    phone: "+370 611 11111",
    detail: "Sezono planas · Naujokas",
    date: "2026-09-27 14:32",
    status: "Naujas",
  },
  {
    id: "s-002",
    type: "Renginys",
    name: "Ieva Butkienė",
    email: "ieva@example.com",
    phone: "+370 622 22222",
    detail: "Vasaros Grand Prix Turnyras · 4 asmenys",
    date: "2026-09-27 12:10",
    status: "Peržiūrėta",
  },
  {
    id: "s-003",
    type: "Renginys",
    name: "Tomas Kazlauskas",
    email: "tomas@example.com",
    phone: "+370 633 33333",
    detail: "VIP Vakarienė · 2 asmenys",
    date: "2026-09-26 22:05",
    status: "Patvirtinta",
  },
  {
    id: "s-004",
    type: "Abonementas",
    name: "Milda Simaitytė",
    email: "milda@example.com",
    phone: "+370 644 44444",
    detail: "VIP planas · Profesionalas",
    date: "2026-09-26 18:44",
    status: "Naujas",
  },
  {
    id: "s-005",
    type: "Renginys",
    name: "Andrius Norkus",
    email: "andrius@example.com",
    phone: "+370 655 55555",
    detail: "Kauno Meistriškumo Mokymai · 1 asmuo",
    date: "2026-09-25 09:20",
    status: "Peržiūrėta",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"Visi" | Submission["type"]>("Visi");

  const filtered = MOCK_SUBMISSIONS.filter((s) => {
    if (filter !== "Visi" && s.type !== filter) return false;
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      s.detail.toLowerCase().includes(q)
    );
  });

  const stats = {
    total: MOCK_SUBMISSIONS.length,
    new: MOCK_SUBMISSIONS.filter((s) => s.status === "Naujas").length,
    subscriptions: MOCK_SUBMISSIONS.filter((s) => s.type === "Abonementas")
      .length,
    events: MOCK_SUBMISSIONS.filter((s) => s.type === "Renginys").length,
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-surface/40 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden">
              <div className="absolute inset-0 rotate-45 bg-blood-600" />
              <span className="relative font-display text-lg text-white leading-none">
                M
              </span>
            </div>
            <div>
              <div className="font-display text-lg tracking-widest leading-none">
                MAFIA<span className="text-blood-500">.</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-muted">
                Admin skydelis
              </div>
            </div>
          </Link>

          <button
            onClick={() => router.push("/admin/login")}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-blood-500 transition-colors"
          >
            <LogOut size={16} />
            Atsijungti
          </button>
        </div>
      </header>

      <main className="container-page py-10 md:py-14">
        <h1 className="font-display text-4xl md:text-5xl tracking-widest">
          Užpildytos formos
        </h1>
        <p className="mt-2 text-sm text-muted">
          Visos gautos registracijos ir renginių užklausos.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<ClipboardList size={18} />}
            label="Iš viso"
            value={stats.total}
          />
          <StatCard
            icon={<MessageSquare size={18} />}
            label="Nauji"
            value={stats.new}
            accent
          />
          <StatCard
            icon={<Ticket size={18} />}
            label="Abonementai"
            value={stats.subscriptions}
          />
          <StatCard
            icon={<ClipboardList size={18} />}
            label="Renginiai"
            value={stats.events}
          />
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-2">
            {(["Visi", "Abonementas", "Renginys"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-colors ${
                  filter === f
                    ? "bg-blood-600 border-blood-600 text-white"
                    : "border-border text-muted hover:border-blood-600 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              placeholder="Ieškoti..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-11 bg-surface border border-border pl-11 pr-4 text-sm focus:outline-none focus:border-blood-600 transition-colors"
            />
          </div>
        </div>

        <div className="mt-6 border border-border overflow-hidden">
          <div className="hidden md:grid grid-cols-[100px_1.5fr_2fr_2.5fr_140px_120px] bg-surface/60 border-b border-border px-6 py-4 text-[10px] uppercase tracking-widest text-muted font-semibold">
            <div>Tipas</div>
            <div>Vardas</div>
            <div>Kontaktai</div>
            <div>Detalės</div>
            <div>Data</div>
            <div className="text-right">Statusas</div>
          </div>

          <div className="divide-y divide-border">
            {filtered.map((s) => (
              <div
                key={s.id}
                className="grid md:grid-cols-[100px_1.5fr_2fr_2.5fr_140px_120px] gap-2 md:gap-0 px-6 py-5 hover:bg-surface/40 transition-colors"
              >
                <div>
                  <span
                    className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${
                      s.type === "Abonementas"
                        ? "bg-blood-600/15 text-blood-400"
                        : "bg-emerald-600/15 text-emerald-400"
                    }`}
                  >
                    {s.type}
                  </span>
                </div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-muted">
                  <div>{s.email}</div>
                  <div className="text-xs">{s.phone}</div>
                </div>
                <div className="text-sm text-muted">{s.detail}</div>
                <div className="text-xs text-muted">{s.date}</div>
                <div className="md:text-right">
                  <StatusBadge status={s.status} />
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="py-16 text-center text-muted text-sm">
                Nerasta pagal paiešką.
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-widest text-muted">
          * Šis skydelis kol kas rodo demo duomenis. Prijungus duomenų bazę,
          čia matysite visas realias formas.
        </p>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="card-dark p-6">
      <div
        className={`inline-flex h-10 w-10 items-center justify-center border ${
          accent
            ? "border-blood-600 bg-blood-600 text-white"
            : "border-border text-blood-500"
        }`}
      >
        {icon}
      </div>
      <div className="mt-6 font-display text-4xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted">
        {label}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Submission["status"] }) {
  const styles = {
    Naujas: "bg-blood-600/15 text-blood-400 border-blood-600/40",
    Peržiūrėta: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Patvirtinta: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  };
  return (
    <span
      className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest border ${styles[status]}`}
    >
      {status}
    </span>
  );
}
