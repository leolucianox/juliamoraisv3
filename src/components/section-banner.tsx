"use client";

import { motion } from "framer-motion";

interface SectionBannerProps {
  title: string;
  bg?: string;
  color?: string;
}

export default function SectionBanner({ title, bg = "#e63329", color = "#fff" }: SectionBannerProps) {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center rounded-full py-4"
      style={{ backgroundColor: bg }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="font-extrabold tracking-tight"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 1.6vw, 26px)", color }}
      >
        {title}
      </span>
    </motion.div>
  );
}
