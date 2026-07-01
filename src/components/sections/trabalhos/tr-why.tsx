"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionBanner from "@/components/section-banner";
import { PHOTOS } from "@/lib/images";

const cols = [
  {
    n: 1,
    title: "Cuidado em cada detalhe",
    bg: "#f0c419",
    textColor: "#000",
    itemColor: "rgba(0,0,0,0.75)",
    borderColor: "rgba(0,0,0,0.12)",
    items: [
      "Consulta prévia antes de qualquer sessão.",
      "Material 100% descartável e esterilizado.",
      "Ambiente higienizado e climatizado.",
      "Orientação completa de cicatrização.",
      "Retoque incluso quando necessário.",
    ],
    photoLabel: "Higiene.",
    photoImg: PHOTOS.session1,
  },
  {
    n: 2,
    title: "Processo transparente",
    bg: "#e63329",
    textColor: "#fff",
    itemColor: "rgba(255,255,255,0.85)",
    borderColor: "rgba(255,255,255,0.2)",
    items: [
      "Orçamento claro antes de agendar",
      "Desenho enviado para aprovação prévia",
      "Sem letra miúda, sem surpresa no valor",
      "Prazos combinados com antecedência",
      "Suporte direto pelo WhatsApp",
    ],
    photoLabel: "",
    photoImg: PHOTOS.handFine,
  },
  {
    n: 3,
    title: "Estilo autoral",
    bg: "#2255cc",
    textColor: "#fff",
    itemColor: "rgba(255,255,255,0.8)",
    borderColor: "rgba(255,255,255,0.15)",
    items: [
      "8 anos me aperfeiçoando em fine line",
      "Cada desenho é único, sem réplicas",
      "Referências viram peças pessoais",
      "Sensibilidade para temas delicados",
      "Resultado que você vai amar usar",
    ],
    photoLabel: "julia.",
    photoImg: PHOTOS.artistAtWork,
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function TrWhy() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="w-full flex flex-col gap-3 lg:h-[calc(100vh-24px)]" style={{ scrollSnapAlign: "start" }}>
      <SectionBanner title="Por que tatuar com a Julia." />

      <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0">
        {cols.map((c, i) => {
          const isOpen = hovered === i;
          return (
            <div
              key={c.n}
              className="flex-1 flex flex-col gap-3 lg:h-full min-h-0"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <motion.div
                className="rounded-[28px] px-6 pt-6 pb-4 overflow-hidden"
                style={{ backgroundColor: c.bg, flexBasis: isMobile ? "auto" : 0, flexShrink: isMobile ? 0 : 1 }}
                animate={isMobile ? undefined : { flexGrow: isOpen ? 3.6 : 1 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <div className="flex items-start mb-4">
                  <h3 className="leading-[1.05]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(19px, 1.4vw, 25px)", fontWeight: 800, color: c.textColor }}>
                    {c.title}
                  </h3>
                </div>

                <motion.ul
                  className="flex flex-col"
                  animate={{ opacity: isMobile || isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {c.items.map((item) => (
                    <li key={item} className="text-[12.5px] leading-snug py-2 border-b last:border-0" style={{ color: c.itemColor, borderColor: c.borderColor }}>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className="rounded-[28px] overflow-hidden relative min-h-[200px] lg:min-h-0"
                style={{ flexBasis: isMobile ? "auto" : 0, flexShrink: isMobile ? 0 : 1 }}
                animate={isMobile ? undefined : { flexGrow: isOpen ? 1 : 2.4 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <img
                  src={c.photoImg}
                  alt={c.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)" }} />
                {c.photoLabel && (
                  <span
                    className="absolute top-4 left-5 text-white/90"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22 }}
                  >
                    {c.photoLabel}
                  </span>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
