import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import ProblemSection from "@/components/ProblemSection";
import OptionsSection from "@/components/OptionsSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import CTASection from "@/components/CTASection";


const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div className="w-full h-px bg-border" />
        <TeamSection />
        <div className="w-full h-px bg-border" />
        <ProblemSection />
        <div className="w-full h-px bg-border" />
        <OptionsSection />
        <div className="w-full h-px bg-border" />
        <AboutSection />
        <div className="w-full h-px bg-border" />
        <SolutionsSection />
        <div className="w-full h-px bg-border" />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
