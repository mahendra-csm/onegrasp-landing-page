import { Brain, Award, CheckCircle, FileText, Bot, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AssessmentTable from "./AssessmentTable";
import GradeOfferingsTable from "./GradeOfferingsTable";

const CareerCounsellingSection = () => {
  const keyAdvantages = [
    { icon: FileText, text: "30+ Page 5D Career Report" },
    { icon: Award, text: "15-Year Execution Roadmap" },
    { icon: Bot, text: "AI Career Mentor + Expert Counsellor" },
    { icon: Users, text: "Personalized Student Dashboard" },
  ];

  const useCases = [
    { grade: "Class 6–10", description: "Stream & Subject Selection" },
    { grade: "Class 11–12", description: "Course, Entrance Exams & Admissions Clarity" },
    { grade: "Graduates", description: "Specialization & Career Direction" },
    { grade: "Professionals", description: "Career Switch, Growth, or Role Alignment" },
  ];

  return (
    <section id="career-test" className="section-padding bg-background">
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
            <Brain className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Scientific Assessment</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Career Counselling{" "}
            <span className="text-gradient-primary">+ Psychometric Test</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A scientific, multi-dimensional career assessment combining psychology, aptitude, 
            interests, motivators, and learning styles.
          </p>
        </motion.div>

        {/* 5D Assessment Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-6">
            What We Analyze — The 5 Dimensions
          </h3>
        </motion.div>

        {/* Assessment Table */}
        <AssessmentTable />

        {/* Use Cases & Key Advantages */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/50 rounded-2xl p-8"
          >
            <h4 className="text-xl font-display font-bold text-foreground mb-6">
              Who Is This For?
            </h4>
            <div className="space-y-4">
              {useCases.map((useCase) => (
                <div key={useCase.grade} className="flex items-start gap-4 p-4 bg-background rounded-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">{useCase.grade}</h5>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 rounded-2xl p-8"
          >
            <h4 className="text-xl font-display font-bold text-foreground mb-6">
              Key Advantages
            </h4>
            <div className="space-y-4 mb-8">
              {keyAdvantages.map((advantage) => (
                <div key={advantage.text} className="flex items-center gap-4 p-4 bg-background rounded-xl">
                  <div className="p-2 bg-primary rounded-lg">
                    <advantage.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{advantage.text}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Special Offer</p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl font-display font-extrabold text-accent">₹2,500</span>
                <span className="text-lg text-muted-foreground line-through">₹5,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Career Counselling + Psychometric Test + Free Student Dashboard
              </p>
              <Button variant="accent" size="lg" className="w-full">
                Book Your Assessment Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Grade-wise Offerings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Career Counselling + Admissions Solutions{" "}
            <span className="text-primary">For Students & Working Professionals</span>
          </h3>
          <GradeOfferingsTable />
        </motion.div>
      </div>
    </section>
  );
};

export default CareerCounsellingSection;
