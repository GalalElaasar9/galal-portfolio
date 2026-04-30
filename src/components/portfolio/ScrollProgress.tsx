import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 inset-x-0 h-0.5 z-[60] origin-left"
    >
      <div
        className="h-full w-full"
        style={{ background: "var(--gradient-primary)" }}
      />
    </motion.div>
  );
}
