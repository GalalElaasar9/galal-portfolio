import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import avatar from "@/assets/galal-avatar.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Galal Mohamed</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Front-End Developer crafting fast, elegant interfaces with{" "}
            <span className="text-foreground font-medium">React</span> &{" "}
            <span className="text-foreground font-medium">Next.js</span>.
          </p>
          <p className="mt-3 text-muted-foreground max-w-lg">
            I build modern, accessible web experiences focused on performance, motion, and pixel-perfect design.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:translate-y-[-2px] transition-transform"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/60 hover:text-primary transition-colors font-medium"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative animate-float">
            {/* Spinning gradient ring */}
            <div
              className="absolute -inset-4 rounded-full opacity-70 animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--primary), var(--primary-glow), transparent, var(--primary))",
                filter: "blur(16px)",
              }}
            />
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full p-[3px] bg-[var(--gradient-primary)] animate-glow-pulse">
              <div className="h-full w-full rounded-full overflow-hidden bg-background">
                <img
                  src={avatar}
                  alt="Galal Mohamed - Front-End Developer"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
