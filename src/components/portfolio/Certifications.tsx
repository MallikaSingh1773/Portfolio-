import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { Card, Reveal, Section, SectionHeader } from "./primitives";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        eyebrow="Certifications"
        title="Additional proof of discipline and continued learning."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.08}>
            <a href={c.url} target="_blank" rel="noreferrer noopener" className="block h-full">
              <Card className="h-full">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Award size={18} />
                  </span>
                  <ExternalLink size={15} className="text-muted-foreground" />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-xs font-medium text-muted-foreground">{c.org}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.year}</p>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
