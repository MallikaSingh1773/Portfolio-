import { Code2, Server, LayoutGrid, Database, Cloud, Cpu } from "lucide-react";
import { skills } from "@/data/portfolio";
import { Card, Reveal, Section, SectionHeader } from "./primitives";

const icons = {
  code: Code2,
  server: Server,
  layout: LayoutGrid,
  database: Database,
  cloud: Cloud,
  cpu: Cpu,
} as const;

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="A practical toolkit across backend, full stack, and AI workflows."
        subtitle="I focus on technologies that help me ship reliable enterprise software, with enough depth to design robust systems and enough range to build end to end."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon size={17} />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
