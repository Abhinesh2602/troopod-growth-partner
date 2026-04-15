import { ImageIcon } from "lucide-react";
import beforeNeesh from "@/assets/solutions/before-neesh.png";
import afterNeesh from "@/assets/solutions/after-neesh.png";
import beforeRabitat from "@/assets/solutions/before-rabitat.jpeg";

interface Solution {
  title: string;
  problem: string;
  whatWeDo: string;
  showcase: "image" | "video" | "before-after" | "side-video" | "before-after-video" | "single-video";
  showcaseNote?: string;
  videoUrl?: string;
  beforeImage?: string;
  afterImage?: string;
  afterVideoUrl?: string;
  impact: string;
  commonTasks?: string[];
}

const solutions: Solution[] = [
  {
    title: "Real-time Website Performance Optimization",
    problem:
      "Slow websites hurt conversion, and often worsen with every change",
    whatWeDo:
      "Troopod uses its website performance agent to fix technical performance issues, continuously track the impact of every website change, and autonomously resolve performance slowdowns.",
    showcase: "before-after",
    beforeImage: beforeNeesh,
    afterImage: afterNeesh,
    impact: "2X faster website loading speed within a day",
  },
  {
    title: "Rapid Website & Feature Development",
    problem:
      "A typical website revamp takes months, slowing down marketing momentum",
    whatWeDo:
      "Troopod combines strategic consulting with its website development agent to rapidly build and revamp landing pages, websites, and growth-focused features end-to-end, from design to CRO-ready execution.",
    showcase: "single-video",
    videoUrl: "/videos/solution2-demo.mp4",
    impact: "CRO-ready landing page built and deployed within 24 hrs",
  },
  {
    title: "End-to-End Website Management",
    problem:
      "Website management is fragmented across teams and vendors, slowing down execution.",
    whatWeDo:
      "Troopod acts as your dedicated website team, managing day-to-day website operations, coordinating releases, and implementing changes quickly using its AI-powered development agents.\n\nFrom small content updates to layout refinements and offer changes, every request is executed with speed, structure, and performance in mind.",
    showcase: "single-video",
    videoUrl: "/videos/solution3-showcase.mp4",
    impact:
      "Website updates executed at the speed of an in-house tech team without the overhead",
    commonTasks: [
      "Text and copy updates",
      "Banner and offer changes",
      "Layout refinements (spacing, padding, alignment)",
      "Icon and asset updates",
      "CTA optimizations",
    ],
  },
  {
    title: "Ad → Landing Page Personalization at Scale",
    problem:
      "Hundreds of ad variations drive traffic to generic landing pages, leading to low ROI",
    whatWeDo:
      "Troopod uses its personalization agent to automatically create ad-specific landing pages at scale, turning each ad into a highly relevant landing experience in under two minutes.",
    showcase: "video",
    videoUrl: "https://www.youtube.com/embed/8OVBb2CJuZg",
    impact:
      "Personalized landing pages delivering up to 3X conversion uplift",
  },
  {
    title: "High-Impact CRO Experimentation",
    problem:
      "Most CRO experiments are slow and fail to deliver meaningful impact",
    whatWeDo:
      "Troopod uses its CRO intelligence and development agents to identify high-impact opportunities, build a clear action plan, and execute changes quickly to deliver measurable results.",
    showcase: "before-after-video",
    beforeImage: beforeRabitat,
    afterVideoUrl: "/videos/solution4-after.mp4",
    impact: "15% increment in Revenue within 2 weeks",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {solutions.map((solution, index) => (
          <div key={index}>
            {index > 0 && <hr className="border-border mb-12 md:mb-16" />}
            <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-primary text-sm font-medium tracking-wide uppercase">
                TROOSOLUTION {index + 1}
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(0 0% 95%) 0%, hsl(262 83% 58%) 100%)' }}>
                {solution.title}
              </h3>
            </div>

            {solution.showcase === "before-after" ? (
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Problem
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    What Troopod does
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.whatWeDo}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Before
                    </h4>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={solution.beforeImage} alt="Before" className="w-full h-auto" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      After
                    </h4>
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img src={solution.afterImage} alt="After" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Impact
                  </h4>
                  <p className="text-primary font-medium text-lg">
                    {solution.impact}
                  </p>
                </div>
              </div>
            ) : solution.showcase === "video" ? (
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Problem
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    What Troopod does
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.whatWeDo}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Agent Showcase
                  </h4>
                </div>
                <div className="flex justify-center">
                  {solution.videoUrl?.includes("youtube") ? (
                    <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                      <iframe
                        src={solution.videoUrl}
                        title={solution.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="aspect-[9/16] max-h-[600px] rounded-lg overflow-hidden border border-border">
                      <video
                        src={solution.videoUrl}
                        title={solution.title}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Impact
                  </h4>
                  <p className="text-primary font-medium text-lg">
                    {solution.impact}
                  </p>
                </div>
              </div>
            ) : solution.showcase === "single-video" ? (
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Problem
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    What Troopod does
                  </h4>
                  <div className="text-secondary-foreground leading-relaxed space-y-3">
                    {solution.whatWeDo.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                {solution.commonTasks && (
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Common Tasks
                    </h4>
                    <ul className="space-y-2">
                      {solution.commonTasks.map((task, i) => (
                        <li key={i} className="text-secondary-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    {solution.commonTasks ? "Work Showcase" : "Agent Showcase"}
                  </h4>
                </div>
                {solution.commonTasks ? (
                  <div className="w-full">
                    <div className="rounded-lg overflow-hidden border border-border aspect-[1920/906]">
                      <video
                        src={solution.videoUrl}
                        title={solution.title}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-[35%]">
                    <div className="rounded-lg overflow-hidden border border-border aspect-[9/16]">
                      <video
                        src={solution.videoUrl}
                        title={solution.title}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Impact
                  </h4>
                  <p className="text-primary font-medium text-lg">
                    {solution.impact}
                  </p>
                </div>
              </div>
            ) : solution.showcase === "before-after-video" ? (
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Problem
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    What Troopod does
                  </h4>
                  <p className="text-secondary-foreground leading-relaxed">
                    {solution.whatWeDo}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-16 max-w-[70%] mx-auto">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Before
                    </h4>
                    <div className="rounded-lg overflow-hidden border border-border aspect-[9/16]">
                      <img src={solution.beforeImage} alt="Before" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      After
                    </h4>
                    <div className="rounded-lg overflow-hidden border border-border aspect-[9/16]">
                      <video
                        src={solution.afterVideoUrl}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Impact
                  </h4>
                  <p className="text-primary font-medium text-lg">
                    {solution.impact}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Problem
                    </h4>
                    <p className="text-secondary-foreground leading-relaxed">
                      {solution.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      What Troopod does
                    </h4>
                    <p className="text-secondary-foreground leading-relaxed">
                      {solution.whatWeDo}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                      Impact
                    </h4>
                    <p className="text-primary font-medium text-lg">
                      {solution.impact}
                    </p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg flex items-center justify-center min-h-[280px]">
                  <div className="text-center text-muted-foreground p-8">
                    <ImageIcon className="w-8 h-8 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">{solution.showcaseNote}</p>
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
