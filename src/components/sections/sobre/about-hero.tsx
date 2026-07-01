"use client";

import { motion } from "framer-motion";
import { PHOTOS_LARGE } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function AboutHero() {
  return (
    <section
      className="w-full flex flex-col rounded-[32px] p-3 lg:h-[calc(100vh-80px)]"
      style={{ scrollSnapAlign: "start", backgroundColor: "#f7f5f2" }}
    >
      <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0">
        <motion.div
          className="relative rounded-[24px] overflow-hidden min-h-[280px] lg:min-h-0"
          style={{ flex: "65 1 0%" }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: EASE }}
        >
          <img
            src={PHOTOS_LARGE.artistAtWork}
            alt="Julia Morais tatuando"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)" }} />
          <div className="absolute bottom-6 left-6">
            <span className="text-white/60 text-[13px] font-medium uppercase tracking-widest">São Paulo, Brasil</span>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[24px] flex flex-col justify-between p-8"
          style={{ flex: "35 1 0%", backgroundColor: "#2255cc" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
        >
          <div />
          <div>
            <h1
              className="font-extrabold leading-[0.96] mb-4"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.8vw, 50px)", color: "#fff" }}
            >
              Um traço construído com curiosidade, técnica e cuidado.
            </h1>
            <p className="leading-relaxed" style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: 340, color: "rgba(255,255,255,0.65)" }}>
              27 anos, 8 tatuando. Acredito que uma boa tatuagem começa muito antes da agulha tocar a pele — começa em ouvir a sua história.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
