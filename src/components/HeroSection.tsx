import troopodLogo from "@/assets/troopod-logo.png";

const HeroSection = () => {
  return (
    <section className="section-padding text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
        <div className="flex flex-col items-center gap-1 py-20 md:py-28">
          <img src={troopodLogo} alt="Troopod" className="h-20 md:h-28" />
          <p className="text-lg md:text-xl font-medium bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(0 0% 95%) 0%, hsl(262 83% 58%) 100%)' }}>
            AI-native website growth partner
          </p>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
          Engineered for marketing teams that move fast
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
