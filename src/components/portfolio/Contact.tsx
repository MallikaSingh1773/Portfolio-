import { useState } from "react";
import { Copy, Check, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Card, IconBadge, Reveal, Section, SectionHeader } from "./primitives";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const details = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
    { icon: Github, label: "GitHub", value: "github.com/MallikaSingh1773", href: profile.github },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mallikasingh05",
      href: profile.linkedin,
    },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something impactful together."
        subtitle="I'm open to backend engineering, full stack, and AI engineering opportunities with teams solving strong technical problems."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Reach Out
            </p>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              Available for the next meaningful opportunity.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you're hiring, collaborating on a project, or want to discuss backend and AI
              engineering, I'd be happy to connect. Email is the quickest way to reach me.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <IconBadge>
                      <Icon size={15} />
                    </IconBadge>
                    <div className="min-w-0">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer noopener">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="flex h-full flex-col">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Quick Actions
            </p>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              Simple ways to start a conversation.
            </h3>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-[1.02]"
              >
                Send Email
              </a>
              <button
                onClick={copy}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:scale-[1.02] hover:border-accent hover:text-accent"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                {copied ? "Email Copied" : "Copy Email"}
              </button>
            </div>
            <div className="mt-auto border-t border-border pt-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{profile.name}</p>
              <p className="mt-1">{profile.role}</p>
              <p className="mt-3 text-xs">© 2026 All Rights Reserved.</p>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="px-4 pb-12 pt-6 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] bg-surface px-6 py-8 shadow-soft sm:flex sm:items-center sm:justify-between sm:px-10">
        <div className="min-w-0">
          <p className="text-base font-bold text-foreground">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">{profile.role}</p>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}
