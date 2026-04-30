import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nova Dashboard",
    description: "Analytics dashboard with real-time charts, dark mode and responsive layouts.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
    link: "#",
    repo: "#",
  },
  {
    title: "Lumen Commerce",
    description: "Headless storefront with optimized SSR, cart state and Stripe checkout.",
    stack: ["Next.js", "Zustand", "Stripe"],
    link: "#",
    repo: "#",
  },
  {
    title: "Pulse Chat",
    description: "Realtime chat app with optimistic UI, typing indicators and presence.",
    stack: ["React", "Socket.io", "Framer Motion"],
    link: "#",
    repo: "#",
  },
  {
    title: "Atlas Portfolio",
    description: "Animated portfolio template with smooth scroll and theme system.",
    stack: ["Next.js", "GSAP", "Tailwind"],
    link: "#",
    repo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase">Work</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A handful of recent things I've built. Each one taught me something new.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-20 -right-20 h-44 w-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                  >
                    Live <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  >
                    Code <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
