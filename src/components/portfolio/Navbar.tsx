import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp, Menu, Moon, Sun, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
    />
  );
}

export function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full border border-border/60 px-4 py-2.5 transition-all duration-300 sm:px-5 lg:flex lg:justify-between",
          scrolled ? "glass-panel shadow-soft" : "glass-panel",
        )}
      >
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {initials}
          </span>
          <span className="min-w-0">
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Portfolio
            </span>
            <span className="block truncate text-sm font-bold text-foreground">{profile.name}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active === item.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition-all hover:scale-105 hover:border-accent hover:text-accent"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:scale-105 sm:inline-flex"
          >
            Let's Connect
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border/60 glass-panel p-3 shadow-soft lg:hidden">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-200 hover:scale-110"
    >
      <ArrowUp size={18} />
    </button>
  );
}
