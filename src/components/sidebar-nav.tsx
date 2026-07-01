"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { INSTAGRAM_URL, whatsappLink } from "@/lib/contact";

const MotionLink = motion.create(Link);

const WHATSAPP_LINK = whatsappLink("Oi Julia, quero agendar uma tatuagem!");

const navItems = [
  { label: "Home", color: "#1a1a1a", idx: "01", href: "/" },
  { label: "Sobre", color: "#2255cc", idx: "02", href: "/sobre" },
  { label: "Trabalhos", color: "#f0c419", idx: "03", href: "/trabalhos" },
  { label: "Contato", color: "#e63329", idx: "04", href: "/contato" },
];

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.95-.31-1.63-.6-2.87-1.24-4.74-4.14-4.89-4.33-.14-.2-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.15.12.32.02.51-.09.2-.14.32-.28.49-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.2.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z"/>
  </svg>
);

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div style={{
        width: 34, height: 34, backgroundColor: "#1a1a1a", borderRadius: 10,
        border: "1.5px solid rgba(247,245,242,0.35)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        boxSizing: "border-box", padding: "0 3px",
      }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, color: "#f7f5f2", lineHeight: 1, letterSpacing: "-0.5px", whiteSpace: "nowrap" }}>
          JM
        </span>
      </div>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, letterSpacing: "-0.3px", color: "#000", lineHeight: 1 }}>
        MORAIS
      </span>
    </div>
  );
}

export default function SidebarNav() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "#f7f5f2", border: "1.5px solid rgba(0,0,0,0.1)" }}
        aria-label="Open menu"
      >
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
          <path d="M0 1h18M0 7h18M0 13h18" stroke="#000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
          onClick={close}
        />
      )}

      <nav
        className={`fixed left-3 top-3 bottom-3 z-50 flex-col p-3 gap-2 rounded-[32px] ${isOpen ? "flex" : "hidden lg:flex"}`}
        style={{ width: "220px", backgroundColor: "#f7f5f2" }}
      >
        <div className="flex items-center py-2 px-1 mb-1">
          <Link href="/" onClick={close}>
            <LogoMark />
          </Link>
        </div>

        <div className="flex flex-col gap-2 flex-1 min-h-0">
          {navItems.map((item) => {
            const isHovered = hovered === item.label;
            const isActive = pathname === item.href;
            const fg = isActive ? item.color : "#fff";
            return (
              <MotionLink
                key={item.label}
                href={item.href}
                className="flex-1 flex flex-col justify-between p-5 cursor-pointer"
                style={{
                  backgroundColor: isActive ? "#ffffff" : item.color,
                  border: `2px solid ${isActive ? item.color : "transparent"}`,
                  borderRadius: "clamp(16px, 2vw, 36px)",
                }}
                onHoverStart={() => setHovered(item.label)}
                onHoverEnd={() => setHovered(null)}
                onClick={close}
                whileHover={{ scale: 1.025 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="flex justify-between items-start">
                  <span
                    className="text-[13px] font-medium opacity-60 transition-colors duration-200"
                    style={{ color: fg }}
                  >
                    {item.idx}
                  </span>
                  <motion.div
                    animate={{ rotate: isHovered || isActive ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: "50%", originY: "50%", display: "flex" }}
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path
                        d="M7.17418 1.66471L0.574525 1.66471L0.589256 6.74452e-05L10.0173 6.90346e-05L10.0173 9.42815L8.3527 9.44288L8.3527 2.84322L1.17851 10.0174L3.1533e-06 8.8389L7.17418 1.66471Z"
                        fill={fg}
                      />
                    </svg>
                  </motion.div>
                </div>
                <span
                  className="text-[14px] font-bold leading-tight transition-colors duration-200"
                  style={{ color: fg }}
                >
                  {item.label}
                </span>
              </MotionLink>
            );
          })}
        </div>

        <div className="flex flex-col gap-1.5 mt-1">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full py-2.5 px-3 text-white text-[14px] font-bold text-center"
            style={{ backgroundColor: "#1fae5f" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar
          </motion.a>

          <div className="bg-black rounded-xl px-3 py-2.5 flex items-center justify-center gap-5">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>
      </nav>
    </>
  );
}
