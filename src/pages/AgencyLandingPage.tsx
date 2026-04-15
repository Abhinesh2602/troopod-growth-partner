import Header from "@/components/Header";
import { Clock, Layers, RefreshCw } from "lucide-react";

const trustLogos = [
  "Agency One",
  "Agency Two",
  "Agency Three",
  "Agency Four",
  "Agency Five",
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgencyLandingPage;
