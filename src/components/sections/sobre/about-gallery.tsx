"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PHOTOS } from "@/lib/images";

const GAP = 12;

const spaces = [
  { label: "No trabalho", img: PHOTOS.artistAtWork },
  { label: "Sessão", img: PHOTOS.session1 },
  { label: "Detalhe", img: PHOTOS.machine },
  { label: "Atendimento", img: PHOTOS.session2 },
  { label: "Concentração", img: PHOTOS.session3 },
  { label: "Resultado", img: PHOTOS.session4 },
];

const VISIBLE_DESKTOP = 2;
const VISIBLE_MOBILE = 1;

function NavButton({ dir, onClick, disabled }: { dir: "prev" | "next"; onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir}
      className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity"
      style={{ backgroundColor: "rgba(255,255,255,0.15)", opacity: disabled ? 0.3 : 1 }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: dir === "next" ? "none" : "scaleX(-1)" }}>
        <path d="M5.5 3L10.5 8L5.5 13" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function AboutGallery() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVw(el.clientWidth));
    ro.observe(el);
    setVw(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const visibleCount = vw > 640 ? VISIBLE_DESKTOP : VISIBLE_MOBILE;
  const maxIndex = spaces.length - visibleCount;
  const clampedIndex = Math.min(index, maxIndex);
  const slideW = vw > 0 ? (vw - GAP * (visibleCount - 1)) / visibleCount : 0;
  const step = slideW + GAP;

  return (
    <section
      className="w-full rounded-[32px] p-3 flex flex-col lg:flex-row gap-3 lg:items-stretch"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <motion.div
        className="w-full lg:w-[30%] flex flex-col justify-between gap-3 lg:gap-6 p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <h2 className="text-white leading-[0.98] mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.6vw, 42px)", fontWeight: 800 }}>
            Bastidores<br />do estúdio
          </h2>
          <p className="text-white/65 leading-relaxed mb-6" style={{ fontSize: "clamp(15px, 1vw, 17px)", maxWidth: 320 }}>
            Um pouco do dia a dia: a concentração de cada traço, o cuidado com o material e o resultado na pele.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <NavButton dir="prev" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={clampedIndex === 0} />
          <NavButton dir="next" onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))} disabled={clampedIndex === maxIndex} />
        </div>
      </motion.div>

      <div ref={viewportRef} className="flex-1 overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: -clampedIndex * step }}
          transition={{ type: "spring", stiffness: 260, damping: 34 }}
        >
          {spaces.map((s, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-[24px] overflow-hidden"
              style={{ width: slideW || "calc(50% - 6px)", aspectRatio: "1 / 1", marginRight: GAP }}
            >
              <img
                src={s.img}
                alt={s.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
              <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[13px] font-bold" style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#000" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
