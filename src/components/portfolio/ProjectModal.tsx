import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Project } from "./project-types";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const { t, lang } = useI18n();
  const reduced = usePrefersReducedMotion();
  const [activeImg, setActiveImg] = useState(0);

  // Lock scroll while open
  useEffect(() => {
    if (!project) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [project]);

  // ESC to close
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onClose]);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImg(0);
  }, [project?.id]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.1 : 0.25 }}
        >
          {/* Backdrop */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-md cursor-default"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.96 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.97 }}
            transition={
              reduced
                ? { duration: 0.1 }
                : { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
            }
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] flex flex-col"
          >
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-4 end-4 z-10 h-9 w-9 grid place-items-center rounded-full bg-background/80 backdrop-blur border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="overflow-y-auto">
              {/* Main image */}
              <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={project.gallery[activeImg]}
                    alt={`${project.title} preview ${activeImg + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduced ? 0.1 : 0.4 }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 start-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-background/80 backdrop-blur border border-border font-medium">
                  {project.category === "next"
                    ? "Next.js"
                    : project.category === "native"
                      ? "React Native"
                      : "React"}
                </span>
              </div>

              {/* Thumbnails */}
              {project.gallery.length > 1 && (
                <div className="flex gap-2 p-4 border-b border-border overflow-x-auto">
                  {project.gallery.map((src, i) => (
                    <button
                      key={src + i}
                      onClick={() => setActiveImg(i)}
                      className={`relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImg === i
                          ? "border-primary"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3
                  id="project-modal-title"
                  className="text-2xl md:text-3xl font-bold tracking-tight"
                >
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {lang === "ar" ? project.longAr : project.longEn}
                </p>

                {/* Highlights */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    {lang === "ar" ? "أبرز الميزات" : "Highlights"}
                  </h4>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                    {(lang === "ar" ? project.highlightsAr : project.highlightsEn).map((h, i) => (
                      <motion.li
                        key={h}
                        initial={reduced ? { opacity: 0 } : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: reduced ? 0 : 0.1 + i * 0.04 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3">
                    {lang === "ar" ? "التقنيات المستخدمة" : "Tech Stack"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s, i) => (
                      <motion.span
                        key={s}
                        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: reduced ? 0 : 0.15 + i * 0.04 }}
                        className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-[var(--shadow-soft)] hover:translate-y-[-2px] transition-transform"
                  >
                    {t("projects.live")} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                  >
                    {t("projects.code")} <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
