"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Įveskite vardą ir pavardę"),
  email: z.string().email("Neteisingas el. pašto formatas"),
  phone: z.string().min(6, "Įveskite telefono numerį"),
  plan: z.enum(["menesis", "seznas", "vip"], {
    message: "Pasirinkite planą",
  }),
  experience: z.enum(["naujokas", "vidutinis", "profesionalas"]),
  message: z.string().optional(),
  terms: z.literal(true, { message: "Būtina sutikti su taisyklėmis" }),
});

type FormValues = z.infer<typeof schema>;

const PLANS = [
  {
    id: "menesis" as const,
    name: "Mėnesio",
    price: "49€",
    period: "/ mėn.",
    features: [
      "4 renginiai per mėnesį",
      "Prieiga prie mokomosios medžiagos",
      "Bendruomenės chat",
    ],
  },
  {
    id: "seznas" as const,
    name: "Sezono",
    price: "199€",
    period: "/ 6 mėn.",
    features: [
      "Visi mėnesio renginiai",
      "Sezono turnyras",
      "Merchandise dovana",
      "Prioritetinė registracija",
    ],
    popular: true,
  },
  {
    id: "vip" as const,
    name: "VIP",
    price: "499€",
    period: "/ metai",
    features: [
      "Neribotas dalyvavimas",
      "Uždaros vakarienės",
      "Asmeninis meistriškumo koučingas",
      "VIP loža renginiuose",
    ],
  },
];

const inputBase =
  "w-full h-12 bg-surface border px-4 text-sm focus:outline-none transition-colors";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      plan: "seznas",
      experience: "naujokas",
    },
  });

  const selectedPlan = watch("plan");

  async function onSubmit(data: FormValues) {
    await new Promise((r) => setTimeout(r, 900));
    console.log("Registration submission", data);
    setSubmitted(true);
    reset({ plan: "seznas", experience: "naujokas" });
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div>
        <h3 className="font-display text-2xl tracking-widest mb-6">
          1. Pasirinkite planą
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <button
              type="button"
              key={plan.id}
              onClick={() =>
                setValue("plan", plan.id, { shouldValidate: true })
              }
              className={`relative text-left p-6 border transition-all ${
                selectedPlan === plan.id
                  ? "border-blood-600 bg-blood-600/5"
                  : "border-border hover:border-blood-600/50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-6 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-blood-600 text-white">
                  Populiariausias
                </span>
              )}
              <div className="font-display text-xl tracking-widest">
                {plan.name}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl text-blood-500">
                  {plan.price}
                </span>
                <span className="text-xs text-muted">{plan.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-muted">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 shrink-0 text-blood-500"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>
        {errors.plan && (
          <p className="mt-2 text-xs text-blood-500">{errors.plan.message}</p>
        )}
      </div>

      <div>
        <h3 className="font-display text-2xl tracking-widest mb-6">
          2. Jūsų informacija
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted mb-2">
              Vardas ir pavardė
            </label>
            <input
              type="text"
              {...register("fullName")}
              className={`${inputBase} ${
                errors.fullName
                  ? "border-blood-600"
                  : "border-border focus:border-blood-600"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-blood-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-muted mb-2">
              El. paštas
            </label>
            <input
              type="email"
              {...register("email")}
              className={`${inputBase} ${
                errors.email
                  ? "border-blood-600"
                  : "border-border focus:border-blood-600"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-blood-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-muted mb-2">
              Telefonas
            </label>
            <input
              type="tel"
              {...register("phone")}
              className={`${inputBase} ${
                errors.phone
                  ? "border-blood-600"
                  : "border-border focus:border-blood-600"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-blood-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-muted mb-2">
              Patirtis
            </label>
            <select
              {...register("experience")}
              className={`${inputBase} border-border focus:border-blood-600`}
            >
              <option value="naujokas">Naujokas</option>
              <option value="vidutinis">Turiu patirties</option>
              <option value="profesionalas">Profesionalas</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="block text-xs uppercase tracking-widest text-muted mb-2">
            Žinutė (nebūtina)
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Papildoma informacija..."
            className="w-full bg-surface border border-border p-4 text-sm focus:outline-none focus:border-blood-600 transition-colors resize-none"
          />
        </div>

        <label className="mt-5 flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("terms")}
            className="mt-1 h-4 w-4 accent-blood-600"
          />
          <span className="text-xs text-muted">
            Sutinku su klubo taisyklėmis ir privatumo politika. Suprantu, kad
            mano duomenys bus naudojami tik registracijos administravimui.
          </span>
        </label>
        {errors.terms && (
          <p className="mt-2 text-xs text-blood-500">{errors.terms.message}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary min-w-[220px] disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Siunčiama...
            </>
          ) : (
            "Registruotis"
          )}
        </button>
        {submitted && (
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle2 size={18} />
            Ačiū! Susisieksime per 24 val.
          </div>
        )}
      </div>
    </form>
  );
}
