import { Award, BookOpen, Users, Presentation, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ScientificEventsSection = () => {
  const eventTypes = [
    { icon: Globe, name: "International Conferences", description: "Global research exposure", accent: '#2563EB', badge: 'Global' },
    { icon: Award, name: "Awards & Recognitions", description: "Celebrate academic excellence", accent: '#F59E0B', badge: 'Prestige' },
    { icon: Users, name: "FDPs (Faculty Development)", description: "Professional growth for educators", accent: '#059669', badge: 'Faculty' },
    { icon: Presentation, name: "Workshops", description: "Hands-on skill building", accent: '#7C3AED', badge: 'Practical' },
  ];

  const domains = [
    "Engineering & Technology",
    "Health & Medical Sciences",
    "Business & Economics",
    "Education",
    "Social Sciences & Humanities",
    "Physical & Life Sciences",
    "Mathematics & Data Science",
    "Agriculture & Food Sciences",
    "Arts, Culture & Communication",
    "Interdisciplinary & Emerging Fields"
  ];

  return (
    <section className="section-padding bg-background">
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
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Academic Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Scientific <span className="text-gradient-primary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your academic profile through international conferences, awards,
            <br />
            faculty development programs, and research workshops.
          </p>
        </motion.div>

        {/* Event Types — premium interactive cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="relative rounded-2xl p-6 bg-gradient-to-b from-white/60 to-white/30 dark:from-[#071022]/60 dark:to-[#071022]/30 overflow-hidden"
            >
              <div className="absolute -inset-0.5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(120deg, ${event.accent}22, transparent 40%)` }} />

              <motion.div whileHover={{ scale: 1.02 }} className="relative z-10 flex flex-col items-center text-center p-4">
                {/* ribbon badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: event.accent }}>
                  {event.badge}
                </div>

                <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4 shadow-xl" style={{ background: `linear-gradient(135deg, ${event.accent}, ${event.accent}99)` }}>
                  <event.icon className="h-8 w-8 text-white" />
                </div>

                <h4 className="font-display font-bold text-foreground mb-2">{event.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                <div className="flex gap-3 items-center">
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-foreground">300+</div>
                    <div className="text-xs text-muted-foreground">Universities</div>
                  </div>
                  <div className="h-0.5 w-6 bg-border/40" />
                  <div className="text-center">
                    <div className="text-2xl font-extrabold text-foreground">20+</div>
                    <div className="text-xs text-muted-foreground">Countries</div>
                  </div>
                </div>

                <motion.div whileHover={{ y: -4 }} className="mt-6">
                  <button className="px-5 py-2 rounded-full bg-transparent border-2 border-[rgba(0,0,0,0.06)] hover:border-transparent" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}>
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Domains */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 rounded-2xl p-8"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Research Domains Covered
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-4 py-2 bg-background rounded-lg text-sm font-medium text-foreground shadow-sm"
              >
                {domain}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Button variant="default" size="lg">
              Explore Upcoming Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScientificEventsSection;
