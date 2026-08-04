import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { about, education, profile } from "@/data/portfolio";
import { Card, IconBadge, Reveal, Section, SectionHeader } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title={about.heading} subtitle={about.intro} />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <Card className="h-full">
            <div className="space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {about.miniCards.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-border/70 bg-background/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">{c.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Contact Snapshot
            </p>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              Professional and easy to reach.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Open to backend engineering, full stack, and AI engineering roles where I can build
              reliable enterprise-grade software.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { icon: MapPin, label: "Location", value: profile.location },
                { icon: Mail, label: "Email", value: profile.email },
                { icon: Phone, label: "Phone", value: profile.phone },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <IconBadge>
                    <Icon size={16} />
                  </IconBadge>
                  <div className="min-w-0">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation backed by strong consistency."
      />
      <div className="mt-12 space-y-4">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <Card className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
              <div className="flex min-w-0 items-center gap-4">
                <IconBadge>
                  <GraduationCap size={18} />
                </IconBadge>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">{e.title}</h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{e.org}</p>
                </div>
              </div>
              <div className="col-span-2 flex flex-wrap gap-2 sm:col-auto">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
