import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import { UserX, AlertTriangle, Clock, Layers, TrendingUp, Sparkles, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import martinMonroeLogo from "@/assets/brands/martinmonroe_cover.png";
import obviLogo from "@/assets/brands/obvi.png";
import essorLogo from "@/assets/brands/ESSOR_Logo-320x83-black.webp";
import primalWebpage from "@/assets/webpages/8primal-webpage.png";
import anomalyWebpage from "@/assets/webpages/anomaly-webpage-2.png";
import flexproWebpage from "@/assets/webpages/flexpro-meals-webpage.png";
import wondercowWebpage from "@/assets/webpages/wondercow-webpage.png";
import ericAvatar from "@/assets/clients/martin-monroe.png";
import ronakAvatar from "@/assets/clients/ronak-shah.png";
import joshAvatar from "@/assets/clients/josh-pasour.png";

const trustLogos = [
  { name: "Martin Monroe", src: martinMonroeLogo, type: "image" as const, scale: "scale-[2.2] translate-y-1" },
  { name: "NJRAMs", src: null, type: "njrams" as const },
  { name: "Obvi", src: obviLogo, type: "image" as const },
  { name: "Essor", src: essorLogo, type: "image" as const },
];

const problems = [
  {
    icon: UserX,
    title: "Developer bandwidth limited",
    description: "Internal teams have priorities\nlanding pages wait in queue",
  },
  {
    icon: AlertTriangle,
    title: "AI tools don't get to live",
    description: "Great for drafts and ideas\nnot for production-ready pages",
  },
  {
    icon: Clock,
    title: "External partners move slow",
    description: "Briefs, back-and-forth, delays\ntimelines for every page",
  },
];

const productCards = [
  {
    image: anomalyWebpage,
    imageAlt: "Anomaly landing page",
    domain: "tryanomaly.com",
    title: "Idea → Dev in 48 hours",
    description: "From concept to a fully functional page, ready to launch",
    quote: "We went from idea to a fully functional page in under 48 hours, something that would normally take weeks, if not months.",
    author: "Ronak Shah, Obvi",
    avatar: ronakAvatar,
  },
  {
    image: flexproWebpage,
    imageAlt: "FlexPro Meals landing page",
    domain: "flexpromeals.com",
    title: "Manus → Dev in 24 hours",
    description: "From Manus to a fully functional page, ready to go live",
    quote: "We asked if they could take a design from Manus to live, and they delivered it quickly, without any friction. It shows the adaptability of the team.",
    author: "Eric Vaughn, Martin Monroe",
    avatar: ericAvatar,
  },
  {
    image: primalWebpage,
    imageAlt: "8Primal landing page",
    domain: "8primal.com",
    title: "Figma → Full website live in 2 weeks",
    description: "From design to complete website launch without any delays",
  },
  {
    image: wondercowWebpage,
    imageAlt: "Wondercow landing page",
    domain: "wondercow.com",
    title: "Idea → Design in 24 hours",
    description: "From brief to final landing page design, with minimal to-and-fros",
    quote: "We shared minimal context, and Troopod delivered a complete landing page design within 24 hours, with almost no back-and-forth. The speed was impressive.",
    author: "Josh Pasour, NJRAMS",
    avatar: joshAvatar,
  },
];

const ProductCardsSection = () => {
  const total = productCards.length;
  const offset = total;
  const [current, setCurrent] = useState(offset);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const prev = () => setCurrent((c) => Math.max(c - 1, offset - 1));
  const next = () => setCurrent((c) => Math.min(c + 1, offset + total));

  useEffect(() => {
    if (current === offset - 1) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(offset + total - 1);
      }, 500);

      return () => window.clearTimeout(timer);
    }

    if (current === offset + total) {
      const timer = window.setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(offset);
      }, 500);

      return () => window.clearTimeout(timer);
    }
  }, [current, offset, total]);

  useEffect(() => {
    if (!isTransitioning) {
      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swiped = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    swiped.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null || swiped.current) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      swiped.current = true;
      if (dx < 0) next();
      else prev();
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const items = [...productCards, ...productCards, ...productCards];

  const cardWidth = isMobile ? 300 : 540;
  const cardGap = isMobile ? 16 : 24;

  const getTransform = () => {
    return `translateX(calc(50% - ${current * (cardWidth + cardGap) + cardWidth / 2}px))`;
  };

  const getRealIndex = (i: number) => ((i % total) + total) % total;

  const activeIndex = getRealIndex(current - offset);

  return (
    <section className="section-padding overflow-x-clip relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 bottom-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 55%, hsl(262 83% 58% / 0.14), transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight mb-16 md:mb-20">
          How agencies{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
            ship faster with TrooLaunch
          </span>
        </h2>
      </div>

      <div className="relative">
        <div
          className={`flex gap-4 sm:gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{ transform: getTransform() }}
        >
          {items.map((card, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: cardWidth }}
              >
                <div
                  className={`bg-card rounded-2xl overflow-hidden ${isTransitioning ? "transition-all duration-500" : ""} ${
                    isActive
                      ? "opacity-100 scale-100 border border-primary/20 shadow-[0_30px_90px_-20px_hsl(262_83%_58%/0.35),0_0_0_1px_hsl(262_83%_58%/0.08)]"
                      : "opacity-40 scale-95 border border-border"
                  }`}
                >
                  <div className="w-full aspect-[16/10] bg-gradient-to-b from-secondary to-background overflow-hidden flex flex-col">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60 bg-background/40 backdrop-blur-sm flex-shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      <div className="flex-1 flex justify-center">
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground font-mono tracking-wide bg-secondary/70 px-3 py-0.5 rounded-md">
                          {card.domain}
                        </span>
                      </div>
                      <span className="w-10" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.imageAlt}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 space-y-5">
                    <div>
                      <h3 className="text-xl font-semibold text-primary leading-snug">{card.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2">{card.description}</p>
                    </div>
                    {card.quote && card.author && (
                    <div className="border-t border-border/60 pt-5 flex flex-col sm:flex-row gap-4 sm:items-start">
                      <div className="flex gap-3 flex-1 min-w-0">
                        <Quote
                          className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5"
                          style={{ transform: 'scaleX(-1)' }}
                          aria-hidden
                        />
                        <p className="text-foreground/85 italic text-sm leading-relaxed">{card.quote}</p>
                      </div>
                      <div className="flex sm:flex-col items-center gap-2 sm:gap-2 flex-shrink-0">
                        {card.avatar ? (
                          <img src={card.avatar} alt={card.author.split(", ")[0]} className="w-10 h-10 rounded-full object-cover border border-primary/20" />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/20 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary/80">{card.author.split(" ").map(w => w[0]).slice(0, 2).join("")}</span>
                          </div>
                        )}
                        <div className="sm:text-center">
                          <p className="text-xs font-medium text-foreground/80 whitespace-nowrap">{card.author.split(", ")[0]}</p>
                          <p className="text-[10px] text-muted-foreground whitespace-nowrap">{card.author.split(", ")[1]}</p>
                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 sm:gap-6 mt-10">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border border-border/80 bg-card/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
          aria-label="Previous"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {productCards.map((_, i) => {
            const isActiveDot = activeIndex === i;
            return (
              <button
                key={i}
                onClick={() => { setIsTransitioning(true); setCurrent(offset + i); }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActiveDot ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/60"
                }`}
              />
            );
          })}
        </div>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full border border-border/80 bg-card/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

const AnimatedMetric = ({ prefix, value, suffix }: { prefix: string; value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <p ref={ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 md:mb-3 tabular-nums">
      {prefix}{display}{suffix}
    </p>
  );
};

const AgencyLandingPage = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineVisible, setTimelineVisible] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <main className="pt-16 overflow-x-clip">
        {/* Section 01 — Hero */}
        <section className="section-padding text-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From design to live in{" "}
              <span className="text-primary">24 hours</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mt-6">
              Built for performance marketing agencies running high-velocity campaigns and constant creative testing
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <a
                href="mailto:nj@troopod.io"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
              >
                Go Live in 24 hrs
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-border text-foreground px-8 py-4 text-base font-medium hover:bg-secondary transition-colors"
              >
                See how it works
              </a>
            </div>

            <div className="mt-16 md:mt-20 text-center">
              <p className="text-sm font-medium text-muted-foreground tracking-wide mb-6 px-4">
                Used by performance teams<br className="sm:hidden" /> behind leading DTC brands
              </p>
              <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="flex gap-6 w-max animate-marquee">
                  {[...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
                    <div key={`${logo.name}-${i}`} className="flex-shrink-0">
                      <div className="h-20 w-44 rounded-lg bg-white flex items-center justify-center overflow-hidden p-4">
                        {logo.type === "image" && logo.src ? (
                          <img
                            src={logo.src}
                            alt={logo.name}
                            className={`max-w-full object-contain max-h-full ${logo.scale || ""}`}
                          />
                        ) : (
                          <span className="font-mono font-bold tracking-wider flex items-baseline gap-0.5">
                            <span className="text-[#1a1a2e]/60 text-xs tracking-[3px]">NJ</span>
                            <span className="text-[#1a1a2e] text-2xl">RAMS</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 — Problem */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
              Design is fast.<br className="sm:hidden" />{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                Going live isn't
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
              {problems.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-lg p-10 md:p-12 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <item.icon className="w-[60px] h-[60px] text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl">
              Campaigns move fast. Designs move fast. Execution can't keep up
            </p>
          </div>
        </section>

        {/* Section 03 — About / USPs */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
              Meet TrooLaunch:{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                Turn designs into live pages in 24 hours
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
              {[
                {
                  icon: Layers,
                  title: "Fully Managed Execution",
                  description: "Design to live, fully handled",
                },
                {
                  icon: TrendingUp,
                  title: "Proven at Scale",
                  description: "Battle-tested with 100+ brands",
                },
                {
                  icon: Sparkles,
                  title: "Zero Team Effort",
                  description: "Share the design. We ship it",
                },
              ].map((usp) => (
                <div
                  key={usp.title}
                  className="bg-card border border-border rounded-lg p-10 md:p-12 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <usp.icon className="w-[60px] h-[60px] text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2 whitespace-nowrap">{usp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                    {usp.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Launch fast, Iterate more, and Win faster
            </p>

            <div className="flex justify-center mt-8">
              <a
                href="/#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-border text-foreground px-8 py-4 text-base font-medium hover:bg-secondary transition-colors"
              >
                Explore all solutions
              </a>
            </div>
          </div>
        </section>

        {/* Section 04 — How It Works Timeline */}
        <div className="w-full h-px bg-border" />
        <section id="how-it-works" className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              Go Live in{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                3 simple steps
              </span>
            </h2>

            <div ref={timelineRef} className="mt-16 md:mt-20">
              {(() => {
                const steps = [
                  { step: "01", title: "Share your design or idea", description: "Figma, HTML, or just a brief" },
                  { step: "02", title: "Align on requirements", description: "Flow, content, and key features locked" },
                  { step: "03", title: "See your live preview", description: "Built, QA'd, and ready to launch" },
                ];
                const dotTop = 'calc(2.5rem + 1rem + 0.5rem - 1px)';
                return (
                  <>
                    {/* Desktop: horizontal */}
                    <div className="hidden md:grid grid-cols-3 relative">
                      <div className="absolute" style={{ top: dotTop, left: 'calc(100% / 6)', right: 'calc(100% / 6)', height: '2px' }}>
                        <div className="absolute inset-0 bg-border/30 rounded-full" />
                        <div
                          className="absolute inset-0 rounded-full origin-left"
                          style={{
                            background: 'linear-gradient(90deg, hsl(262 83% 58%), hsl(262 83% 58% / 0.4))',
                            animation: timelineVisible ? 'timeline-line-grow 4.5s ease-out forwards' : 'none',
                            transform: timelineVisible ? undefined : 'scaleX(0)',
                            boxShadow: '0 0 8px hsl(262 83% 58% / 0.4)',
                          }}
                        />
                        <div
                          className="absolute rounded-full"
                          style={{
                            width: 12,
                            height: 12,
                            top: -5,
                            animation: timelineVisible ? 'timeline-travel 4.5s ease-out forwards' : 'none',
                            opacity: timelineVisible ? undefined : 0,
                            background: 'hsl(262 83% 58%)',
                            boxShadow: '0 0 16px hsl(262 83% 58% / 0.9), 0 0 30px hsl(262 83% 58% / 0.4)',
                            zIndex: 20,
                          }}
                        />
                      </div>
                      {steps.map((item, i) => (
                        <div key={item.step} className="relative flex flex-col items-center text-center px-4">
                          <p className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{item.step}</p>
                          <div
                            className="w-4 h-4 rounded-full relative z-10 mb-6"
                            style={{
                              background: 'hsl(240 4% 18%)',
                              border: '2px solid hsl(240 4% 25%)',
                              animation: timelineVisible ? `dot-glow-${i} 4.5s ease-out forwards` : 'none',
                            }}
                          />
                          <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Mobile: vertical */}
                    <div className="md:hidden relative">
                      {/* Single continuous vertical line from first dot to last dot */}
                      <div
                        className="absolute"
                        style={{
                          left: 15,
                          top: 16,
                          bottom: 16,
                          width: 2,
                        }}
                      >
                        <div className="absolute inset-0 bg-border/30 rounded-full" />
                        <div
                          className="absolute inset-0 rounded-full origin-top"
                          style={{
                            background: 'linear-gradient(180deg, hsl(262 83% 58%), hsl(262 83% 58% / 0.4))',
                            animation: timelineVisible ? 'timeline-line-grow-v 4.5s ease-out forwards' : 'none',
                            transform: timelineVisible ? undefined : 'scaleY(0)',
                            boxShadow: '0 0 8px hsl(262 83% 58% / 0.4)',
                          }}
                        />
                        <div
                          className="absolute rounded-full"
                          style={{
                            width: 12,
                            height: 12,
                            left: -5,
                            animation: timelineVisible ? 'timeline-travel-v 4.5s ease-out forwards' : 'none',
                            opacity: timelineVisible ? undefined : 0,
                            background: 'hsl(262 83% 58%)',
                            boxShadow: '0 0 16px hsl(262 83% 58% / 0.9), 0 0 30px hsl(262 83% 58% / 0.4)',
                            zIndex: 20,
                          }}
                        />
                      </div>

                      <div className="flex flex-col gap-10">
                        {steps.map((item, i) => (
                          <div key={item.step} className="flex items-start gap-5 relative">
                            <div className="flex flex-col items-center flex-shrink-0 w-8 mt-2">
                              <div
                                className="w-4 h-4 rounded-full relative z-10"
                                style={{
                                  background: 'hsl(240 4% 18%)',
                                  border: '2px solid hsl(240 4% 25%)',
                                  animation: timelineVisible ? `dot-glow-${i} 4.5s ease-out forwards` : 'none',
                                }}
                              />
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-foreground tracking-tight">{item.step}</p>
                              <h3 className="text-base font-semibold mt-1">{item.title}</h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                      ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Section 05 — Options Comparison */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
              TrooLaunch is the{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                fastest, easiest, and most reliable
              </span>{" "}
              way to go live
            </h2>

            {(() => {
              const rows = [
                { label: "Ownership", values: ["Competing priorities", "Low accountability", "No ownership", "Fully managed"] },
                { label: "Speed", values: ["Limited bandwidth", "Unpredictable", "Fast for drafts only", "Live in 24 hrs"] },
                { label: "Execution Flow", values: ["Queue-based execution", "Back-and-forth iterations", "Breaks before production", "Structured, fast execution"] },
                { label: "Scalability", values: ["Bottlenecks at scale", "Hard to scale output", "Broken workflow", "Built for high volume"] },
                { label: "Outcome", values: ["Delayed launches", "Missed timelines", "Never goes live", "Launch-ready"] },
              ];
              const competitors = ["In-house Dev", "Freelancers", "AI Tools"];

              return (
                <div className="mt-12 md:mt-20 -mx-6 md:mx-0 overflow-x-auto">
                  <div className="px-6 md:px-0 min-w-[720px]">
                    <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
                      {/* Highlighted TrooLaunch column band */}
                      <div
                        aria-hidden
                        className="absolute top-0 bottom-0 pointer-events-none"
                        style={{
                          left: '18%',
                          width: 'calc(82% / 4)',
                          background: 'linear-gradient(180deg, hsl(262 83% 58% / 0.12) 0%, hsl(262 83% 58% / 0.06) 100%)',
                          borderLeft: '1px solid hsl(262 83% 58% / 0.35)',
                          borderRight: '1px solid hsl(262 83% 58% / 0.35)',
                          boxShadow: '0 0 60px -10px hsl(262 83% 58% / 0.35)',
                        }}
                      />

                      <div
                        className="grid relative text-sm md:text-[1.02rem]"
                        style={{ gridTemplateColumns: '18% repeat(4, 1fr)' }}
                      >
                        {/* Header row */}
                        <div className="py-5 md:py-6 pl-4 md:pl-6 pr-3 md:pr-4 font-medium text-foreground border-b border-border/50">Key Factors</div>
                        <div className="py-5 md:py-6 px-3 md:px-4 pl-8 md:pl-10 font-semibold text-primary border-b border-primary/30">
                          TrooLaunch
                        </div>
                        {competitors.map((col) => (
                          <div key={col} className="py-5 md:py-6 px-3 md:px-4 pl-8 md:pl-10 font-medium text-muted-foreground border-b border-border/50">
                            {col}
                          </div>
                        ))}

                        {/* Data rows */}
                        {rows.map((row, i) => {
                          const isLast = i === rows.length - 1;
                          const borderCls = isLast ? "" : "border-b border-border/40";
                          return (
                            <div key={row.label} className="contents">
                              <div className={`py-5 md:py-6 pl-4 md:pl-6 pr-3 md:pr-4 font-medium text-foreground ${borderCls}`}>{row.label}</div>
                              <div className={`py-5 md:py-6 px-3 md:px-4 text-primary font-semibold ${isLast ? "" : "border-b border-primary/20"}`}>
                                {row.values[3]}
                              </div>
                              {row.values.slice(0, 3).map((val, j) => (
                                <div key={j} className={`py-5 md:py-6 px-3 md:px-4 text-muted-foreground/80 ${borderCls}`}>
                                  {val}
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              No existing solution is built to fast-track design-to-live execution
            </p>
          </div>
        </section>

        {/* Section 06 — Product Cards */}
        <div className="w-full h-px bg-border" />
        <ProductCardsSection />

        {/* Section 07 — Metrics */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight mb-10 md:mb-16 lg:mb-20">
              The impact your agency{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                could be seeing
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { prefix: "", value: 24, suffix: "h", label: "From design to live" },
                { prefix: "", value: 2, suffix: "X", label: "Higher margins" },
                { prefix: "", value: 5, suffix: "X+", label: "More output per team" },
                { prefix: "$", value: 3, suffix: "k+", label: "Extra revenue per client" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-lg p-5 sm:p-8 md:p-10 text-center"
                >
                  <AnimatedMetric prefix={item.prefix} value={item.value} suffix={item.suffix} />
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Scale recurring revenue without increasing bandwidth
            </p>
          </div>
        </section>

        {/* Section 08 — Final CTA */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-4">
              Send your brief. Go Live with your ideas today :)
            </p>
            <p className="text-muted-foreground text-sm md:text-base mb-10">
              No contracts. No onboarding delays. Just fast execution.
            </p>

            <a
              href="mailto:nj@troopod.io"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
            >
              Go Live today
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgencyLandingPage;
