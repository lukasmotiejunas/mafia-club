"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));

    if (email === "admin@mafia-klubas.lt" && password === "admin") {
      router.push("/admin/dashboard");
      return;
    }
    setLoading(false);
    setError("Neteisingi prisijungimo duomenys");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blood-950/60 via-background to-background" />
      <div className="noise-overlay" />

      <div className="relative w-full max-w-md">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 justify-center opacity-70 hover:opacity-100 transition-opacity"
        >
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden">
            <div className="absolute inset-0 rotate-45 bg-blood-600" />
            <span className="relative font-display text-2xl text-white leading-none">
              M
            </span>
          </div>
          <span className="font-display text-2xl tracking-widest">
            MAFIA<span className="text-blood-500">.</span>
          </span>
        </Link>

        <div className="card-dark p-8 md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <Lock size={18} className="text-blood-500" />
            <span className="text-xs uppercase tracking-widest text-blood-500">
              Admin prisijungimas
            </span>
          </div>
          <h1 className="font-display text-3xl tracking-widest">
            Sveiki sugrįžę
          </h1>
          <p className="mt-2 text-sm text-muted">
            Prisijunkite prie klubo administravimo skydelio.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                El. paštas
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full h-12 bg-surface border border-border px-4 text-sm focus:outline-none focus:border-blood-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted mb-2">
                Slaptažodis
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full h-12 bg-surface border border-border px-4 text-sm focus:outline-none focus:border-blood-600 transition-colors"
              />
            </div>

            {error && (
              <div className="text-xs text-blood-500 border border-blood-600/40 bg-blood-600/5 px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Jungiamės...
                </>
              ) : (
                "Prisijungti"
              )}
            </button>
          </form>

          <p className="mt-6 text-[10px] uppercase tracking-widest text-muted text-center">
            Demo: admin@mafia-klubas.lt / admin
          </p>
        </div>
      </div>
    </div>
  );
}
