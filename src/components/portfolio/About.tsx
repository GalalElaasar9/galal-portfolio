import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();
  const stats = [
    { label: t("about.stat.years"), value: "3+" },
    { label: t("about.stat.projects"), value: "20+" },
    { label: t("about.stat.clients"), value: "15+" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-sm font-medium text-primary tracking-widest uppercase"
        >
          {t("about.kicker")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl md:text-4xl font-bold tracking-tight"
        >
          {t("about.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-lg text-muted-foreground leading-relaxed"
        >
          {t("about.body")}
        </motion.p>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
