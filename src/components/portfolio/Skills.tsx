import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 82 },
  { name: "Node.js", level: 75 },
];

const tools = ["JavaScript", "HTML5", "CSS3", "Git", "Figma", "Vite", "Redux", "REST", "GraphQL"];

export function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">
            {t("skills.kicker")}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            {t("skills.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="px-3.5 py-1.5 rounded-full border border-border bg-card text-sm hover:border-primary/60 hover:text-primary transition-colors cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
