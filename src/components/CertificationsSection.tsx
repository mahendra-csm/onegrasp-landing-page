import { Award, Briefcase, Code, TrendingUp, Database, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CertificationsSection = () => {
  const domains = [
    { icon: Code, name: "AI & Machine Learning", description: "Future-ready AI skills" },
    { icon: Database, name: "Data Science", description: "Analytics & insights" },
    { icon: Megaphone, name: "Digital Marketing", description: "Growth & strategy" },
    { icon: TrendingUp, name: "Management", description: "Leadership skills" },
    { icon: Briefcase, name: "Software & Technology", description: "Tech development" },
    { icon: Award, name: "Business Analytics", description: "Data-driven decisions" },
  ];

  const useCases = [
    "Skill gap bridging for career advancement",
    "Resume & profile strengthening",
    "Career switching support",
    "Industry-aligned, future-skills focused training"
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
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Skill Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Certifications{" "}
            <span className="text-gradient-primary">& Internships</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access 10,000+ industry-aligned certifications and 300+ virtual internships 
            to build future-ready skills and strengthen your profile.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
        >
          <div className="bg-background rounded-2xl p-8 text-center shadow-soft">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-2">
              10,000+
            </div>
            <p className="text-muted-foreground font-medium">Certifications</p>
          </div>
          <div className="bg-background rounded-2xl p-8 text-center shadow-soft">
            <div className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-2">
              300+
            </div>
            <p className="text-muted-foreground font-medium">Virtual Internships</p>
          </div>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background rounded-2xl p-6 shadow-soft card-hover"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                <domain.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">{domain.name}</h4>
              <p className="text-sm text-muted-foreground">{domain.description}</p>
            </motion.div>
          ))}
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
            Why Get Certified?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm font-medium text-foreground"
              >
                {useCase}
              </span>
            ))}
          </div>
          <Button variant="default" size="lg">
            Explore Certifications
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
