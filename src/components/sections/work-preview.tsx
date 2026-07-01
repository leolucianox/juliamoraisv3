"use client";

import { useEffect, useRef } from "react";
import { PHOTOS } from "@/lib/images";

const NUM_SLIDES = 2;

const fineLineItems = ["Traço único e contínuo", "Pontilhismo leve", "Composições pequenas", "Tatuagens autorais"];
const botanicalItems = ["Flores silvestres", "Ramos & folhas", "Composições femininas", "Traço fino botânico"];
const geoItems = ["Formas geométricas", "Linhas retas & simetria", "Composições autorais", "Blackwork fino"];
const custItems = ["Desenho exclusivo", "Consulta prévia", "Referência + toque pessoal", "Peça única para você"];

function ArrowSmall({ color = "black", opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <svg width="10" height="10" viewBox="0 0 11 11" fill="none" className="flex-shrink-0">
      <path
        d="M7.17418 1.66471L0.574525 1.66471L0.589256 0L10.0173 0L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L0 8.8389L7.17418 1.66471Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}

function InfoList({ items, textColor = "#000", borderColor = "rgba(0,0,0,0.12)" }: { items: string[]; textColor?: string; borderColor?: string }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-center justify-between text-[14px] font-semibold pb-2 last:border-0" style={{ color: textColor, borderBottom: `1px solid ${borderColor}` }}>
          {item}
          <ArrowSmall color={textColor} opacity={0.4} />
        </li>
      ))}
    </ul>
  );
}

function WorkPreviewMobile() {
  return (
    <section className="flex flex-col gap-3 rounded-[32px] p-4" style={{ backgroundColor: "#f7f5f2" }}>
      <div className="rounded-[28px] p-6 flex flex-col gap-4" style={{ backgroundColor: "#e63329" }}>
        <h2 className="leading-tight text-white font-extrabold" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 36px)" }}>
          Alguns dos<br />meus trabalhos.
        </h2>
        <p className="text-white/70 text-[14px] leading-relaxed">
          Fine line, delicadas e sempre autorais. Cada peça nasce de uma conversa com você.
        </p>
        <ul className="flex flex-col gap-2">
          {fineLineItems.map((item) => (
            <li key={item} className="text-[14px] font-semibold text-white border-b border-white/20 pb-2 last:border-0">{item}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[28px] overflow-hidden relative min-h-[160px]">
          <img src={PHOTOS.wristFine1} alt="Fine line" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="rounded-[28px] overflow-hidden relative min-h-[160px]">
          <img src={PHOTOS.session2} alt="Sessão de tatuagem" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <a href="/trabalhos" className="rounded-full py-3 text-center font-bold text-[14px]" style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>
        Ver todos os trabalhos
      </a>
    </section>
  );
}

export default function WorkPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const slides = slidesRef.current;
      if (!section || !slides) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      let p = 0;
      if (rect.top < 0) p = Math.min(1, -rect.top / scrollable);
      slides.style.transform = `translateX(-${p * (100 / NUM_SLIDES)}%)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="block lg:hidden">
        <WorkPreviewMobile />
      </div>
      <section
        ref={sectionRef}
        aria-label="Alguns dos meus trabalhos"
        className="hidden lg:block"
        style={{ height: `${NUM_SLIDES * 100}vh`, position: "relative" }}
      >
        <div style={{ position: "sticky", top: 12, height: "calc(100vh - 24px)", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: "32px", backgroundColor: "#f7f5f2" }}>
          <div
            ref={slidesRef}
            style={{ display: "flex", width: `${NUM_SLIDES * 100}%`, flex: "1 1 0", willChange: "transform" }}
          >
            {/* ——— Slide 1: Fine Line + Botânica ——— */}
            <div style={{ width: `${100 / NUM_SLIDES}%`, flexShrink: 0, paddingRight: 6 }}>
              <div className="h-full grid grid-cols-4 gap-3" style={{ gridTemplateRows: "1fr 1fr" }}>

                <div className="col-span-1 row-span-2 rounded-[28px] p-7 flex flex-col justify-between" style={{ backgroundColor: "#e63329" }}>
                  <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="4" y="4" width="40" height="40" rx="8" fill="rgba(255,255,255,0.15)" />
                      <rect x="12" y="14" width="24" height="4" rx="2" fill="#fff" />
                      <rect x="12" y="22" width="16" height="4" rx="2" fill="#fff" opacity="0.7" />
                      <rect x="12" y="30" width="20" height="4" rx="2" fill="#fff" opacity="0.4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="leading-[0.98] mb-4 text-white" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.2vw, 40px)", fontWeight: 800 }}>
                      Fine Line &<br />Delicadas
                    </h2>
                    <InfoList items={fineLineItems} textColor="rgba(255,255,255,0.9)" borderColor="rgba(255,255,255,0.18)" />
                  </div>
                </div>

                <div
                  className="col-span-2 row-span-1 rounded-[28px] overflow-hidden"
                  style={{ backgroundImage: `url('${PHOTOS.wristFine1}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />

                <div className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col" style={{ backgroundColor: "#2255cc" }}>
                  <h3 className="text-[20px] font-bold mb-5 text-white" style={{ fontFamily: "var(--font-display)" }}>
                    Floral & Botânica
                  </h3>
                  <ul className="flex flex-col gap-3 mt-auto">
                    {botanicalItems.map((item) => (
                      <li key={item} className="flex items-center justify-between text-[14px] font-semibold text-white border-b border-white/15 pb-3 last:border-0 last:pb-0">
                        {item}
                        <ArrowSmall color="#fff" opacity={0.4} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="col-span-1 row-span-1 rounded-[28px] overflow-hidden"
                  style={{ backgroundImage: `url('${PHOTOS.session2}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />

                <div className="col-span-1 row-span-1 rounded-[28px] flex items-center justify-center" style={{ backgroundColor: "#f0c419" }}>
                  <div className="flex flex-col items-center justify-center text-center px-2">
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "#1a1a1a", lineHeight: 1 }}>8</span>
                    <span className="text-[12px] font-bold text-black/60 mt-1">anos tatuando</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ——— Slide 2: Geométrica + Autorais ——— */}
            <div style={{ width: `${100 / NUM_SLIDES}%`, flexShrink: 0, paddingLeft: 6 }}>
              <div className="h-full grid grid-cols-4 gap-3" style={{ gridTemplateRows: "1fr 1fr" }}>

                <div className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col justify-start" style={{ backgroundColor: "#1a1a1a" }}>
                  <h3 className="text-[22px] font-bold mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>Geométrica & Linear</h3>
                  <InfoList items={geoItems} textColor="rgba(255,255,255,0.85)" borderColor="rgba(255,255,255,0.1)" />
                </div>

                <div
                  className="col-span-2 row-span-1 rounded-[28px] overflow-hidden"
                  style={{ backgroundImage: `url('${PHOTOS.session3}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />

                <div className="col-span-1 row-span-2 rounded-[28px] p-6 flex flex-col justify-start" style={{ backgroundColor: "#f0c419" }}>
                  <h3 className="text-[22px] font-bold mb-4 text-black" style={{ fontFamily: "var(--font-display)" }}>Autorais</h3>
                  <InfoList items={custItems} textColor="#000" borderColor="rgba(0,0,0,0.15)" />
                </div>

                <div
                  className="col-span-1 row-span-1 rounded-[28px] overflow-hidden"
                  style={{ backgroundImage: `url('${PHOTOS.machine}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />

                <div
                  className="col-span-1 row-span-1 rounded-[28px] overflow-hidden"
                  style={{ backgroundImage: `url('${PHOTOS.artistAtWork}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
