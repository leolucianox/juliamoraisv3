import TrHero from "@/components/sections/trabalhos/tr-hero";
import TrStats from "@/components/sections/trabalhos/tr-stats";
import TrStyles from "@/components/sections/trabalhos/tr-styles";
import TrGallery from "@/components/sections/trabalhos/tr-gallery";
import TrWhy from "@/components/sections/trabalhos/tr-why";
import Footer from "@/components/sections/footer";

export default function Trabalhos() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <TrHero />
      <TrStats />
      <TrStyles />
      <TrGallery />
      <TrWhy />
      <div className="h-4" />
      <Footer />
    </div>
  );
}
