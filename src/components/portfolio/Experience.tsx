import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { t } = useI18n();
  const items = [
    {
      title: t("exp.role1.title"),
      company: t("exp.role1.company"),
      period: t("exp.role1.period"),
      body: t("exp.role1.body"),
    },
    {
      title: t("exp.role2.title"),
      company: t("exp.role2.company"),
      period: t("exp.role2.period"),
      body: t("exp.role2.body"),
    },
    {
      title: t("exp.role3.title"),
      company: t("exp.role3.company"),
      period: t("exp.role3.period"),
      body: t("exp.role3.body"),
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            {t("exp.kicker")}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{t("exp.title")}</h2>
        </div>

        <div className="relative ps-8">
          {/* Timeline line */}
          <div className="absolute start-2.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative"
              >
                <span className="absolute -start-[26px] top-1.5 grid h-5 w-5 place-items-center rounded-full bg-background border-2 border-primary">
                  <Briefcase className="h-2.5 w-2.5 text-primary" />
                </span>
                <div className="rounded-2xl border border-border bg-card p-5 hover:shadow-[var(--shadow-soft)] transition-shadow">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-sm text-primary mt-0.5">{item.company}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
