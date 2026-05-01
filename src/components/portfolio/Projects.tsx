import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { AnimatedCount } from "./AnimatedCount";
import { ProjectSkeleton } from "./ProjectSkeleton";
import { ProjectModal } from "./ProjectModal";
import { ProjectsEmptyState } from "./ProjectsEmptyState";
import type { Category, Project } from "./project-types";
import { ExternalLink, Eye, Github } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import weatherApp from "@/assets/weather-app.png";
import youtubeClone from "@/assets/youtube-clone.png";
import prayerTimes from "@/assets/prayer-times.png";
import travel from "@/assets/travel.jpg";
import SpecialDesign from "@/assets/Special Design.jpg";
import food from "@/assets/food website.jpg";
import commerceImg from "@/assets/project-commerce.jpg";
import portfolioImg from "@/assets/project-portfolio.jpg";
import interior from "@/assets/interior.jpg";
import social from "@/assets/social.jpg";
import Elaasar from "@/assets/Elaasar.jpg";
import photo from "@/assets/photo.jpg";
import masbaa from "@/assets/masbaa.jpg";
import education from "@/assets/education.jpg";
import saasImg from "@/assets/project-saas.jpg";
import { useI18n } from "@/lib/i18n";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useDeviceTier } from "@/hooks/use-device-tier";

const projects: Project[] = [
    {
    id: "youtube-clone",
    title: "Youtube Clone",
    descEn: "Analytics dashboard with real-time charts, dark mode and responsive layouts.",
    descAr: "لوحة تحليلات بمخططات حية، وضع داكن، وتصميم متجاوب.",
    longEn:
      "Nova is an analytics dashboard built for SaaS teams. It features streaming charts, configurable widgets, and a fully theme-aware design system. Optimised for fast first paint and smooth interactivity even on large datasets.",
    longAr:
      "نوفا لوحة تحليلات لفِرق SaaS، تتميز بمخططات حيّة، عناصر قابلة للتخصيص، ونظام تصميم متجاوب مع الثيمات. مُحسَّنة لسرعة العرض وسلاسة التفاعل حتى مع البيانات الكبيرة.",
    highlightsEn: [
      "Real-time charts with WebSocket streams",
      "95+ Lighthouse performance score",
      "Theme-aware design tokens",
      "Drag-and-drop widget grid",
    ],
    highlightsAr: [
      "مخططات حيّة عبر WebSocket",
      "نتيجة Lighthouse 95+",
      "نظام تصميم متجاوب مع الثيمات",
      "ترتيب العناصر بالسحب والإفلات",
    ],
    stack: ["React", "MUI", "Vite"],
    link: "https://youtube55.netlify.app/",
    repo: "https://github.com/GalalElaasar9/youtube_clone.git",
    cover: youtubeClone,
    gallery: [youtubeClone, weatherApp , saasImg, portfolioImg],
    category: "react",
  },
    {
    id: "weather-app",
    title: "Weather App",
    descEn: "Analytics dashboard with real-time charts, dark mode and responsive layouts.",
    descAr: "لوحة تحليلات بمخططات حية، وضع داكن، وتصميم متجاوب.",
    longEn:
      "Nova is an analytics dashboard built for SaaS teams. It features streaming charts, configurable widgets, and a fully theme-aware design system. Optimised for fast first paint and smooth interactivity even on large datasets.",
    longAr:
      "نوفا لوحة تحليلات لفِرق SaaS، تتميز بمخططات حيّة، عناصر قابلة للتخصيص، ونظام تصميم متجاوب مع الثيمات. مُحسَّنة لسرعة العرض وسلاسة التفاعل حتى مع البيانات الكبيرة.",
    highlightsEn: [
      "Real-time charts with WebSocket streams",
      "95+ Lighthouse performance score",
      "Theme-aware design tokens",
      "Drag-and-drop widget grid",
    ],
    highlightsAr: [
      "مخططات حيّة عبر WebSocket",
      "نتيجة Lighthouse 95+",
      "نظام تصميم متجاوب مع الثيمات",
      "ترتيب العناصر بالسحب والإفلات",
    ],
    stack: ["React", "Bootstrap", "Vite"],
    link: "https://weather-app-9999.netlify.app/",
    repo: "https://github.com/GalalElaasar9/weather-app.git",
    cover: weatherApp,
    gallery: [weatherApp, youtubeClone , saasImg, portfolioImg],
    category: "react",
  },
  {
    id: "prayer-times",
    title: "Prayer Times",
    descEn: "Workout tracker with offline-first sync, charts, and haptic feedback.",
    descAr: "متتبّع تمارين يعمل دون اتصال، مع مخططات وردود حسّية.",
    longEn:
      "FitTrack is an offline-first workout tracker. Sessions log locally and sync seamlessly when online, with detailed progress charts, haptic feedback, and adaptive workout suggestions.",
    longAr:
      "متتبّع تمارين يعمل دون اتصال أولاً، يسجّل الجلسات محليًا ويتزامن لحظة الاتصال، مع رسوم تقدّم تفصيلية، ردود حسّية، واقتراحات تمارين تكيّفية.",
    highlightsEn: [
      "Offline-first with SQLite sync",
      "Adaptive workout suggestions",
      "Animated progress charts",
      "Haptic & audio feedback",
    ],
    highlightsAr: [
      "Offline-first مع مزامنة SQLite",
      "اقتراحات تمارين تكيّفية",
      "رسوم تقدّم متحركة",
      "ردود حسّية وصوتية",
    ],
    stack: ["React", "Bootstrap", "Vite"],
    link: "https://prayer-times99.netlify.app/",
    repo: "https://github.com/GalalElaasar9/prayer-times.git",
    cover: prayerTimes,
    gallery: [prayerTimes , youtubeClone, weatherApp , saasImg, portfolioImg],
    category: "react",
  },
  {
    id: "social-Media",
    title: "Social Media Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://galalelaasar9.github.io/Social-Media-Elaasar/",
    repo: "https://github.com/GalalElaasar9/Social-Media-Elaasar.git",
    cover: social,
    gallery: [ social , education , interior , food , SpecialDesign, travel],
    category: "native",
  },
  {
    id: "eduction-Media",
    title: "Social Media Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://education-website-0100.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Education-website.git",
    cover: education,
    gallery: [ education , social , interior , food , SpecialDesign, travel],
    category: "native",
  },
  {
    id: "Tarvel",
    title: "Tarvel Website",
    descEn: "Cross-platform mobile chat with optimistic UI, typing indicators and presence.",
    descAr: "تطبيق محادثات للموبايل مع واجهة تفاعلية ومؤشرات الكتابة.",
    longEn:
      "Pulse is a cross-platform chat app built with React Native and Expo. It supports optimistic message sends, typing indicators, presence, and end-to-end encrypted DMs with a smooth, native-feeling animation system.",
    longAr:
      "تطبيق محادثات متعدد المنصّات مبني بـ React Native و Expo، يدعم الإرسال التفاؤلي، مؤشرات الكتابة، التواجد، ورسائل خاصة مشفّرة من طرف لطرف بحركات سلسة.",
    highlightsEn: [
      "Optimistic UI with offline queue",
      "Realtime presence & typing indicators",
      "End-to-end encrypted DMs",
      "60fps Reanimated transitions",
    ],
    highlightsAr: [
      "واجهة تفاؤلية مع طابور Offline",
      "تواجد ومؤشرات كتابة فوريّة",
      "محادثات خاصة مشفّرة E2E",
      "حركات Reanimated بـ 60fps",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://traveling-website-9999.netlify.app/",
    repo: "https://github.com/GalalElaasar9/travel.git",
    cover: travel,
    gallery: [travel, SpecialDesign , food],
    category: "native",
  },
  {
    id: "special",
    title: "Special Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://special999.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Special-Design.git",
    cover: SpecialDesign,
    gallery: [SpecialDesign, travel , food],
    category: "native",
  },
  {
    id: "food-website",
    title: "Food Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://food-website999.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Food-Website99.git",
    cover: food,
    gallery: [food , SpecialDesign, travel],
    category: "native",
  },
  {
    id: "interior-elaasar",
    title: "Interior Elaasar",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://interior-elaasar-000.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Interior-Project.git",
    cover: interior,
    gallery: [ interior , food , SpecialDesign, travel],
    category: "native",
  },
  {
    id: "elaasar-website",
    title: "Elaasar Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Sass" , "Js", "fontawesome"],
    link: "https://galalelaasar9.github.io/Social-Media-Elaasar/",
    repo: "https://github.com/GalalElaasar9/Social-Media-Elaasar.git",
    cover: Elaasar,
    gallery: [ Elaasar , social , interior , food , SpecialDesign, travel],
    category: "native",
  },
  {
    id: "photography-website",
    title: "Photography Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Sass" ,"Js", "fontawesome"],
    link: "https://photography-website-elaasar.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Photography-Portfolio-Website.git",
    cover: photo,
    gallery: [photo , Elaasar , social , interior , food , SpecialDesign, travel],
    category: "native",
  },
  {
    id: "masbaa-website",
    title: "masbaha Website",
    descEn: "Animated portfolio template with smooth scroll and theme system.",
    descAr: "قالب بورتفوليو متحرك مع تمرير سلس ونظام ثيمات.",
    longEn:
      "Atlas is a refined portfolio template with cinematic scroll storytelling, layered GSAP timelines, and a flexible theme system that ships in light, dark and accent variants.",
    longAr:
      "أتلس قالب بورتفوليو فاخر بقصّ سرديّ عبر التمرير، تايملاينز GSAP طبقيّة، ونظام ثيمات مرن بإصدارات فاتحة وداكنة وأكسنت.",
    highlightsEn: [
      "GSAP-powered scroll storytelling",
      "Light, dark & custom accent themes",
      "MDX-driven case study pages",
      "Edge-rendered for sub-50ms TTFB",
    ],
    highlightsAr: [
      "سرد عبر التمرير مدعوم بـ GSAP",
      "ثيمات فاتحة وداكنة وأكسنت مخصص",
      "صفحات دراسات حالة بـ MDX",
      "عرض على الـ Edge بـ TTFB أقل من 50ms",
    ],
    stack: ["Html", "css", "Js", "fontawesome"],
    link: "https://website-misbaha-zekr.netlify.app/",
    repo: "https://github.com/GalalElaasar9/Website-Misbaha.git",
    cover: masbaa,
    gallery: [ masbaa , photo , Elaasar , social , interior , food , SpecialDesign, travel],
    category: "native",
  },
];

export function Projects() {
  const { t, lang } = useI18n();
  const reduced = usePrefersReducedMotion();
  const tier = useDeviceTier();
  const [active, setActive] = useState<"all" | Category>("all");
  const [loading, setLoading] = useState(false);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  const filters: { value: "all" | Category; label: string }[] = [
    { value: "all", label: t("projects.filter.all") },
    { value: "react", label: "React" },
    { value: "next", label: "Next.js" },
    { value: "native", label: "Native Project" },
  ];

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  // Adaptive skeleton: skip on fast devices, short on normal, longer on slow.
  const skeletonMs = reduced ? 0 : tier === "fast" ? 0 : tier === "slow" ? 520 : 280;

  useEffect(() => {
    if (skeletonMs === 0) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const id = setTimeout(() => setLoading(false), skeletonMs);
    return () => clearTimeout(id);
  }, [active, skeletonMs]);

  const suggestions = filters
    .filter((f) => f.value !== active && f.value !== "all")
    .map((f) => ({
      value: f.value,
      label: f.label,
      count:
        f.value === "all"
          ? projects.length
          : projects.filter((p) => p.category === f.value).length,
    }))
    .filter((s) => s.count > 0)
    .slice(0, 3);

  const skeletonCount = Math.min(Math.max(filtered.length || 3, 3), 6);

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
          <motion.div layout className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => {
              const isActive = active === f.value;
              const count =
                f.value === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === f.value).length;
              return (
                <motion.button
                  key={f.value}
                  layout
                  onClick={() => setActive(f.value)}
                  whileHover={reduced ? undefined : { y: -1 }}
                  whileTap={reduced ? undefined : { scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 36 }}
                  className={`relative px-4 py-2 text-sm rounded-full border transition-colors ${
                    isActive
                      ? "border-transparent text-primary-foreground"
                      : "border-border bg-card hover:border-primary/60 hover:text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full shadow-[var(--shadow-soft)]"
                      style={{ background: "var(--gradient-primary)" }}
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 34, mass: 0.7 }
                      }
                    />
                  )}
                  <span className="relative inline-flex items-center gap-1.5">
                    {f.label}
                    <motion.span
                      layout
                      transition={{ type: "spring", stiffness: 500, damping: 36 }}
                      className={`text-[10px] min-w-[1.25rem] text-center px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/25" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <AnimatedCount value={count} />
                    </motion.span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {loading ? (
                Array.from({ length: skeletonCount }).map((_, i) => (
                  <motion.div
                    key={`skeleton-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04 }}
                  >
                    <ProjectSkeleton tier={tier} />
                  </motion.div>
                ))
              ) : filtered.length === 0 ? (
                <ProjectsEmptyState
                  key="empty"
                  suggestions={suggestions}
                  onPick={(v) => setActive(v as "all" | Category)}
                />
              ) : (
                filtered.map((p, i) => (
                  <motion.article
                    key={p.id}
                    layout
                    initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.96 }}
                    animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.96 }}
                    transition={{
                      duration: reduced ? 0.15 : 0.4,
                      delay: reduced ? 0 : i * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={reduced ? undefined : { y: -6 }}
                    onClick={() => setOpenProject(p)}
                    className="group relative rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow overflow-hidden flex flex-col cursor-pointer text-start"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                      <motion.img
                        src={p.cover}
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
                            ? "Native Project"
                            : "React"}
                      </span>
                      {/* Quick view affordance */}
                      <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border text-xs font-medium">
                          <Eye className="h-3.5 w-3.5" />
                          {lang === "ar" ? "عرض التفاصيل" : "View details"}
                        </span>
                      </div>
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
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                          >
                            {t("projects.live")} <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <a
                            href={p.repo}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                          >
                            {t("projects.code")} <Github className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
