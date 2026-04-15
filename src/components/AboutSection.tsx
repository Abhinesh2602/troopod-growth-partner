import { Layers, Award, Zap } from "lucide-react";
import shopifyPlusWhite from "@/assets/platforms/shopify-plus-white.svg";
import woocommerceWhite from "@/assets/platforms/woocommerce-white.svg";
import magentoWhite from "@/assets/platforms/magento-white.png";
import bigcommerceWhite from "@/assets/platforms/bigcommerce-white.png";
import shopifyPlusIcon from "@/assets/platforms/shopify-plus-icon.png";

const platformLogos = [
  { name: "Shopify", logo: shopifyPlusWhite, height: 36, noFilter: true },
  { name: "Shopify Plus", logo: shopifyPlusIcon, height: 36, noFilter: false },
  { name: "BigCommerce", logo: bigcommerceWhite, height: 36, noFilter: false, offsetY: 0 },
  { name: "Magento", logo: magentoWhite, height: 36, noFilter: false, offsetY: 2 },
  { name: "WooCommerce", logo: woocommerceWhite, height: 184, noFilter: false, offsetY: 4 },
];

const usps = [
  {
    icon: Layers,
    title: "End-to-end Ownership",
    description:
      "From strategy to deployment\nto optimization",
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
];

const AboutSection = () => {
  return (
    <section className="section-padding !pb-5 md:!pb-7 lg:!pb-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
          Meet Troopod:{" "}
          <span className="text-gradient">
            The full-stack, AI-native website growth partner
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {usps.map((usp) => (
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

        {/* Divider */}
        <div className="flex justify-center mt-10 md:mt-14">
          <hr className="border-t border-border w-[25%]" />
        </div>

        {/* Platform logos */}
        <div className="mt-7 md:mt-10 text-center bg-background">
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase" style={{ marginBottom: '25px' }}>
            Compatible with Modern Commerce Platforms
          </p>
          <div className="flex flex-wrap justify-between items-center w-full">
            {platformLogos.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-center overflow-hidden"
                style={{ height: '36px' }}
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className={`w-auto object-contain ${platform.noFilter ? '' : 'brightness-0 invert'}`}
                  style={{ height: `${platform.height}px`, transform: platform.offsetY ? `translateY(${platform.offsetY}px)` : undefined, opacity: 0.21 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
