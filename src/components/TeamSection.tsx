import { User } from "lucide-react";
import jyotishkoImg from "@/assets/team/jyotishko.jpeg";
import brendaImg from "@/assets/team/brenda.png";
import zviImg from "@/assets/team/zvi.png";
import neerajImg from "@/assets/team/neeraj.jpeg";
import vinitImg from "@/assets/team/vinit.jpeg";
import rahulImg from "@/assets/team/rahul.jpeg";

const teamMembers = [
  { id: 1, name: "Neeraj Joshi", title: "CEO @ Troopod", bio: "Early product at Spinny ($2B Giant)", photo: neerajImg, objectPosition: "center 20%", scale: 1.45 },
  { id: 2, name: "Rahul Bhola", title: "CTO @ Troopod", bio: "Early tech at Lenskart ($6B giant)", photo: rahulImg, objectPosition: "center 20%", scale: 1.0 },
  { id: 3, name: "Vinit Singh", title: "CBO @ Troopod", bio: "Early growth at Spinny ($2B Giant)", photo: vinitImg, objectPosition: "center 20%", scale: 1.0 },
  { id: 4, name: "Jyotishko Dutta", title: "Product Advisor", bio: "Digital Lead @ Shopify, Ex-Allbirds", photo: jyotishkoImg, objectPosition: "center 20%" },
  { id: 5, name: "Brenda Lando Fridman", title: "GTM Advisor", bio: "Partner Stage 2 Capital, GTM Fund", photo: brendaImg, objectPosition: "center 20%", scale: 1.075 },
  { id: 6, name: "Zvi Cole", title: "Product Advisor", bio: "Founder ZMG Advisors, Ex-Revlon, Nivea", photo: zviImg, objectPosition: "center 15%", scale: 1.175 },
  { id: 7, name: "New Advisor", title: "Advisor", bio: "Details coming soon", photo: "", objectPosition: "center 20%" },
  { id: 8, name: "New Advisor", title: "Advisor", bio: "Details coming soon", photo: "", objectPosition: "center 20%" },
];

const founders = teamMembers.filter((m) => m.id <= 3);
const advisors = teamMembers.filter((m) => m.id > 3);

const TeamSection = () => {
  return (
    <section className="section-padding text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
          <span className="text-gradient">Built by operators</span>{" "}
          who've owned growth at billion-dollar consumer brands
        </h2>

        <div className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto justify-items-center">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-xl border border-border bg-secondary/40 overflow-hidden flex flex-col"
              >
                {/* Photo placeholder */}
                <div className="aspect-[3/4] bg-secondary/60 flex items-center justify-center overflow-hidden">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: member.objectPosition || "top", transform: member.scale ? `scale(${member.scale})` : undefined }} />
                  ) : (
                    <User className="w-12 h-12 text-muted-foreground/40" />
                  )}
                </div>
                {/* Info */}
                <div className="p-4 text-left space-y-1">
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-primary/80">{member.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
