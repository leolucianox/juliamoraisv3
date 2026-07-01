"use client";

import { motion } from "framer-motion";
import { PHOTOS } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const grid = [PHOTOS.wristFine1, PHOTOS.session2, PHOTOS.handFine, PHOTOS.session3, PHOTOS.wristFine2, PHOTOS.artistAtWork];

function WorksGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        padding: 16,
        height: "100%",
        backgroundColor: "#0d0d14",
        boxSizing: "border-box",
      }}
    >
      {grid.map((img, i) => (
        <div key={i} style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
          <img src={img} alt="Trabalho de tatuagem" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      ))}
    </div>
  );
}

export default function TrHero() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      <motion.div
        className="w-full lg:w-[42%] flex flex-col rounded-[32px] px-7 py-8 lg:px-10 lg:py-10 min-h-[360px] lg:min-h-0"
        style={{ backgroundColor: "#f7f5f2" }}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="mt-auto pb-2">
          <motion.h1
            variants={fadeUp}
            className="leading-[0.98] mb-5 mt-8 lg:mt-0"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 3.4vw, 62px)", fontWeight: 800, overflowWrap: "break-word", wordBreak: "break-word" }}
          >
            Trabalho autoral, um traço de cada vez
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-black/60 leading-relaxed"
            style={{ fontSize: "clamp(14px, 1vw, 17px)", maxWidth: "420px" }}
          >
            Uma seleção de tatuagens fine line, delicadas e autorais feitas nos últimos anos. Cada peça nasceu de uma conversa e de uma referência única.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 rounded-[32px] overflow-hidden min-h-[300px] lg:min-h-0"
        style={{ backgroundColor: "#0d0d14" }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <WorksGrid />
      </motion.div>
    </section>
  );
}
