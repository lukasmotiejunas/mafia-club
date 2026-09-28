"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-fade-in-up"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface border border-border shadow-2xl animate-fade-in-up">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface/95 backdrop-blur px-6 py-4">
          {title && (
            <h3 className="font-display text-xl tracking-widest">{title}</h3>
          )}
          <button
            type="button"
            aria-label="Uždaryti"
            onClick={onClose}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center border border-border text-muted hover:border-blood-600 hover:text-blood-500 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
}
