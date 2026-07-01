"use client";

import { motion } from "framer-motion";
import { PHOTOS_LARGE } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stats = [
  { n: "500+", t: "tatuagens realizadas" },
  { n: "8", t: "anos de experiência" },
  { n: "100%", t: "material descartável" },
  { n: "5.0", t: "avaliação das clientes" },
];

function MarkGrid() {
  return (
    <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(4, 1fr)", gap: 8, padding: 8 }}>
      {Array.from({ length: 12 }).map((_, i) => {
        const colors = ["#e63329", "#2255cc", "#f0c419", "#1a1a1a"];
        const bg = i % 5 === 0 ? colors[Math.floor(i / 5) % 4] : "rgba(0,0,0,0.06)";
        return (
          <div key={i} className="rounded-[12px] flex items-center justify-center" style={{ backgroundColor: bg }}>
            {i % 5 === 0 && (
              <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
                <g fill="white">
                  <circle cx="6" cy="2.4" r="2" />
                  <circle cx="6" cy="9.6" r="2" />
                  <circle cx="2.4" cy="6" r="2" />
                  <circle cx="9.6" cy="6" r="2" />
                  <circle cx="6" cy="6" r="1.6" />
                </g>
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function TrStats() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      {/* Left: stats card */}
      <motion.div
        className="w-full lg:w-[60%] flex flex-col rounded-[32px] px-7 py-8 lg:px-10 lg:py-9"
        style={{ backgroundColor: "#f0c419" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div variants={fadeUp} className="flex items-center justify-between gap-4 mb-7">
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-bold flex-shrink-0" style={{ backgroundColor: "#f7f5f2" }}>
            Números
          </span>
          <div className="text-right text-[13px] text-black/70 leading-snug">
            <p className="font-bold text-black">São Paulo, SP</p>
            <p>@juliamorais.tattoo</p>
            <p>+55 11 91234-5678</p>
          </div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="leading-[0.98] mb-4"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 3.6vw, 56px)", fontWeight: 800 }}
        >
          Números que<br />também contam histórias
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-black/70 leading-relaxed mb-8"
          style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: "560px" }}
        >
          Cada tatuagem é feita sob medida — sem réplicas, sem pressa. Prefiro fazer menos e fazer bem, com atenção total a cada detalhe do seu desenho.
        </motion.p>

        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto">
          {stats.map((s) => (
            <div key={s.n} className="flex items-center gap-3 rounded-[18px] px-4 py-3" style={{ backgroundColor: "#1a1a1a" }}>
              <span className="text-[26px] font-extrabold leading-none text-white flex-shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                {s.n}
              </span>
              <span className="text-[14px] leading-tight text-white/70">{s.t}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: mark grid + ambient photo */}
      <motion.div
        className="flex-1 flex flex-col gap-3"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-[32px] overflow-hidden relative min-h-[260px] lg:min-h-0" style={{ flex: "0.82 1 0", backgroundColor: "#f7f5f2" }}>
          <MarkGrid />
        </div>

        <div
          className="rounded-[32px] overflow-hidden relative flex items-end p-6 min-h-[220px] lg:min-h-0"
          style={{ flex: "1 1 0" }}
        >
          <img
            src={PHOTOS_LARGE.session4}
            alt="Julia Morais tatuando"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)" }} />
          <div className="absolute rounded-xl border border-white/20" style={{ width: 110, height: 120, right: 28, bottom: 24, background: "rgba(230,51,41,0.18)" }} />
          <span className="relative text-white/90 text-[15px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
            julia morais.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
