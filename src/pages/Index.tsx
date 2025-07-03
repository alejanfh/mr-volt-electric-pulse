
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Hero />
      <MenuSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
