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
  peopleCount: z
    .string()
    .min(1, "Įveskite dalyvių skaičių")
    .refine((v) => {
      const n = Number(v);
      return Number.isInteger(n) && n >= 1 && n <= 50;
    }, "Nuo 1 iki 50 dalyvių"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const inputBase =
  "w-full h-12 bg-background border px-4 text-sm focus:outline-none transition-colors";

export function ContactForm({
  eventTitle,
  onSuccess,
}: {
  eventTitle: string;
  onSuccess?: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      peopleCount: "1",
    },
  });

  async function onSubmit(data: FormValues) {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact submission", {
      event: eventTitle,
      ...data,
      peopleCount: Number(data.peopleCount),
    });
    setSubmitted(true);
    reset({ peopleCount: "1" });
    setTimeout(() => {
      setSubmitted(false);
      onSuccess?.();
    }, 2200);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 size={32} />
        </div>
        <div>
          <h3 className="font-display text-2xl tracking-widest">Ačiū!</h3>
          <p className="mt-2 text-sm text-muted">
            Jūsų užklausa gauta. Susisieksime per 24 valandas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="mb-2 rounded border border-blood-600/30 bg-blood-600/5 px-4 py-3">
        <div className="text-[10px] uppercase tracking-widest text-blood-500">
          Renginys
        </div>
        <div className="mt-1 font-display text-lg tracking-wider">
          {eventTitle}
        </div>
      </div>

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

      <div className="grid gap-5 sm:grid-cols-2">
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
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-muted mb-2">
          Dalyvių skaičius
        </label>
        <input
          type="number"
          min={1}
          max={50}
          {...register("peopleCount")}
          className={`${inputBase} ${
            errors.peopleCount
              ? "border-blood-600"
              : "border-border focus:border-blood-600"
          }`}
        />
        {errors.peopleCount && (
          <p className="mt-1 text-xs text-blood-500">
            {errors.peopleCount.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-muted mb-2">
          Žinutė (nebūtina)
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Jūsų klausimas ar pageidavimas..."
          className="w-full bg-background border border-border p-4 text-sm focus:outline-none focus:border-blood-600 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Siunčiama...
          </>
        ) : (
          "Siųsti užklausą"
        )}
      </button>
    </form>
  );
}
