import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className="px-4 py-6 sm:px-6">
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-[2rem] bg-surface px-5 py-16 shadow-soft sm:px-10 sm:py-20 lg:px-14",
          className,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent">
      {children}
    </span>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
      {children}
    </span>
  );
}
