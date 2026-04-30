import { motion } from "framer-motion";
import { Code2, Gauge, Layers, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  const services = [
    { icon: Code2, title: t("svc.web.title"), body: t("svc.web.body") },
    { icon: Layers, title: t("svc.ui.title"), body: t("svc.ui.body") },
    { icon: Sparkles, title: t("svc.motion.title"), body: t("svc.motion.body") },
    { icon: Gauge, title: t("svc.perf.title"), body: t("svc.perf.body") },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            {t("svc.kicker")}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{t("svc.title")}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-border bg-card p-6 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div
                aria-hidden
                className="absolute -top-16 -end-16 h-36 w-36 rounded-full opacity-0 group-hover:opacity-60 transition-opacity blur-3xl pointer-events-none"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div className="relative">
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
