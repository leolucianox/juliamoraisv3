"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PHOTOS } from "@/lib/images";

const categories = [
  {
    key: "Fine Line",
    color: "#e63329",
    idx: "01",
    subtitle: "Traço único e contínuo",
    desc: "Meu estilo de assinatura: linhas finas, contínuas e precisas. Ideal para desenhos minimalistas que envelhecem bem e mantêm a nitidez com o tempo.",
    photo1: PHOTOS.wristFine1,
    photo2: PHOTOS.wristFine2,
    label1: "Fine Line", label2: "Detalhe",
  },
  {
    key: "Botânica",
    color: "#2255cc",
    idx: "02",
    subtitle: "Flores e elementos naturais",
    desc: "Composições inspiradas na natureza — flores silvestres, ramos e folhas — desenhadas com traço fino e delicado, sempre com um toque feminino.",
    photo1: PHOTOS.handFine,
    photo2: PHOTOS.session2,
    label1: "Botânica", label2: "Sessão",
  },
  {
    key: "Pontilhismo",
    color: "#1a1a1a",
    idx: "03",
    subtitle: "Textura suave, ponto a ponto",
    desc: "Sombreados e texturas criados com pontilhismo leve — uma técnica minuciosa que dá profundidade sem pesar no traço.",
    photo1: PHOTOS.session3,
    photo2: PHOTOS.machine,
    label1: "Pontilhismo", label2: "Técnica",
  },
  {
    key: "Autorais",
    color: "#f0c419",
    idx: "04",
    subtitle: "Desenho exclusivo pra você",
    desc: "Nada de réplicas. Cada peça autoral nasce de uma conversa sobre a sua história e vira um desenho único, feito sob medida.",
    photo1: PHOTOS.artistAtWork,
    photo2: PHOTOS.session1,
    label1: "Autoral", label2: "Processo",
  },
];

const includes = [
  "Consulta prévia",
  "Desenho exclusivo",
  "Material 100% descartável",
  "Ambiente higienizado",
  "Orientação de cuidados",
  "Sessão de retoque",
  "Referência + esboço",
  "Acompanhamento pós",
  "Agendamento fácil",
  "Atendimento humanizado",
  "Fotos do resultado",
  "Suporte no WhatsApp",
];

export default function TrStyles() {
  const [selected, setSelected] = useState(0);
  const cat = categories[selected];

  return (
    <section
      className="w-full rounded-[32px] p-3 flex flex-col overflow-hidden lg:h-[calc(100vh-24px)]"
      style={{ backgroundColor: "#f7f5f2", scrollSnapAlign: "start" }}
    >
      <div className="flex-shrink-0 px-1 pt-1 pb-2">
        <h2
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(17px, 1.6vw, 26px)", fontWeight: 800, color: "#000" }}
        >
          Meus estilos de tatuagem
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0 mb-3">
        {/* Selector panel */}
        <div className="w-full lg:w-[26%] flex-shrink-0 rounded-[24px] p-4 flex flex-col gap-2" style={{ backgroundColor: "#1a1a1a" }}>
          <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest px-1 mb-1">
            Escolha o estilo
          </p>

          {categories.map((c, i) => {
            const active = i === selected;
            return (
              <button
                key={c.key}
                onClick={() => setSelected(i)}
                className="flex items-center gap-3 rounded-[16px] px-4 py-3 text-left transition-all duration-200 box-border"
                style={{
                  backgroundColor: active ? "transparent" : "rgba(255,255,255,0.06)",
                  border: `2px solid ${active ? "#000" : "transparent"}`,
                }}
              >
                <span className="flex-1 min-w-0">
                  <span className="block text-[14px] font-bold text-white leading-tight">{c.key}</span>
                  <span className="block text-[12px]" style={{ color: active ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.35)" }}>
                    {c.subtitle}
                  </span>
                </span>
                {active && (
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.color }}>
                    <svg width="10" height="10" viewBox="0 0 11 11" fill="none">
                      <path d="M7.17418 1.66471L0.574525 1.66471L0.589256 0L10.0173 0L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L0 8.8389L7.17418 1.66471Z" fill="white" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}

          <div className="mt-auto pt-2 flex flex-col gap-2">
            <a
              href="/contato"
              className="w-full rounded-full py-3 font-bold text-[14px] text-center block"
              style={{ backgroundColor: "#e63329", color: "#fff" }}
            >
              Agendar horário
            </a>
            <p className="text-[11px] text-white/25 text-center">@juliamorais.tattoo</p>
          </div>
        </div>

        {/* Photos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.key}
            className="flex-1 flex gap-3 min-h-[240px] lg:min-h-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex-1 rounded-[24px] relative overflow-hidden">
              <img
                src={cat.photo1}
                alt={cat.label1}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <span className="absolute top-4 left-4 text-[12px] font-bold rounded-full px-3 py-1" style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.9)" }}>
                {cat.label1}
              </span>
            </div>
            <div className="flex-1 rounded-[24px] relative overflow-hidden">
              <img
                src={cat.photo2}
                alt={cat.label2}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <span className="absolute top-4 left-4 text-[12px] font-bold rounded-full px-3 py-1" style={{ backgroundColor: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.9)" }}>
                {cat.label2}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom description */}
      <div className="rounded-[24px] p-5 flex flex-col gap-4 flex-shrink-0" style={{ backgroundColor: "#fff" }}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.key}
              className="flex-1"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="rounded-full px-3 py-0.5 text-[11px] font-bold text-white" style={{ backgroundColor: cat.color }}>
                  {cat.key}
                </span>
                <span className="text-[13px] font-semibold" style={{ color: cat.color }}>{cat.subtitle}</span>
              </div>
              <h2 className="leading-[0.95] mb-2.5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 2.6vw, 40px)", fontWeight: 800 }}>
                {cat.key}
              </h2>
              <p className="text-[13px] text-black/55 leading-relaxed max-w-[520px]">{cat.desc}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-stretch gap-3 flex-shrink-0">
            <div className="rounded-[18px] px-4 py-4 flex flex-col justify-center max-w-[210px]" style={{ backgroundColor: "#1a1a1a" }}>
              <div className="flex items-center gap-1.5 mb-1">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.18)" />
                  <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] font-bold text-white">Feito sob medida</span>
              </div>
              <p className="text-[12px] text-white/60 leading-snug">
                Do desenho à sessão, sem réplicas nem pressa.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 pt-4 border-t border-black/8">
          {includes.map((d) => (
            <div key={d} className="flex items-center gap-2 text-[12.5px] font-medium text-black/70">
              <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: cat.color }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {d}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
