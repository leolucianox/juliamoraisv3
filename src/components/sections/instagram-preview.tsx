"use client";

import { motion } from "framer-motion";
import { PHOTOS } from "@/lib/images";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/contact";

const [HANDLE_USER, HANDLE_REST] = (() => {
  const dotIndex = INSTAGRAM_HANDLE.indexOf(".");
  return [INSTAGRAM_HANDLE.slice(0, dotIndex + 1), INSTAGRAM_HANDLE.slice(dotIndex + 1)];
})();

const posts = [
  { img: PHOTOS.wristFine1, caption: "Fine line no pulso ✨", likes: 342 },
  { img: PHOTOS.session2, caption: "Sessão de hoje 🖤", likes: 218 },
  { img: PHOTOS.handFine, caption: "Delicada e cheia de significado", likes: 501 },
  { img: PHOTOS.session3, caption: "Pontilhismo em progresso", likes: 276 },
  { img: PHOTOS.wristFine2, caption: "Detalhe fresquinho", likes: 189 },
  { img: PHOTOS.artistAtWork, caption: "Um dia no estúdio", likes: 412 },
];

const CARD_GAP = 12;

const HeartIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
    <path d="M12 21s-7.5-4.6-10.2-9.3C.2 8.6 1.6 5 5.1 4.1 7.4 3.5 9.7 4.5 12 7.2c2.3-2.7 4.6-3.7 6.9-3.1 3.5.9 4.9 4.5 3.3 7.6C19.5 16.4 12 21 12 21z" />
  </svg>
);

const InstagramGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
  </svg>
);

export default function InstagramPreview() {
  return (
    <section className="w-full overflow-hidden rounded-[32px]" style={{ backgroundColor: "#f7f5f2" }}>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Instagram fixed card */}
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[24px] p-4 flex flex-col justify-between items-start text-left flex-shrink-0 no-underline"
            style={{
              height: "clamp(200px, 25vw, 300px)",
              width: "clamp(180px, 22vw, 260px)",
              backgroundColor: "#1a1a1a",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-bold w-fit text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              <InstagramGlyph />
              Instagram
            </span>
            <h2
              className="text-white"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(12px, 1.4vw, 19px)",
                fontWeight: 800,
                lineHeight: 1.15,
                maxWidth: "100%",
                textAlign: "left",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>{HANDLE_USER}</span>
              <br />
              {HANDLE_REST}
            </h2>
          </motion.a>

          {/* Infinite Instagram posts ticker */}
          <div className="flex-1 overflow-hidden rounded-[24px]" style={{ height: "clamp(200px, 25vw, 300px)" }}>
            <motion.div
              className="flex h-full"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, ease: "linear", repeat: Infinity }}
              style={{ width: "fit-content" }}
            >
              {[...posts, ...posts].map((post, i) => (
                <div
                  key={i}
                  className="rounded-[24px] flex-shrink-0 flex flex-col justify-between p-4 relative overflow-hidden"
                  style={{
                    width: "clamp(180px, 22vw, 260px)",
                    height: "clamp(200px, 25vw, 300px)",
                    marginRight: CARD_GAP,
                    backgroundImage: `url('${post.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.55) 100%)" }} />
                  <span className="relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold text-white w-fit" style={{ backgroundColor: "rgba(0,0,0,0.35)" }}>
                    <InstagramGlyph />
                  </span>
                  <div className="relative">
                    <p className="text-white text-[13px] font-semibold leading-snug mb-1.5">{post.caption}</p>
                    <span className="inline-flex items-center gap-1.5 text-white/80 text-[12px] font-medium">
                      <HeartIcon /> {post.likes}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
