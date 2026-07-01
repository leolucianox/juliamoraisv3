import ContactForm from "@/components/sections/contact/contact-form";
import Footer from "@/components/sections/footer";
import { EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/contact";

const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.14-4.89-4.33-.14-.2-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.2.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/>
  </svg>
);

const JMLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
    <div style={{
      width: 34, height: 34, backgroundColor: "#f7f5f2", borderRadius: 10,
      border: "1.5px solid rgba(26,26,26,0.18)",
      display: "flex", alignItems: "center", justifyContent: "center",
      boxSizing: "border-box", padding: "0 3px",
    }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, letterSpacing: "-0.5px", color: "#1a1a1a", lineHeight: 1, whiteSpace: "nowrap" }}>JM</span>
    </div>
    <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, letterSpacing: "-0.3px", color: "#fff", lineHeight: 1 }}>
      MORAIS
    </span>
  </div>
);

export default function Contato() {
  return (
    <div className="flex flex-col gap-4 p-4" style={{ backgroundColor: "#e63329" }}>
      <div className="flex flex-col lg:flex-row gap-4 lg:h-[calc(100vh-32px)]">

        {/* Left column */}
        <div className="flex flex-col gap-4 lg:flex-[40_1_0%]">

          {/* Map */}
          <div className="relative overflow-hidden rounded-[32px] h-[300px] lg:h-auto lg:flex-[6_1_0%]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-46.665%2C-23.570%2C-46.625%2C-23.545&layer=mapnik&marker=-23.5575%2C-46.6467"
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              loading="lazy"
              title="Julia Morais Tattoo — São Paulo"
            />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -100%)", display: "flex", flexDirection: "column", alignItems: "center", pointerEvents: "none" }}>
              <div style={{ backgroundColor: "#1a1a1a", color: "#fff", padding: "4px 10px", borderRadius: 6, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.22)" }}>
                Julia Morais Tattoo — SP
              </div>
              <div style={{ width: 2, height: 10, backgroundColor: "#1a1a1a" }} />
              <div style={{ width: 10, height: 10, backgroundColor: "#1a1a1a", borderRadius: "50%" }} />
            </div>
          </div>

          {/* Info card */}
          <div className="rounded-[32px] overflow-hidden flex flex-col lg:flex-row min-h-[300px] lg:min-h-[180px] lg:flex-[4_1_0%]" style={{ backgroundColor: "#111" }}>
            <div style={{ flex: 1, padding: "28px 20px 24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.4vw, 42px)", fontWeight: 800, color: "#fff", lineHeight: 1.0, margin: 0 }}>
                  Vamos<br />tatuar!
                </h2>
              </div>
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: "flex" }}><InstagramIcon /></a>
                <a href={whatsappLink("Oi Julia, quero agendar uma tatuagem!")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ display: "flex" }}><WhatsAppIcon /></a>
              </div>
            </div>

            <div className="w-full lg:w-[32%] rounded-[24px] lg:rounded-[20px_32px_32px_20px]" style={{ flexShrink: 0, backgroundColor: "#1c1c1c", padding: "22px", display: "flex", flexDirection: "column", gap: 18, justifyContent: "space-between" }}>
              <JMLogo />
              <div>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, margin: 0, lineHeight: 1.7 }}>{EMAIL}</p>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 13, margin: 0, lineHeight: 1.7 }}>{WHATSAPP_DISPLAY}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <div className="min-w-0 min-h-[560px] lg:min-h-0 lg:flex-[60_1_0%]">
          <ContactForm />
        </div>
      </div>

      <div className="h-4" />
      <Footer />
    </div>
  );
}
