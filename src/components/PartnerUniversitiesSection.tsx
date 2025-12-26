import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const PartnerUniversitiesSection = () => {
  const indianUniversities = [
    "IIIT Bangalore",
    "IIM Kozhikode",
    "IIT Delhi",
    "Jain University",
    "NMIMS",
    "Chandigarh University",
    "D Y Patil University",
    "MICA",
    "O.P. Jindal Global University",
    "Mahavir Mahavidyalaya",
    "SGVU",
    "BIMTECH",
    "Manipal University"
  ];

  const abroadUniversities = [
    "Golden Gate University",
    "Liverpool John Moores University",
    "Liverpool Business School",
    "Michigan State University",
    "Johnson & Wales University",
    "James Cook University",
    "Deakin University",
    "University of Arizona",
    "University of Bridgeport",
    "Wharton Business School",
    "University Canada West",
    "SSBM Geneva"
  ];

  const accreditations = [
    "BCPA, India",
    "ACCPH, UK",
    "APCDA",
    "Edumilestones",
    "CCCIS",
    "CCA (Certified Career Analyst)"
  ];

  return (
    <section id="partners" className="section-padding bg-secondary/30">
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
            <Building2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Network</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Partner <span className="text-gradient-primary">Universities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partnered with top universities in India and across the globe to provide 
            you with the best education opportunities.
          </p>
        </motion.div>

        {/* Accreditations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-6 shadow-soft mb-12"
        >
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
            Accredited & Certified By
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {accreditations.map((acc) => (
              <span
                key={acc}
                className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm font-medium text-foreground"
              >
                {acc}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Universities Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Indian Universities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h3 className="text-2xl font-display font-bold text-primary">INDIAN</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {indianUniversities.map((uni) => (
                <span
                  key={uni}
                  className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
                >
                  {uni}
                </span>
              ))}
              <span className="px-4 py-2 bg-primary/10 rounded-lg text-sm font-semibold text-primary">
                + Many More
              </span>
            </div>
          </motion.div>

          {/* Abroad Universities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background rounded-2xl p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-accent rounded-full" />
              <h3 className="text-2xl font-display font-bold text-accent">ABROAD</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {abroadUniversities.map((uni) => (
                <span
                  key={uni}
                  className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium text-foreground hover:bg-accent/10 transition-colors"
                >
                  {uni}
                </span>
              ))}
              <span className="px-4 py-2 bg-accent/10 rounded-lg text-sm font-semibold text-accent">
                + Many More
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversitiesSection;
