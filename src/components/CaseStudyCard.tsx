import { ArrowUp, ArrowDown } from "lucide-react";

interface CaseStudyMetric {
  value: string;
  label: string;
  hideArrow?: boolean;
  arrowDown?: boolean;
}

interface TestimonialAuthor {
  name: string;
  position: string;
  photo?: string;
  companyLogo?: string;
}

interface CaseStudyProps {
  index: number;
  title: string;
  aboutBrand?: {
    text: string;
    link?: { label: string; url: string };
  };
  problem: string;
  solution: string;
  showcase?: {
    type: "image" | "video" | "youtube";
    src: string;
    title?: string;
    position?: "center" | "right";
    aspectRatio?: "9/16" | "16/9";
  };
  outcome: string;
  metrics: CaseStudyMetric[];
  testimonial?: string;
  testimonialAuthor?: TestimonialAuthor;
}

const ShowcaseContent = ({ showcase }: { showcase: NonNullable<CaseStudyProps["showcase"]> }) => {
  if (showcase.type === "youtube") {
    return (
      <div className="aspect-video w-full max-w-3xl rounded-lg overflow-hidden border border-border">
        <iframe
          src={showcase.src}
          title="Showcase"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  if (showcase.type === "video") {
    const isPortrait = showcase.aspectRatio === "9/16";
    return (
      <div className={`${isPortrait ? "aspect-[9/16] max-h-[500px]" : "aspect-video w-full max-w-3xl"} rounded-lg overflow-hidden border border-border`}>
        <video
          src={showcase.src}
          className="w-full h-full object-cover"
          controls
          playsInline
        />
      </div>
    );
  }
  return (
    <div className="w-full max-w-3xl rounded-lg overflow-hidden border border-border">
      <img src={showcase.src} alt="Showcase" className="w-full h-auto" />
    </div>
  );
};

const CaseStudyCard = ({
  index,
  title,
  aboutBrand,
  problem,
  solution,
  showcase,
  outcome,
  metrics,
  testimonial,
  testimonialAuthor,
}: CaseStudyProps) => {
  const isShowcaseRight = showcase?.position === "right";

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <span className="text-primary text-sm font-medium tracking-wide uppercase">
          TROOCASE STUDY {index + 1}
        </span>
        <h3
          className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, hsl(0 0% 95%) 0%, hsl(262 83% 58%) 100%)",
          }}
        >
          {title}
        </h3>
      </div>

      {/* Challenge + Solution + Right Showcase (side-by-side on desktop) */}
      <div className={isShowcaseRight ? "md:flex md:items-start md:gap-8" : ""}>
        <div className={isShowcaseRight ? "space-y-8 md:flex-1 md:min-w-0" : "space-y-8"}>
          {aboutBrand && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                About the Brand
              </h4>
              <p className="text-secondary-foreground leading-relaxed">
                {aboutBrand.link
                  ? aboutBrand.text.split(`{${aboutBrand.link.label}}`).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <a href={aboutBrand.link!.url} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">
                            {aboutBrand.link!.label}
                          </a>
                        )}
                      </span>
                    ))
                  : aboutBrand.text}
              </p>
            </div>
          )}

          <div>
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Challenge
            </h4>
            <p className="text-secondary-foreground leading-relaxed">{problem}</p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
              What Troopod Did
            </h4>
            <p className="text-secondary-foreground leading-relaxed whitespace-pre-line">
              {solution}
            </p>
          </div>

          {/* Center-positioned showcase (between solution and outcome) */}
          {showcase && !isShowcaseRight && (
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3 text-center">
                {showcase.title || "Showcase"}
              </h4>
              <div className="flex flex-col items-center">
                <ShowcaseContent showcase={showcase} />
              </div>
            </div>
          )}
        </div>

        {/* Right-positioned showcase */}
        {showcase && isShowcaseRight && (
          <div className="md:w-[504px] md:shrink-0 flex flex-col items-center mt-8 md:mt-0">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
              {showcase.title || "Showcase"}
            </h4>
            <ShowcaseContent showcase={showcase} />
          </div>
        )}
      </div>

      {/* Outcome + Metrics + Testimonial (always full width) */}
      <div className={testimonial ? "grid grid-cols-1 md:flex md:items-center md:gap-8 -mt-2" : "-mt-2"}>
        <div className={testimonial ? "space-y-8 md:flex-1 md:min-w-0" : "space-y-8"}>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
              Outcome
            </h4>
            <p className="text-primary font-medium text-lg whitespace-pre-line">{outcome}</p>
          </div>

          {metrics.length > 0 && (
            metrics.length === 1 ? (
              <div className="flex">
                <div className="bg-card border border-border rounded-lg p-5 text-center w-full max-w-[268px]">
                  <div className="flex items-center justify-center gap-1.5">
                    <p className="text-3xl md:text-4xl font-bold text-primary drop-shadow-[0_0_4px_hsl(262_83%_58%/0.15)]">
                      {metrics[0].value}
                    </p>
                    {!metrics[0].hideArrow && (
                      metrics[0].arrowDown ? (
                        <ArrowDown className="text-red-400" size={22} strokeWidth={2.5} />
                      ) : (
                        <ArrowUp className="text-green-400" size={22} strokeWidth={2.5} />
                      )
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {metrics[0].label}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]">
                {metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg p-5 text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <p className="text-3xl md:text-4xl font-bold text-primary drop-shadow-[0_0_4px_hsl(262_83%_58%/0.15)]">
                        {metric.value}
                      </p>
                      {!metric.hideArrow && (
                        metric.arrowDown ? (
                          <ArrowDown className="text-red-400" size={22} strokeWidth={2.5} />
                        ) : (
                          <ArrowUp className="text-green-400" size={22} strokeWidth={2.5} />
                        )
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {testimonial && (
          <div className="bg-card border border-border rounded-lg p-6 md:p-8 flex flex-col gap-5 md:w-[542px] md:shrink-0">
            <p className="text-secondary-foreground leading-relaxed italic">{testimonial}</p>
            {testimonialAuthor && (
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                {testimonialAuthor.photo && (
                  <img
                    src={testimonialAuthor.photo}
                    alt={testimonialAuthor.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{testimonialAuthor.name}</p>
                  {testimonialAuthor.position && (
                    <p className="text-xs text-muted-foreground">{testimonialAuthor.position}</p>
                  )}
                </div>
                {testimonialAuthor.companyLogo && (
                  <img
                    src={testimonialAuthor.companyLogo}
                    alt="Company"
                    className="h-6 object-contain"
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;
