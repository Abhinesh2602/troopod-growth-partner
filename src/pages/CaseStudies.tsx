import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import CaseStudyCard from "@/components/CaseStudyCard";
import troopodLogo from "@/assets/troopod-logo.png";
import avantikaPhoto from "@/assets/team/avantika.jpeg";
import nxtfaceLogo from "@/assets/brands/nxtface.png";

const caseStudies = [
  {
    title: "How a fast-growing prescription skincare brand increased revenue by 17% in 30 days",
    aboutBrand: {
      text: "{Formial Labs} is a doctor-led, personalized prescription skincare brand founded in 2024.",
      link: { label: "Formial Labs", url: "https://formial.in/products/recurring-customer-2b" },
    },
    problem:
      "The brand wanted to increase revenue while driving stronger adoption of its 2-month subscription model. The product page was not clearly prioritizing subscription purchases, and users lacked enough trust and clarity to commit confidently.",
    solution:
      "Troopod with the help of its dev agent redesigned the product page with a subscription-first strategy.\n\nKey optimizations included:\n1. Positioning the 2-month subscription model as the primary and recommended option.\n2. Adding trust badges, reviews, and credibility markers.\n3. Introducing customer testimonials with before & after imagery.\n4. Streamlining the form and checkout flow to reduce friction.\n\nThe product page was rebuilt to guide users more clearly toward subscription purchase decisions.",
    showcase: {
      type: "video" as const,
      src: "/videos/case-study-3-showcase.mov",
      title: "Product Page Showcase",
    },
    outcome: "Significant improvements across key metrics within 30 days",
    metrics: [
      { value: "20%", label: "Bounce Rate", arrowDown: true },
      { value: "10%", label: "Conversion Rate" },
      { value: "17%", label: "Revenue Increase" },
    ],
  },
  {
    title: "How a Colgate portfolio personal care brand achieved 1.5X conversion in 30 days",
    aboutBrand: {
      text: "{Bombay Shaving Company} is a $100M personal care brand in the men's grooming category.",
      link: { label: "Bombay Shaving Company", url: "https://www.bombayshavingcompany.com/products/full-body-trimmer-spl-edition" },
    },
    problem:
      "Users were coming from rich video experiences, but landing on static product pages. The transition felt disconnected.",
    solution:
      "Troopod identified a clear intent gap: users were discovering the product through immersive Instagram videos, but the landing page offered no similar visual experience.\n\nTo bridge this gap, Troopod:\n1. Launched a shoppable video feed to mirror the ad experience on the page.\n2. Introduced a scroll-triggered parallax experience that dynamically revealed product dimensions and details.\n\nThe page experience now matched the way users were discovering the product.",
    outcome: "The enhanced experience delivered a 1.5X increase in conversion rate within 30 days",
    metrics: [
      { value: "27%", label: "Session Time" },
      { value: "50%", label: "Add-to-Cart Rate" },
      { value: "1.5X", label: "Conversion Rate" },
    ],
    showcase: {
      type: "video" as const,
      src: "/videos/case-study-1-showcase.mp4",
      title: "Landing Page Showcase",
      position: "right" as const,
      aspectRatio: "9/16" as const,
    },
  },
  {
    title: "How a $50M traditional company launches CRO-ready landing pages in 1 day",
    aboutBrand: {
      text: "{NXTFACE} is a DTC skincare brand launched by Naturals Salon & Spa, a leading salon chain in India.",
      link: { label: "NXTFACE", url: "https://nxtface.com/collections/face-serums/products/nxtface-3x-sph-spf-50-pa-30ml?variant=42850839199809" },
    },
    problem:
      "The brand needed to launch CRO-optimized landing pages quickly to support ongoing marketing campaigns.\n\nInternal processes and development timelines were slowing down execution.",
    solution:
      "Troopod combines strategic consulting with its website development agent to build CRO-ready landing pages from scratch within a day.\n\nThe agent intelligently edits and develops UI, UX, content, and features based on real performance data and past CRO learnings ensuring every change is grounded in what has historically driven conversion uplift.\n\nEach page is structured for clarity, speed, and conversion without compromising site performance.",
    showcase: {
      type: "video" as const,
      src: "/videos/case-study-2-showcase.mp4",
      title: "Landing Page Showcase",
      position: "right" as const,
      aspectRatio: "9/16" as const,
    },
    outcome: "1. Landing pages now launch within 1 day\n2. Faster campaign execution",
    metrics: [
      { value: "1 Day", label: "Time to Launch", hideArrow: true },
    ],
    testimonial: "\"Troopod built our entire website from scratch and transformed our product pages into high-converting sales pages incredibly fast without compromising site speed. Truly professional, proactive, and results-driven\"",
    testimonialAuthor: {
      name: "Avantika Chaudhary",
      position: "",
      photo: avantikaPhoto,
      companyLogo: nxtfaceLogo,
    },
  },
];

const CaseStudies = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <section className="section-padding text-center">
          <div className="max-w-6xl mx-auto flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-1 py-20 md:py-28">
              <img src={troopodLogo} alt="Troopod" className="h-20 md:h-28" />
              <p className="text-lg md:text-xl font-medium bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, hsl(0 0% 95%) 0%, hsl(262 83% 58%) 100%)' }}>
                AI-native website growth partner
              </p>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
              TrooCase Studies
            </p>
          </div>
        </section>

        <hr className="border-border max-w-6xl mx-auto" />

        <section className="section-padding">
          <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={index} id={`case-study-${index + 1}`}>
                {index > 0 && <hr className="border-border mb-12 md:mb-16" />}
                <CaseStudyCard
                  index={index}
                  title={cs.title}
                  aboutBrand={cs.aboutBrand}
                  problem={cs.problem}
                  solution={cs.solution}
                  showcase={cs.showcase}
                  outcome={cs.outcome}
                  metrics={cs.metrics}
                  testimonial={cs.testimonial}
                  testimonialAuthor={cs.testimonialAuthor}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CaseStudies;
