import { Link } from "react-router-dom";
import colgateLogo from "@/assets/brands/colgate.png";
import damenschLogo from "@/assets/brands/damensch.webp";
import consciousChemistLogo from "@/assets/brands/conscious-chemist.png";
import obviLogo from "@/assets/brands/obvi.png";
import homelaneLogo from "@/assets/brands/homelane.webp";

const brands = [
  { name: "Colgate", logo: colgateLogo, caseStudyLink: "/case-studies#case-study-2" },
  { name: "DaMENSCH", logo: damenschLogo },
  { name: "Conscious Chemist", logo: consciousChemistLogo },
  { name: "Obvi", logo: obviLogo },
  { name: "HomeLane", logo: homelaneLogo },
];

const CTASection = () => {
  return (
    <section className="section-padding text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10">
          Every brand has unique challenges, and we start by understanding
          yours
        </p>

        <a
          href="mailto:hello@troopod.io"
          className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:opacity-90 transition-opacity"
        >
          Tell us about your brand
        </a>
      </div>

      {/* Brands strip */}
      <div className="mt-16 md:mt-20">
        <p className="text-sm font-medium text-muted-foreground tracking-wide mb-10">
          Trusted by 100+ ambitious consumer brands
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {brands.map((brand) => {
            const box = (
              <div
                className={`h-20 w-44 rounded-lg bg-white flex items-center justify-center overflow-hidden ${brand.name === "Conscious Chemist" ? "p-2" : "p-4"} ${brand.caseStudyLink ? "cursor-pointer hover:ring-2 hover:ring-primary/30 transition-all group" : ""}`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`max-w-full object-contain ${brand.name === "Conscious Chemist" ? "scale-[1.663] max-h-full" : brand.name === "Colgate" ? "scale-[3.9] max-h-full" : "max-h-full"} ${brand.caseStudyLink ? "group-hover:opacity-80 transition-opacity" : ""}`}
                />
                {brand.caseStudyLink && (
                  <span className="absolute bottom-1 right-1 text-primary text-[9px] font-medium bg-primary/10 px-1 py-[1px] rounded animate-glow">
                    Case study
                  </span>
                )}
              </div>
            );

            return (
              <div key={brand.name} className="relative">
                {brand.caseStudyLink ? (
                  <Link to={brand.caseStudyLink}>{box}</Link>
                ) : (
                  box
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-16 md:mt-20 text-muted-foreground text-lg md:text-xl lg:text-2xl">
        Great websites aren't built once. They're built through continuous improvement
      </p>
    </section>
  );
};

export default CTASection;
