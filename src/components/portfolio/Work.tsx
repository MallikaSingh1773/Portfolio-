import { Github, Briefcase } from "lucide-react";
import { experience, projects } from "@/data/portfolio";
import { Card, Chip, IconBadge, Reveal, Section, SectionHeader } from "./primitives";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work that reflects how I build."
        subtitle="These projects show the problems I enjoy: agentic AI systems, backend services, and machine learning products with real user value."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <Card className="flex h-full flex-col">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <p className="min-w-0 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {p.subtitle}
                </p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${p.name} repository`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:scale-110 hover:border-accent hover:text-accent"
                >
                  <Github size={15} />
                </a>
              </div>
              <h3 className="mt-3 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-5 space-y-2.5">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                <Github size={15} /> View repository
              </a>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Enterprise engineering and applied AI work."
      />
      <div className="relative mt-12 pl-6 sm:pl-10">
        <div className="absolute left-1.5 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-3" />
        <div className="space-y-6">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1}>
              <div className="relative">
                <span className="absolute -left-[1.35rem] top-8 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-surface sm:-left-[2.1rem]" />
                <Card>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                    <div className="flex min-w-0 items-center gap-4">
                      <IconBadge>
                        <Briefcase size={17} />
                      </IconBadge>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-foreground">{e.role}</h3>
                        <p className="mt-1 text-xs font-medium text-muted-foreground">
                          {e.company}
                        </p>
                      </div>
                    </div>
                    <span className="col-span-2 justify-self-start rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground sm:col-auto">
                      {e.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
