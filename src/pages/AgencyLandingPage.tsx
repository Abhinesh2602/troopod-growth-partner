import Header from "@/components/Header";
import { UserX, Bot, Handshake } from "lucide-react";

const trustLogos = [
  "Agency One",
  "Agency Two",
  "Agency Three",
  "Agency Four",
  "Agency Five",
];

const problems = [
  {
    icon: UserX,
    title: "Developer bandwidth limited",
    description: "Internal teams have priorities\nlanding pages wait in queue",
  },
  {
    icon: Bot,
    title: "AI tools don't get to live",
    description: "Great for drafts and ideas\nnot for production-ready pages",
  },
  {
    icon: Handshake,
    title: "External partners move slow",
    description: "Briefs, back-and-forth, delays\ntimelines stretch for every page",
  },
];

const AgencyLandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <section className="section-padding text-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="py-20 md:py-28 flex flex-col items-center gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                From design to live in{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(0 0% 95%) 0%, hsl(262 83% 58%) 100%)' }}>
                  24 hours
                </span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl">
                Built for performance marketing agencies doing heavy creative testing and launching new campaigns every now and then
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a
                  href="mailto:hello@troopod.io"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
                >
                  Get your first page live Now
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-border text-foreground px-8 py-4 text-base font-medium hover:bg-secondary transition-colors"
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Trust Line */}
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground tracking-wide mb-6">
                Used by teams working @
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

            {/* Problem Section */}
            <div className="w-full h-px bg-border" />
            <section className="section-padding w-full">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
                  Your team can design fast.{" "}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                    Going live is the bottleneck
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
                  {problems.map((item) => (
                    <div
                      key={item.title}
                      className="bg-card border border-border rounded-lg p-10 md:p-12 text-center"
                    >
                      <div className="flex justify-center mb-6">
                        <item.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl">
                  So campaigns move fast, but landing pages don't keep up
                </p>
              </div>
            </section>

            {/* Section 03 — About / USPs */}
            <div className="w-full h-px bg-border" />
            <section className="section-padding w-full">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
                  Meet Troopod:{" "}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(262 83% 58%) 0%, hsl(0 0% 95%) 100%)' }}>
                    The full-stack, AI-native website growth partner
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
                  {[
                    {
                      icon: Layers,
                      title: "End-to-end Ownership",
                      description: "From strategy to deployment\nto optimization",
                    },
                    {
                      icon: Award,
                      title: "Proven Performance",
                      description: "Positive results across 100+ consumer brands",
                    },
                    {
                      icon: Zap,
                      title: "AI-driven Execution",
                      description: "10X faster execution without compromising quality",
                    },
                  ].map((usp) => (
                    <div
                      key={usp.title}
                      className="bg-card border border-border rounded-lg p-10 md:p-12 text-center"
                    >
                      <div className="flex justify-center mb-6">
                        <usp.icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 whitespace-nowrap">{usp.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                        {usp.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-muted-foreground mt-12 md:mt-16 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
                  Troopod combines human expertise with AI execution to help marketing
                  teams move faster and get real results
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgencyLandingPage;
