import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium tracking-[0.3em] uppercase text-blood-500",
        className
      )}
    >
      <span className="h-px w-8 bg-blood-500" />
      {children}
    </div>
  );
}
