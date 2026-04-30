import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Suggestion = { value: string; label: string; count: number };

type Props = {
  suggestions: Suggestion[];
  onPick: (value: string) => void;
};

export function ProjectsEmptyState({ suggestions, onPick }: Props) {
  const { lang } = useI18n();
  const reduced = usePrefersReducedMotion();

  const title = lang === "ar" ? "لا توجد مشاريع هنا بعد" : "No projects in this category yet";
  const subtitle =
    lang === "ar"
      ? "جرّب فئة أخرى — في انتظار مشاريع جديدة قريبًا!"
      : "Try another category — new work is on the way!";
  const tryLabel = lang === "ar" ? "جرّب:" : "Try:";

  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0.15 : 0.45, ease: "easeOut" }}
      className="col-span-full"
    >
      <div className="rounded-2xl border border-dashed border-border bg-card/50 p-10 md:p-14 text-center">
        <motion.div
          initial={reduced ? { scale: 1 } : { scale: 0.6, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="mx-auto h-16 w-16 grid place-items-center rounded-2xl bg-primary/10 text-primary mb-5"
        >
          <SearchX className="h-7 w-7" />
        </motion.div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{subtitle}</p>

        {suggestions.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {tryLabel}
            </span>
            {suggestions.map((s, i) => (
              <motion.button
                key={s.value}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduced ? 0 : 0.15 + i * 0.06 }}
                whileHover={reduced ? undefined : { y: -2 }}
                onClick={() => onPick(s.value)}
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-colors text-sm"
              >
                {s.label}
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {s.count}
                </span>
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
