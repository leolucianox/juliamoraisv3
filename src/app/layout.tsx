import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import SidebarNav from "@/components/sidebar-nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Julia Morais — Tatuagens Fine Line",
  description:
    "Julia Morais é tatuadora em São Paulo, especializada em fine line e tatuagens delicadas. 8 anos de experiência, agendamento pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${dmSans.variable} ${syne.variable}`}>
      <body>
        <SidebarNav />
        <div className="ml-0 lg:ml-[232px]">{children}</div>
      </body>
    </html>
  );
}
