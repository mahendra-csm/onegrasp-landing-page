import { Rocket, Lightbulb, Users, DollarSign, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StartupsSection = () => {
  const supportAreas = [
    {
      icon: Lightbulb,
      title: "Idea Incubation & Mentoring",
      features: ["Structured Idea Validation", "Expert Mentorship Network", "Curated Curriculum"]
    },
    {
      icon: DollarSign,
      title: "Access to Funding & Capital",
      features: ["Strategic Funding Roadmap", "Exclusive Investor Introductions", "Grant and Subsidy Navigation"]
    },
    {
      icon: Rocket,
      title: "Product Launch & Scaling Support",
      features: ["Go-to-Market Strategy", "Operational Scaling Toolkit", "Global Expansion Readiness"]
    },
    {
      icon: Handshake,
      title: "Networking & Investor Connect",
      features: ["High-Value Connect Events", "Ecosystem Integration", "Strategic Partnerships"]
    },
  ];

  const useCases = [
    "Student Founders",
    "Early-stage Startups",
    "Academic Research Commercialization",
    "Side Project to Startup Transition"
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Entrepreneurship</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Startups Support{" "}
            <span className="text-gradient-primary">& Investors Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A structured ecosystem to take your idea from incubation to investor funding. 
            Not isolated mentoring — comprehensive startup support.
          </p>
        </motion.div>

        {/* Support Areas Grid — premium icon cards */}
        <div className="relative mb-16">
          {/* Horizontal accent line */}
          <div className="hidden lg:block absolute left-8 right-8 top-28 h-1 bg-primary/10 rounded-full -z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {supportAreas.map((area, index) => {
              const ACCENTS = ['#2563EB', '#059669', '#7C3AED', '#F97316'];
              const color = ACCENTS[index % ACCENTS.length];
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="group relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-transform"
                >
                  {/* subtle gradient overlay on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity"
                    style={{ background: `linear-gradient(120deg, ${color}10, transparent 60%)` }}
                  />

                  {/* numbered badge */}
                  <div className="absolute -top-3 right-6 rounded-full h-8 w-8 flex items-center justify-center font-bold shadow-md"
                    style={{ background: color, color: '#fff' }}>
                    {index + 1}
                  </div>

                  {/* Icon box */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <div className="w-20 h-20 rounded-2xl shadow-xl flex items-center justify-center transition-transform group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-foreground text-center text-lg mb-2 relative z-10">{area.title}</h4>
                  <p className="text-sm text-muted-foreground text-center relative z-10">{area.features[0]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-8 shadow-soft text-center"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6">
            Who Can Benefit?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-foreground"
              >
                {useCase}
              </span>
            ))}
          </div>
          <Button variant="accent" size="lg">
            Connect with Investors
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
