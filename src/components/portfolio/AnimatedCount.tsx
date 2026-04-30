import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function AnimatedCount({ value }: { value: number }) {
  const reduced = usePrefersReducedMotion();
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (reduced) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [value, mv, reduced]);

  if (reduced) {
    return <span className="inline-block tabular-nums">{value}</span>;
  }

  return (
    <motion.span
      key={value}
      initial={{ scale: 0.6, opacity: 0.4 }}
      animate={{ scale: [0.6, 1.2, 1], opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="inline-block tabular-nums"
    >
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
}
