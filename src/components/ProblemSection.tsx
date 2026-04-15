import { Search, Clock, Users } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "Lack of clarity",
    description: "What's actually broken\nisn't clear",
  },
  {
    icon: Clock,
    title: "Slow execution",
    description: "Even small changes\ntake weeks",
  },
  {
    icon: Users,
    title: "High friction",
    description: "Too many stakeholders\ninvolved",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center leading-tight tracking-tight">
          <span className="text-gradient">Improving website experience</span>{" "}
          is harder than it should be
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
          Marketing moves daily. Website execution doesn't
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
