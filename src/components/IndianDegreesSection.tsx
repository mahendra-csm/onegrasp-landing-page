import React from 'react';
import { GraduationCap, Building2, Laptop, BookOpen, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VerticalTimeline from './VerticalTimeline';

const IndianDegreesSection = () => {
  const programs = [
    { category: "Under Graduate", examples: ["BBA", "BCA", "B.Sc", "BA (Mass Communication)", "B.Com"] },
    { category: "Post Graduate", examples: ["MBA", "MCA", "MA", "M.Sc", "M.Com"] },
    { category: "Doctorate", examples: ["Doctor of Business Administration", "Global DBA", "Ph.D"] },
  ];

  const domains = [
    "Computer Science",
    "Data Science & AI",
    "Digital Marketing",
    "Business Analytics",
    "Management",
    "Law",
    "Healthcare",
    "Commerce",
    "Software Engineering",
    "Cybersecurity"
  ];

  const universities = [
    "IIIT Bangalore",
    "IIM Kozhikode",
    "IIT Delhi",
    "Jain University",
    "D Y Patil University",
    "NMIMS",
    "Chandigarh University",
    "MICA",
    "BIMTECH",
    "SGVU",
    "Manipal University",
    "Amity University"
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
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Indian Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Indian Degree Programs{" "}
            <span className="text-gradient-primary">(Online & On-Campus)</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Career-aligned degree selection from 2000+ on-campus and 150+ online universities.
            <br />
            Not random enrollment — strategic education planning.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-secondary/50 rounded-2xl p-6 text-center">
            <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-display font-extrabold text-primary">2000+</div>
            <p className="text-sm text-muted-foreground">On-Campus Universities</p>
          </div>
          <div className="bg-secondary/50 rounded-2xl p-6 text-center">
            <Laptop className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-display font-extrabold text-primary">150+</div>
            <p className="text-sm text-muted-foreground">Online Universities</p>
          </div>
          <div className="bg-secondary/50 rounded-2xl p-6 text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-display font-extrabold text-primary">UG/PG/Ph.D</div>
            <p className="text-sm text-muted-foreground">All Program Levels</p>
          </div>
          <div className="bg-secondary/50 rounded-2xl p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-display font-extrabold text-primary">Flexible</div>
            <p className="text-sm text-muted-foreground">For Working Professionals</p>
          </div>
        </motion.div>

        {/* Program Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background border border-border rounded-2xl p-6 shadow-soft"
            >
              <h4 className="font-display font-bold text-primary text-lg mb-4">{program.category}</h4>
              <ul className="space-y-2">
                {program.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2 text-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Popular Domains — vertical timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Popular Domains
          </h3>
          <div className="max-w-2xl mx-auto">
            <VerticalTimeline items={domains} columns={2} />
          </div>
        </motion.div>

        {/* Indian Partner Universities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/30 rounded-2xl p-8"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Partner Universities in India
          </h3>
          <div className="mb-8">
            <VerticalTimeline items={universities} columns={2} />
          </div>
          <div className="text-center">
            <Button variant="default" size="lg">
              Explore Degree Programs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndianDegreesSection;
