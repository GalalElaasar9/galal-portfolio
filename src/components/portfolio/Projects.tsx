import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { AnimatedCount } from "./AnimatedCount";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import dashboardImg from "@/assets/project-dashboard.jpg";
import commerceImg from "@/assets/project-commerce.jpg";
import chatImg from "@/assets/project-chat.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import fitnessImg from "@/assets/project-fitness.jpg";
import saasImg from "@/assets/project-saas.jpg";
import { useI18n } from "@/lib/i18n";

type Category = "react" | "next" | "native";

type Project = {
  title: string;
  descEn: string;
  descAr: string;
  stack: string[];
  link: string;
  repo: string;
  image: string;
  category: Category;
};

const projects: Project[] = [
  {
    title: "Nova Dashboard",
    descEn: "Analytics dashboard with real-time charts, dark mode and responsive layouts.",
    descAr: "لوحة تحليلات بمخططات حية، وضع داكن، وتصميم متجاوب.",
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
    link: "#",
    repo: "#",
    image: dashboardImg,
    category: "react",
  },
  {
    title: "Lumen Commerce",
    descEn: "Headless storefront with optimized SSR, cart state and Stripe checkout.",
    descAr: "متجر إلكتروني بـ SSR مُحسّن، حالة سلة، ودفع عبر Stripe.",
    stack: ["Next.js", "Zustand", "Stripe"],
    link: "#",
    repo: "#",
    image: commerceImg,
    category: "next",
  },
  {
    title: "Pulse Chat",
    descEn: "Cross-platform mobile chat with optimistic UI, typing indicators and presence.",
    descAr: "تطبيق محادثات للموبايل مع واجهة تفاعلية ومؤشرات الكتابة.",
    stack: ["React Native", "Expo", "Socket.io"],
    link: "#",
    repo: "#",
    image: chatImg,
    category: "native",
  },
  {
    title: "Atlas Portfolio",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    stack: ["Next.js", "GSAP", "Tailwind"],
    link: "#",
    repo: "#",
    image: portfolioImg,
    category: "next",
  },
  {
    title: "FitTrack Mobile",
    descEn: "Workout tracker with offline-first sync, charts, and haptic feedback.",
    descAr: "متتبّع تمارين يعمل دون اتصال، مع مخططات وردود حسّية.",
    stack: ["React Native", "Reanimated", "SQLite"],
    link: "#",
    repo: "#",
    image: fitnessImg,
    category: "native",
  },
  {
    title: "Stack SaaS",
    descEn: "Marketing site with MDX blog, dynamic OG images and edge rendering.",
    descAr: "موقع تسويقي بمدونة MDX، صور OG ديناميكية، وعرض على الـ Edge.",
    stack: ["React", "Vite", "Framer Motion"],
    link: "#",
    repo: "#",
    image: saasImg,
    category: "react",
  },
];

export function Projects() {
  const { t, lang } = useI18n();
  const [active, setActive] = useState<"all" | Category>("all");

  const filters: { value: "all" | Category; label: string }[] = [
    { value: "all", label: t("projects.filter.all") },
    { value: "react", label: "React" },
    { value: "next", label: "Next.js" },
    { value: "native", label: "React Native" },
  ];

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase">
              {t("projects.kicker")}
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              {t("projects.title")}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">{t("projects.subtitle")}</p>
        </div>

        <LayoutGroup>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => {
              const isActive = active === f.value;
              const count =
                f.value === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === f.value).length;
              return (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`relative px-4 py-2 text-sm rounded-full border transition-colors ${
                    isActive
                      ? "border-transparent text-primary-foreground"
                      : "border-border bg-card hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {f.label}
                    <motion.span
                      layout
                      className={`text-[10px] min-w-[1.25rem] text-center px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/25" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <AnimatedCount value={count} />
                    </motion.span>
                  </span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    <span className="absolute top-3 start-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border font-medium">
                      {p.category === "next"
                        ? "Next.js"
                        : p.category === "native"
                          ? "React Native"
                          : "React"}
                    </span>
                  </div>

                  <div className="relative p-6 flex flex-col flex-1">
                    <div
                      aria-hidden
                      className="absolute -top-20 -end-20 h-44 w-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-3xl pointer-events-none"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                    <div className="relative">
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {lang === "ar" ? p.descAr : p.descEn}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground"
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
                          {t("projects.live")} <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={p.repo}
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t("projects.code")} <Github className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
