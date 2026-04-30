import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedCount({ value }: { value: number }) {
  const mv = useMotionValue(value);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [value, mv]);

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
