import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

const dict: Dict = {
  // Nav
  "nav.about": { en: "About", ar: "نبذة" },
  "nav.experience": { en: "Experience", ar: "الخبرات" },
  "nav.projects": { en: "Projects", ar: "المشاريع" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.skills": { en: "Skills", ar: "المهارات" },
  "nav.contact": { en: "Contact", ar: "تواصل" },

  // Hero
  "hero.name": { en: "Galal Elaasar", ar: "جلال الأعصر" },
  "hero.badge": { en: "Available for new projects", ar: "متاح لمشاريع جديدة" },
  "hero.greeting": { en: "Hi, I'm", ar: "مرحبًا، أنا" },
  "hero.tagline": {
    en: "Front-End Developer crafting fast, elegant interfaces with React & Next.js.",
    ar: "مطوّر واجهات أمامية أصمّم تجارب سريعة وأنيقة باستخدام React و Next.js.",
  },
  "hero.sub": {
    en: "I build modern, accessible web experiences focused on performance, motion, and pixel-perfect design.",
    ar: "أبني تجارب ويب حديثة وسهلة الوصول، مع تركيز على الأداء، الحركة، والتصميم المتقن.",
  },
  "hero.cta.projects": { en: "View Projects", ar: "شاهد المشاريع" },
  "hero.cta.contact": { en: "Contact Me", ar: "تواصل معي" },
  "hero.cta.cv": { en: "Download CV", ar: "تحميل السيرة الذاتية" },

  // About
  "about.kicker": { en: "About Me", ar: "نبذة عني" },
  "about.title": {
    en: "Building the web, one component at a time.",
    ar: "أبني الويب… مكوّنًا تلو الآخر.",
  },
  "about.body": {
    en: "I'm a Front-End Developer specializing in the React ecosystem. I started my journey captivated by the way thoughtful UI can turn complex products into delightful experiences. Today I focus on shipping high-performance interfaces with React, Next.js, and TypeScript — backed by clean architecture, accessibility, and motion that feels natural.",
    ar: "مطوّر واجهات أمامية متخصص في نظام React. بدأت رحلتي مفتونًا بقدرة الواجهة الجيدة على تحويل المنتجات المعقدة إلى تجارب مبهجة. اليوم أركّز على تطوير واجهات عالية الأداء باستخدام React و Next.js و TypeScript، مدعومة ببنية نظيفة، إمكانية وصول، وحركة طبيعية.",
  },
  "about.stat.years": { en: "Years coding", ar: "سنوات خبرة" },
  "about.stat.projects": { en: "Projects shipped", ar: "مشروع منجز" },
  "about.stat.clients": { en: "Happy clients", ar: "عميل سعيد" },

  // Experience
  "exp.kicker": { en: "Experience", ar: "الخبرات" },
  "exp.title": { en: "My professional journey", ar: "رحلتي المهنية" },
  "exp.role1.title": { en: "Senior Front-End Developer", ar: "مطوّر واجهات أمامية أول" },
  "exp.role1.company": { en: "Freelance · Remote", ar: "عمل حر · عن بُعد" },
  "exp.role1.period": { en: "2024 — Present", ar: "2024 — حتى الآن" },
  "exp.role1.body": {
    en: "Designing and shipping production React/Next.js apps with focus on performance and motion.",
    ar: "تصميم وإطلاق تطبيقات React/Next.js إنتاجية مع التركيز على الأداء والحركة.",
  },
  "exp.role2.title": { en: "Front-End Developer", ar: "مطوّر واجهات أمامية" },
  "exp.role2.company": { en: "Tech Studio", ar: "استوديو تقني" },
  "exp.role2.period": { en: "2022 — 2024", ar: "2022 — 2024" },
  "exp.role2.body": {
    en: "Built dashboards, e-commerce storefronts and component libraries for SaaS clients.",
    ar: "بناء لوحات تحكم، متاجر إلكترونية، ومكتبات مكوّنات لعملاء SaaS.",
  },
  "exp.role3.title": { en: "Junior Web Developer", ar: "مطوّر ويب مبتدئ" },
  "exp.role3.company": { en: "Agency", ar: "وكالة" },
  "exp.role3.period": { en: "2021 — 2022", ar: "2021 — 2022" },
  "exp.role3.body": {
    en: "Started with HTML/CSS/JS, fell in love with React and never looked back.",
    ar: "بدأت بـ HTML/CSS/JS، ثم وقعت في حب React ولم أنظر للوراء.",
  },

  // Services
  "svc.kicker": { en: "Services", ar: "الخدمات" },
  "svc.title": { en: "What I can do for you", ar: "ما يمكنني تقديمه" },
  "svc.web.title": { en: "Web Apps", ar: "تطبيقات الويب" },
  "svc.web.body": {
    en: "Production-grade React & Next.js apps with SSR, auth and clean architecture.",
    ar: "تطبيقات React و Next.js احترافية مع SSR، مصادقة، وبنية نظيفة.",
  },
  "svc.ui.title": { en: "UI Engineering", ar: "هندسة الواجهات" },
  "svc.ui.body": {
    en: "Design systems, reusable components, and pixel-perfect Tailwind interfaces.",
    ar: "أنظمة تصميم، مكوّنات قابلة لإعادة الاستخدام، وواجهات Tailwind متقنة.",
  },
  "svc.motion.title": { en: "Motion & Interaction", ar: "الحركة والتفاعل" },
  "svc.motion.body": {
    en: "Smooth, purposeful animations with Framer Motion and GSAP.",
    ar: "حركات سلسة وهادفة باستخدام Framer Motion و GSAP.",
  },
  "svc.perf.title": { en: "Performance", ar: "الأداء" },
  "svc.perf.body": {
    en: "Lighthouse 95+ optimization, code splitting, and image strategy.",
    ar: "تحسينات Lighthouse 95+، تقسيم الكود، واستراتيجيات الصور.",
  },

  // Projects
  "projects.kicker": { en: "Work", ar: "أعمال" },
  "projects.title": { en: "Selected Projects", ar: "مشاريع مختارة" },
  "projects.subtitle": {
    en: "Filter by stack to explore what I've built across web and mobile.",
    ar: "صنّف حسب التقنية لاستكشاف ما بنيته على الويب والموبايل.",
  },
  "projects.filter.all": { en: "All", ar: "الكل" },
  "projects.live": { en: "Live", ar: "مباشر" },
  "projects.code": { en: "Code", ar: "الكود" },

  // Skills
  "skills.kicker": { en: "Skills", ar: "المهارات" },
  "skills.title": { en: "What I work with", ar: "ما أعمل به" },

  // Contact
  "contact.kicker": { en: "Contact", ar: "تواصل" },
  "contact.title": { en: "Let's build something", ar: "لنبنِ شيئًا معًا" },
  "contact.subtitle": {
    en: "Have a project in mind or just want to say hi? My inbox is open.",
    ar: "لديك مشروع في بالك أو تريد أن تُلقي التحية؟ صندوقي مفتوح.",
  },
  "contact.name": { en: "Name", ar: "الاسم" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.sending": { en: "Sending...", ar: "جاري الإرسال..." },
  "contact.success": { en: "Message sent! I'll get back to you soon.", ar: "تم إرسال رسالتك! سأرد قريبًا." },

  // Footer
  "footer.rights": {
    en: "Crafted with React & Framer Motion.",
    ar: "صُنع بـ React و Framer Motion.",
  },
  "footer.tagline": { en: "Designed & built with care.", ar: "صُمم وبُني بعناية." },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: keyof typeof dict) => string;
  dir: "ltr" | "rtl";
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "ar" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === "en" ? "ar" : "en"),
      t: (key) => dict[key]?.[lang] ?? String(key),
      dir: lang === "ar" ? "rtl" : "ltr",
    }),
    [lang],
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
