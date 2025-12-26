import { FileText, Bot, Globe, GraduationCap, BookOpen, Award, Compass, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const StudentDashboardSection = () => {
  const features = [
    {
      icon: FileText,
      title: "5D Career Report",
      description: "Personality, Interests, Motivators, Learning Styles, Skills & Abilities + 15-Year Roadmap"
    },
    {
      icon: Bot,
      title: "AI Career Mentor",
      description: "Customized ChatGPT with 15 free prompts to explore future options"
    },
    {
      icon: Globe,
      title: "Personal Website & Alumni Network",
      description: "Build your digital identity early"
    },
    {
      icon: Compass,
      title: "Entrance Exam Explorer",
      description: "For Engineering, Management, Design, Law, Govt, and more"
    },
    {
      icon: GraduationCap,
      title: "College Explorer",
      description: "Compare Indian & Global programs (On-Campus & Online)"
    },
    {
      icon: Award,
      title: "Study Abroad Profile Weightage",
      description: "Get free evaluation for international admissions"
    },
    {
      icon: BookOpen,
      title: "Career Library",
      description: "Explore 200+ paths across 20 clusters & 100,000 roles"
    },
    {
      icon: Briefcase,
      title: "Career Boosters",
      description: "IELTS, TOEFL, SAT, PTE & professional certifications + 300+ Virtual Internships"
    },
  ];

  return (
    <section id="dashboard" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Your Personal Hub</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-6">
              Student <span className="text-gradient-primary">Dashboard</span>
            </h2>
            
            <div className="relative mb-8">
              <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-full" />
              <div className="pl-8 space-y-4">
                <p className="text-2xl font-display font-bold text-foreground">
                  Know Yourself.
                </p>
                <p className="text-2xl font-display font-bold text-foreground">
                  Shape Your Future.
                </p>
                <p className="text-lg text-muted-foreground">
                  Career Clarity brings Life-Long Confidence
                </p>
              </div>
            </div>
            
            <Button variant="hero" size="xl">
              Access Your Dashboard
            </Button>
          </motion.div>
          
          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-secondary/50 rounded-xl p-5 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors">
                    <feature.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboardSection;
