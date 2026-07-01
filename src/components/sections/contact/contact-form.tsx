"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/contact";

const inputBase: React.CSSProperties = {
  width: "100%",
  backgroundColor: "rgba(255,255,255,0.6)",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 12,
  padding: "10px 14px",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
  color: "#000",
};

const labelBase: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "rgba(0,0,0,0.4)",
  display: "block",
  marginBottom: 5,
};

function Field({
  label,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label style={labelBase}>{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} style={inputBase} />
    </div>
  );
}

function CheckboxRow({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label style={{ display: "flex", alignItems: "flex-start", gap: 8, cursor: "pointer" }}>
      <div
        onClick={onChange}
        style={{ width: 14, height: 14, borderRadius: 3, border: "1.5px solid rgba(0,0,0,0.28)", backgroundColor: checked ? "#e63329" : "transparent", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {checked && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span style={{ fontSize: 13, color: "rgba(0,0,0,0.5)", lineHeight: 1.5 }}>{label}</span>
    </label>
  );
}

export default function ContactForm() {
  const [terms, setTerms] = useState(false);
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [local, setLocal] = useState("");
  const [mensagem, setMensagem] = useState("");

  const canSubmit = nome.trim() && whatsapp.trim() && mensagem.trim() && terms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    const lines = [
      `Oi Julia! Meu nome é ${nome} ${sobrenome}.`.trim(),
      `Meu WhatsApp: ${whatsapp}`,
      local.trim() ? `Local do corpo: ${local}` : null,
      `Ideia da tatuagem: ${mensagem}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col rounded-[32px] min-h-[560px] lg:min-h-0 lg:h-full" style={{ backgroundColor: "#f7f5f2", padding: "32px" }}>
      <span style={{ display: "inline-block", alignSelf: "flex-start", backgroundColor: "#1a1a1a", color: "#fff", borderRadius: 999, padding: "4px 14px", fontSize: 13, fontWeight: 700, marginBottom: 22 }}>
        Contato
      </span>

      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 2.8vw, 50px)", fontWeight: 800, color: "#000", lineHeight: 1.05, margin: 0 }}>
        Quer tatuar comigo?<br />Vamos conversar.
      </h1>

      <p style={{ fontSize: 15, color: "rgba(0,0,0,0.5)", margin: "8px 0 24px" }}>
        Preencha o formulário e eu te chamo no WhatsApp para conversarmos sobre a sua ideia.
      </p>

      <form style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, minHeight: 0 }} onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="Nome *" value={nome} onChange={setNome} required />
          <Field label="Sobrenome" value={sobrenome} onChange={setSobrenome} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Field label="WhatsApp *" type="tel" value={whatsapp} onChange={setWhatsapp} required />
          <Field label="Local do corpo" value={local} onChange={setLocal} />
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <label style={labelBase}>Ideia da tatuagem *</label>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
            placeholder="Conte um pouco sobre a tatuagem que você imagina..."
            style={{ ...inputBase, flex: 1, resize: "none", minHeight: 0 }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          <CheckboxRow checked={terms} onChange={() => setTerms(v => !v)} label="Li e aceito que meus dados sejam usados para o meu atendimento com a Julia Morais Tattoo." />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
          <button
            type="submit"
            disabled={!canSubmit}
            style={{ backgroundColor: "#e63329", color: "#fff", borderRadius: 999, padding: "10px 26px", fontSize: 15, fontWeight: 700, border: "none", cursor: canSubmit ? "pointer" : "not-allowed", letterSpacing: "0.02em", opacity: canSubmit ? 1 : 0.4 }}
          >
            Enviar no WhatsApp →
          </button>
        </div>
      </form>
    </div>
  );
}
