"use client";

import { useEffect, useRef } from "react";
import { PHOTOS } from "@/lib/images";

const NUM_COLS = 7;
const NUM_VISIBLE = 3;
const WRAPPER_HVH = (NUM_COLS - NUM_VISIBLE + 1) * 100;
const TRACK_WIDTH_PCT = (NUM_COLS / NUM_VISIBLE) * 100;
const COL_WIDTH_PCT = 100 / NUM_COLS;
const SHIFT_PCT = 100 * (NUM_COLS - NUM_VISIBLE) / NUM_COLS;

type ColDef =
  | { kind: "solid";     bg: string; tag: string; title: string; body: string; body2?: string }
  | { kind: "photo-top"; photo: string; card: string; tag: string; title: string; body: string }
  | { kind: "text-top";  photo: string; card: string; tag: string; title: string; body: string };

const COLS: ColDef[] = [
  {
    kind:  "solid",
    bg:    "#1a1a1a",
    tag:   "Minha jornada",
    title: "8 anos de fine line",
    body:  "Comecei a tatuar em 2018, em São Paulo. Desde o início, meu foco sempre foi traços finos, delicados e cheios de significado.",
    body2: "Uma conversa antes de cada agulhada.",
  },
  {
    kind:  "photo-top",
    photo: PHOTOS.wristFine1,
    card:  "#e63329",
    tag:   "Fine Line",
    title: "Traços que envelhecem bem.",
    body:  "Linhas finas e contínuas, pensadas para manter a nitidez com o passar dos anos.",
  },
  {
    kind:  "text-top",
    photo: PHOTOS.handFine,
    card:  "#2255cc",
    tag:   "Delicadas",
    title: "Pequenas, discretas, cheias de sentido.",
    body:  "Tatuagens minimalistas que dizem muito com pouco espaço na pele.",
  },
  {
    kind:  "photo-top",
    photo: PHOTOS.session3,
    card:  "#1a1a1a",
    tag:   "Pontilhismo",
    title: "Sombreados suaves, feitos ponto a ponto.",
    body:  "Técnica de pontilhismo leve para texturas e degradês delicados.",
  },
  {
    kind:  "text-top",
    photo: PHOTOS.session1,
    card:  "#f0c419",
    tag:   "Botânica",
    title: "Flores, folhas e natureza.",
    body:  "Meu tema favorito — composições botânicas com traço fino e feminino.",
  },
  {
    kind:  "solid",
    bg:    "#e63329",
    tag:   "Cuidado",
    title: "Sua segurança em primeiro lugar.",
    body:  "Uso só material descartável e sigo todos os protocolos de biossegurança em cada sessão.",
  },
  {
    kind:  "photo-top",
    photo: PHOTOS.artistAtWork,
    card:  "#2255cc",
    tag:   "Vamos conversar?",
    title: "Toda ideia merece virar tatuagem.",
    body:  "Estou sempre aberta a novas histórias e referências. Me chama no WhatsApp.",
  },
];

const badge = (light?: boolean): React.CSSProperties => ({
  display: "inline-block",
  backgroundColor: light ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.18)",
  color: light ? "#000" : "#fff",
  borderRadius: 999,
  padding: "4px 12px",
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 14,
  alignSelf: "flex-start" as const,
});

const textCard = (bg: string): React.CSSProperties => ({
  flex: 1,
  borderRadius: 24,
  backgroundColor: bg,
  padding: "18px 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: `2px solid ${bg}`,
});

const photoCard = (photo: string, borderColor?: string): React.CSSProperties => ({
  flex: 4,
  borderRadius: 24,
  overflow: "hidden",
  position: "relative",
  backgroundImage: `url('${photo}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  ...(borderColor ? { border: `2px solid ${borderColor}` } : {}),
});

function AboutJourneyMobile() {
  return (
    <div className="flex flex-col gap-3 lg:hidden" style={{ marginTop: 12 }}>
      {COLS.map((col, i) => {
        if (col.kind === "solid") {
          return (
            <div key={i} style={{ borderRadius: 24, backgroundColor: col.bg, border: `2px solid ${col.bg}`, padding: 28, minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={badge()}>{col.tag}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 7vw, 40px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>{col.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.6 }}>{col.body}</p>
              {col.body2 && <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>{col.body2}</p>}
            </div>
          );
        }

        const isDark = col.card === "#1a1a1a";
        const textColor = isDark ? "#fff" : "#000";
        const textMuted = isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.62)";

        const textBlock = (
          <div style={textCard(col.card)}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 800, color: textColor, lineHeight: 1.15, marginBottom: 5 }}>
              {col.kind === "text-top" ? col.tag : col.title}
            </h3>
            <p style={{ fontSize: 14, color: textMuted, lineHeight: 1.5 }}>{col.body}</p>
          </div>
        );

        const photoBlock = (
          <div style={{ ...photoCard(col.photo, col.card), minHeight: 200 }}>
            {col.kind === "photo-top" && <span style={{ ...badge(true), position: "absolute", top: 14, left: 14 }}>{col.tag}</span>}
          </div>
        );

        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {col.kind === "photo-top" ? <>{photoBlock}{textBlock}</> : <>{textBlock}{photoBlock}</>}
          </div>
        );
      })}
    </div>
  );
}

export default function AboutJourney() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;
      const rect = wrapper.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const p = rect.top < 0 ? Math.min(1, -rect.top / scrollable) : 0;
      track.style.transform = `translateX(-${p * SHIFT_PCT}%)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AboutJourneyMobile />
      <div ref={wrapperRef} className="hidden lg:block" style={{ height: `${WRAPPER_HVH}vh`, position: "relative", scrollSnapAlign: "start", marginTop: "12px" }}>
        <div style={{ position: "sticky", top: 12, height: "calc(100vh - 24px)", overflow: "hidden", display: "flex", flexDirection: "column", borderRadius: 32, backgroundColor: "#f7f5f2" }}>
          <div ref={trackRef} style={{ display: "flex", width: `${TRACK_WIDTH_PCT}%`, flex: "1 1 0", willChange: "transform" }}>
            {COLS.map((col, i) => {
              const isFirst = i === 0;
              const isLast = i === COLS.length - 1;
              const pad: React.CSSProperties = { width: `${COL_WIDTH_PCT}%`, flexShrink: 0, padding: `0 ${isLast ? 10 : 5}px 0 ${isFirst ? 10 : 5}px` };

              if (col.kind === "solid") {
                return (
                  <div key={i} style={pad}>
                    <div style={{ height: "100%", borderRadius: 24, backgroundColor: col.bg, border: `2px solid ${col.bg}`, padding: 32, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                      <span style={badge()}>{col.tag}</span>
                      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.2vw, 42px)", fontWeight: 800, color: "#fff", lineHeight: 1.05, marginBottom: 12 }}>{col.title}</h2>
                      <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.6 }}>{col.body}</p>
                      {col.body2 && <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>{col.body2}</p>}
                    </div>
                  </div>
                );
              }

              if (col.kind === "photo-top") {
                const isDark = col.card === "#1a1a1a";
                return (
                  <div key={i} style={pad}>
                    <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={photoCard(col.photo, col.card)}>
                        <span style={{ ...badge(true), position: "absolute", top: 14, left: 14 }}>{col.tag}</span>
                      </div>
                      <div style={textCard(col.card)}>
                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 1.1vw, 19px)", fontWeight: 800, color: isDark ? "#fff" : "#000", lineHeight: 1.15, marginBottom: 5 }}>{col.title}</h3>
                        <p style={{ fontSize: 14, color: isDark ? "rgba(255,255,255,0.62)" : "rgba(0,0,0,0.62)", lineHeight: 1.5 }}>{col.body}</p>
                      </div>
                    </div>
                  </div>
                );
              }

              const isDark = col.card === "#1a1a1a";
              return (
                <div key={i} style={pad}>
                  <div style={{ height: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={textCard(col.card)}>
                      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px, 1.1vw, 19px)", fontWeight: 800, color: isDark ? "#fff" : "#000", lineHeight: 1.15, marginBottom: 5 }}>{col.tag}</h3>
                      <p style={{ fontSize: 14, color: isDark ? "rgba(255,255,255,0.62)" : "rgba(0,0,0,0.62)", lineHeight: 1.5 }}>{col.body}</p>
                    </div>
                    <div style={{ ...photoCard(col.photo, col.card), position: "relative" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
