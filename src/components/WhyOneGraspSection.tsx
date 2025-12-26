import { Target, Brain, Clock, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const WhyOneGraspSection = () => {
  const reasons = [
    {
      icon: Target,
      title: "One-Stop Solution",
      description: "From career clarity → education → skills → global exposure → startups. Everything under one roof."
    },
    {
      icon: Brain,
      title: "Scientific + AI-Driven + Human Expert",
      description: "Perfect blend of proven psychological frameworks, AI intelligence, and expert counsellor guidance."
    },
    {
      icon: Clock,
      title: "Long-Term Roadmap",
      description: "15-year execution plan, not short-term counselling. We think about your entire career journey."
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description: "Every student gets a dedicated counsellor, personalized dashboard, and tailored recommendations."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Serving since 2010 with 98.6% report accuracy. Trusted by thousands of students and parents."
    },
    {
      icon: TrendingUp,
      title: "Career Transition Support",
      description: "Job portal access, interview preparation, resume building, and high-performance coaching."
    },
  ];

  const stats = [
    { value: "₹1.23 Cr", label: "Highest Salary Package" },
    { value: "433%", label: "Highest Salary Hike" },
    { value: "2M+", label: "Learners Supported" },
    { value: "300+", label: "Hiring Partners" },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
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
            <span className="text-sm font-semibold text-primary">Our Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Why <span className="text-gradient-primary">OneGrasp?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            360° Career Support — One stop solution to search for jobs, enhance your resume, 
            and prepare for interviews.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-display font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-secondary/50 rounded-2xl p-8 card-hover"
            >
              <div className="p-4 bg-primary rounded-xl w-fit mb-6">
                <reason.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="font-display font-bold text-foreground text-xl mb-3">
                {reason.title}
              </h4>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOneGraspSection;
