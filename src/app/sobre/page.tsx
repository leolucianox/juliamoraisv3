import AboutHero from "@/components/sections/sobre/about-hero";
import AboutJourney from "@/components/sections/sobre/about-journey";
import AboutGallery from "@/components/sections/sobre/about-gallery";
import Footer from "@/components/sections/footer";
import Ticker from "@/components/ticker";

export default function Sobre() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <AboutHero />
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
        duration={22}
      />
      <AboutJourney />
      <AboutGallery />
      <div className="h-4" />
      <Footer />
    </div>
  );
}
