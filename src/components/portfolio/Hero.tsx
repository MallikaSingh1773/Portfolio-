import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section id="hero" className="px-4 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-hero-gradient px-5 py-14 shadow-soft sm:px-10 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex rounded-full border border-border bg-card/70 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary">
            {profile.badge}
          </span>

          <h1 className="mt-7 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {profile.heading}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.subheading}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105"
            >
              Explore Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:scale-105 hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {profile.heroCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="rounded-2xl border border-border/70 bg-card/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {card.label}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{card.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: Github, label: "GitHub", href: profile.github },
              { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
              { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={14} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-lift"
        >
          <img
            src={heroImage}
            alt="Portrait of Mallika Singh, Java backend and AI engineer"
            width={640}
            height={720}
            loading="eager"
            className="aspect-square w-full rounded-2xl object-cover object-center"
          />
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Based in {profile.location}
            </p>
            <p className="mt-2 text-xl font-bold text-foreground">{profile.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              B.Tech Computer Science Engineering graduate from VIT Amaravati, building enterprise
              backend systems with Spring Boot and Angular alongside Agentic AI applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
