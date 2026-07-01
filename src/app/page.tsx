import Hero from "@/components/sections/hero";
import Ticker from "@/components/ticker";
import AboutPreview from "@/components/sections/about-preview";
import WorkPreview from "@/components/sections/work-preview";
import InstagramPreview from "@/components/sections/instagram-preview";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 p-3">
      <Hero />
      <AboutPreview />
      <Ticker
        bg="#1a1a1a"
        color="#f7f5f2"
        items={[
          "Fine Line",
          "Delicadas",
          "Minimalista",
          "Botânica",
          "Pontilhismo",
          "Autoral",
        ]}
      />
      <WorkPreview />
      <Ticker
        bg="#e63329"
        color="#f7f5f2"
        items={[
          "8 anos tatuando",
          "São Paulo",
          "Fine line especialista",
          "Agendamento fácil",
          "Materiais descartáveis",
          "Tatuagens autorais",
        ]}
        duration={26}
      />
      <InstagramPreview />
      <div className="h-4" />
      <Footer />
    </main>
  );
}
