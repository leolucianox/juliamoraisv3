"use client";

import { motion } from "framer-motion";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/contact";

const styles = ["Autoral", "Fine Line", "Minimalista", "Pontilhismo", "Delicadas", "Botânica"];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden rounded-[32px]" style={{ backgroundColor: "#f7f5f2" }}>

      {/* Manifesto quote */}
      <motion.div
        className="px-6 sm:px-10 pt-12 pb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(14px, 1.5vw, 22px)",
            lineHeight: 1.3,
            color: "#000",
          }}
        >
          &ldquo;Tatuagem boa é a que carrega uma história — e que envelhece bem com quem a carrega.&rdquo;
        </p>
        <div className="grid gap-1.5 mt-6 sm:flex sm:flex-wrap sm:justify-start sm:gap-2" style={{ gridTemplateColumns: "repeat(3, max-content)", justifyContent: "space-between" }}>
          {styles.map((d) => (
            <span
              key={d}
              className="rounded-full px-3 py-1.5 text-[12px] font-semibold text-center sm:px-4 sm:text-[13px]"
              style={{ backgroundColor: "#e8e6e3", color: "#000" }}
            >
              {d}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Wordmark */}
      <div className="px-6 sm:px-10 pt-4 pb-2 border-t border-black/8 text-left" style={{ containerType: "inline-size" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "max(40px, 15cqw)",
              letterSpacing: "-0.018em",
              lineHeight: 0.9,
              color: "#000",
            }}
          >
            JULIA MORAIS
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-6 sm:px-10 py-5 border-t border-black/10">
        <div>
          <span className="text-[14px] text-black/40">© 2026 Julia Morais Tattoo</span>
          <p className="text-[13px] text-black/25 mt-0.5">São Paulo, SP · {WHATSAPP_DISPLAY}</p>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <a href="/trabalhos" className="text-[14px] text-black/40 hover:text-black transition-colors">Trabalhos</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] text-black/40 hover:text-black transition-colors">{INSTAGRAM_HANDLE}</a>
          <a href={`mailto:${EMAIL}`} className="text-[14px] text-black/40 hover:text-black transition-colors">{EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
