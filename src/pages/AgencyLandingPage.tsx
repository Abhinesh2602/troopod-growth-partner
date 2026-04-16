import { useState } from "react";
import Header from "@/components/Header";
import { UserX, AlertTriangle, Clock, Layers, TrendingUp, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

const trustLogos = [
  "Martin Monroe",
  "NJRAMs",
  "Obvi",
  "Essor",
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
    image: "Project Alpha",
    title: "High-converting landing pages, built to perform",
    description: "Every page is custom-built for speed, structure, and conversion — not dragged out of a template library",
    quote: "Working with Troopod completely changed how fast we could launch new campaigns",
    author: "Alex Johnson, Head of Growth",
  },
  {
    image: "Project Beta",
    title: "Campaign pages that match your creative velocity",
    description: "Launch new variants as fast as your team can design them — no developer queue, no template constraints",
    quote: "We went from launching one page a month to five pages a week without adding headcount",
    author: "Sarah Chen, Marketing Director",
  },
  {
    image: "Project Gamma",
    title: "Performance-optimised pages from day one",
    description: "Every build is tested for Core Web Vitals, mobile responsiveness, and conversion best practices before going live",
    quote: "The quality and speed exceeded every agency we've worked with before",
    author: "Michael Torres, VP of Digital",
  },
  {
    image: "Project Delta",
    title: "Scalable page systems for growing brands",
    description: "Whether you need 5 pages or 50, the same quality and speed applies — built to scale with your growth",
    quote: "Troopod became an extension of our team, not just another vendor",
    author: "Priya Sharma, CMO",
  },
];

const ProductCardsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = productCards.length;
  const prev = () => setCurrent((c) => c - 1);
  const next = () => setCurrent((c) => c + 1);

  const items = [...productCards, ...productCards, ...productCards];
  const offset = total;

  const getTransform = () => {
    const idx = current + offset;
    return `translateX(calc(50% - ${idx * (540 + 24) + 270}px))`;
  };

  const getRealIndex = (i: number) => ((i % total) + total) % total;

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight mb-16 md:mb-20">
          What you{" "}
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
            actually get
          </span>
        </h2>
      </div>

      <div className="relative overflow-visible">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: getTransform() }}
        >
          {items.map((card, i) => {
            const isActive = getRealIndex(i - offset) === getRealIndex(current);
            return (
              <div
                key={i}
                className="flex-shrink-0 transition-all duration-500"
                style={{ width: 540 }}
              >
                <div
                  className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
                    isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
                  }`}
                >
                  <div className="w-full aspect-[16/10] bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">{card.image}</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground italic text-sm leading-relaxed">"{card.quote}"</p>
                      <p className="text-xs text-muted-foreground mt-2 font-medium">— {card.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={prev} className="p-2 rounded-full border border-border hover:bg-secondary transition-colors" aria-label="Previous">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {productCards.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${getRealIndex(current) === i ? "bg-primary" : "bg-border"}`} />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full border border-border hover:bg-secondary transition-colors" aria-label="Next">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

const AgencyLandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
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
                href="mailto:hello@troopod.io"
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

            <div className="mt-16 md:mt-20">
              <p className="text-sm font-medium text-muted-foreground tracking-wide mb-6">
                Used by performance teams behind leading DTC brands
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {trustLogos.map((name) => (
                  <div
                    key={name}
                    className="h-12 w-32 rounded-lg bg-secondary flex items-center justify-center"
                  >
                    <span className="text-xs text-muted-foreground font-medium">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 — Problem */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
              Design is fast.{" "}
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

            <div className="mt-16 md:mt-20">
              {(() => {
                const steps = [
                  { step: "01", title: "Share your design or idea", description: "Figma, HTML, or just a brief" },
                  { step: "02", title: "Align on requirements", description: "Flow, content, and key features locked" },
                  { step: "03", title: "See your live preview", description: "Built, QA'd, and ready to launch" },
                ];
                const dotTop = 'calc(2.5rem + 1rem + 0.5rem - 1px)';
                return (
                  <div className="grid grid-cols-3 relative">
                    {/* Track container: spans exactly from dot 01 center to dot 03 center */}
                    <div className="absolute" style={{ top: dotTop, left: 'calc(100% / 6)', right: 'calc(100% / 6)', height: '2px' }}>
                      {/* Static track */}
                      <div className="absolute inset-0 bg-border/30 rounded-full" />
                      {/* Animated glow line */}
                      <div
                        className="absolute inset-0 rounded-full origin-left"
                        style={{
                          background: 'linear-gradient(90deg, hsl(262 83% 58%), hsl(262 83% 58% / 0.4))',
                          animation: 'timeline-line-grow 4.5s ease-out infinite',
                          boxShadow: '0 0 8px hsl(262 83% 58% / 0.4)',
                        }}
                      />
                      {/* Traveling glow dot — moves within this container so 0% = dot 01, 100% = dot 03 */}
                      <div
                        className="absolute rounded-full"
                        style={{
                          width: 12,
                          height: 12,
                          top: -5,
                          animation: 'timeline-travel 4.5s ease-out infinite',
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
                            animation: `dot-glow-${i} 4.5s ease-out infinite`,
                          }}
                        />
                        <h3 className="text-base md:text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
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

            <div className="mt-16 md:mt-20 overflow-x-auto">
              <table className="w-full border-collapse table-fixed" style={{ fontSize: '1.06rem' }}>
                <colgroup>
                  <col className="w-[18%]" />
                  <col className="w-[20.5%]" />
                  <col className="w-[20.5%]" />
                  <col className="w-[20.5%]" />
                  <col className="w-[20.5%]" />
                </colgroup>
                <thead className="bg-card">
                  <tr className="border-b border-border/50">
                    <th className="text-left font-medium text-foreground py-6 pl-6 pr-4">Key Factors</th>
                    {["In-house Dev", "Freelancers", "AI Tools"].map((col) => (
                      <th key={col} className="text-center font-medium text-muted-foreground py-6 px-4">{col}</th>
                    ))}
                    <th className="text-center font-semibold py-6 px-4 text-primary">TrooLaunch</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  {[
                    { label: "Ownership", values: ["Competing priorities", "Low accountability", "No ownership", "Fully managed"] },
                    { label: "Speed", values: ["Limited by bandwidth", "Unpredictable timelines", "Fast for drafts only", "Live in 24 hrs"] },
                    { label: "Execution Flow", values: ["Queue-based execution", "Back-and-forth iterations", "Breaks before production", "Structured, fast execution"] },
                    { label: "Scalability", values: ["Bottlenecked as volume grows", "Hard to scale output", "Not built for real workflows", "Built for high volume"] },
                    { label: "Outcome", values: ["Delayed launches", "Missed timelines", "Never goes live", "Ready to launch, every time"] },
                  ].map((row, i, arr) => (
                    <tr key={row.label} className={i < arr.length - 1 ? "border-b border-border/50" : ""}>
                      <td className="py-6 pr-4 font-medium text-foreground pl-6">{row.label}</td>
                      {row.values.map((val, j) => (
                        <td key={j} className={`py-6 px-4 text-center ${j === 3 ? "text-primary font-semibold" : "text-muted-foreground"}`}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 06 — Product Cards */}
        <div className="w-full h-px bg-border" />
        <ProductCardsSection />

        {/* Section 07 — Metrics */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight mb-16 md:mb-20">
              Clear, measurable{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                impact on your agency
              </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "24h", label: "Average turnaround from design to live" },
                { metric: "100+", label: "Pages built for consumer brands" },
                { metric: "3X", label: "Faster than traditional dev teams" },
                { metric: "98%", label: "Client satisfaction across projects" },
              ].map((item) => (
                <div
                  key={item.metric}
                  className="bg-card border border-border rounded-lg p-8 md:p-10 text-center"
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3">{item.metric}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Real numbers from real projects — not hypotheticals
            </p>
          </div>
        </section>

        {/* Section 08 — Final CTA */}
        <div className="w-full h-px bg-border" />
        <section className="section-padding text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10">
              Send us your design and get your first page live — no contracts, no onboarding delays
            </p>

            <a
              href="mailto:hello@troopod.io"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
            >
              Go Live in next 24 hrs
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgencyLandingPage;
