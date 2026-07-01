"use client";

import { motion } from "framer-motion";
import { PHOTOS_LARGE } from "@/lib/images";
import { whatsappLink } from "@/lib/contact";

const words = ["Fine", "line", "que", "conta", "histórias."];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-[32px]" style={{ height: "calc(100vh - 24px)", scrollSnapAlign: "start" }}>
      <img
        src={PHOTOS_LARGE.wristFine1}
        alt="Tatuagem fine line delicada — Julia Morais"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(13,13,20,0.55) 0%, rgba(13,13,20,0.72) 55%, rgba(13,13,20,0.6) 100%)" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <span
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-bold mb-6"
          style={{ backgroundColor: "rgba(247,245,242,0.14)", color: "#f7f5f2", border: "1px solid rgba(247,245,242,0.25)" }}
        >
          Julia Morais · Tatuadora em São Paulo
        </span>

        <h1
          className="text-white leading-[1.0] mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(46px, 6vw, 92px)",
            fontWeight: 800,
            maxWidth: "860px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.22em",
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-white/80 text-center mb-8"
          style={{ fontSize: "clamp(16px, 1.2vw, 20px)", maxWidth: "460px", lineHeight: 1.55 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          8 anos tatuando traços delicados, minimalistas e autorais. Cada tatuagem começa numa conversa e termina numa peça única.
        </motion.p>

        <motion.a
          href={whatsappLink("Oi Julia, quero agendar uma tatuagem!")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-black font-bold text-[14px]"
          style={{ backgroundColor: "#f7f5f2" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Agendar no WhatsApp
          <svg width="12" height="12" viewBox="0 0 11 11" fill="none">
            <path d="M7.17418 1.66471L0.574525 1.66471L0.589256 6.74452e-05L10.0173 6.90346e-05L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L3.1533e-06 8.8389L7.17418 1.66471Z" fill="black" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
