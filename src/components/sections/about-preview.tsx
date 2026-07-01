"use client";

import { motion } from "framer-motion";
import { PHOTOS } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const tiles = [
  { img: PHOTOS.wristFine1, label: "Fine Line" },
  { img: PHOTOS.session2, label: "Autoral" },
  { img: PHOTOS.handFine, label: "Delicada" },
  { img: PHOTOS.session3, label: "Minimalista" },
];

export default function AboutPreview() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-[32px] flex flex-col lg:flex-row lg:h-[calc(100vh-24px)]"
      style={{ backgroundColor: "#f0c419", scrollSnapAlign: "start" }}
    >
      <motion.div
        className="flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-16 w-full lg:w-[44%]"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-bold" style={{ backgroundColor: "#f7f5f2" }}>
            Sobre mim
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="leading-[0.96] mb-6"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 4.4vw, 62px)", fontWeight: 800 }}
        >
          Oi, eu sou a Julia.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-black/70 mb-10 leading-relaxed"
          style={{ fontSize: "clamp(16px, 1.1vw, 19px)", maxWidth: "400px" }}
        >
          Tenho 27 anos, moro em São Paulo e tatuo há 8. Sou especializada em fine line e tatuagens delicadas — traços finos, minimalistas e cheios de significado, feitos com muita técnica e carinho.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <a
            href="/sobre"
            className="flex-1 rounded-full px-4 py-2.5 text-[14px] font-bold text-center"
            style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
          >
            Minha história
          </a>
          <a
            href="/trabalhos"
            className="flex-1 rounded-full px-4 py-2.5 text-[14px] font-bold border-2 border-black text-center"
            style={{ backgroundColor: "transparent" }}
          >
            Ver trabalhos
          </a>
        </motion.div>
      </motion.div>

      <div className="flex-1 relative overflow-hidden m-3 rounded-[24px] min-h-[300px] lg:min-h-0" style={{ backgroundColor: "#e8b800" }}>
        <div className="absolute inset-0 grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 6, padding: 6 }}>
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              className="rounded-[16px] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={t.img} alt={t.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)" }} />
              <span
                className="absolute bottom-3 left-3 text-[12px] font-bold rounded-full px-2.5 py-1"
                style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "#000" }}
              >
                {t.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
