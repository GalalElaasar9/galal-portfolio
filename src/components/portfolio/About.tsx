import { motion } from "framer-motion";

const stats = [
  { label: "Years coding", value: "3+" },
  { label: "Projects shipped", value: "20+" },
  { label: "Happy clients", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-sm font-medium text-primary tracking-widest uppercase"
        >
          About Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-3 text-3xl md:text-4xl font-bold tracking-tight"
        >
          Building the web, one component at a time.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-lg text-muted-foreground leading-relaxed"
        >
          I'm a Front-End Developer specializing in the React ecosystem. I started my journey
          captivated by the way thoughtful UI can turn complex products into delightful
          experiences. Today I focus on shipping high-performance interfaces with React,
          Next.js, and TypeScript — backed by clean architecture, accessibility, and motion
          that feels natural.
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
