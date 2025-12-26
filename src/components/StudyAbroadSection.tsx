import React, { useState } from 'react';
import { GraduationCap, Globe, FileCheck, Award, Plane, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VerticalTimeline from "./VerticalTimeline";

const StudyAbroadSection = () => {
  const countries = [
    "UK", "USA", "Canada", "Germany", "France", "Australia", "Ireland", "Spain"
  ];

  const features = [
    { icon: FileCheck, title: "Free Profile Weightage", description: "Get your admission chances evaluated", colors: ["#2563EB", "#1E40AF"] },
    { icon: GraduationCap, title: "University Shortlisting", description: "3000+ universities across 20+ countries", colors: ["#059669", "#0EA5A9"] },
    { icon: BookOpen, title: "SOP & LOR Support", description: "Expert assistance for applications", colors: ["#7C3AED", "#6D28D9"] },
    { icon: Award, title: "IELTS/TOEFL/PTE Training", description: "Language proficiency preparation", colors: ["#F97316", "#F43F5E"] },
    { icon: Plane, title: "Spot Admissions Drives", description: "Direct university interviews", colors: ["#EC4899", "#DB2777"] },
    { icon: Globe, title: "Visa Guidance", description: "Complete visa support", colors: ["#06B6D4", "#0284C7"] },
  ];

  const universities = [
    "Liverpool John Moores University",
    "Golden Gate University",
    "University of Warwick",
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredUniIndex, setHoveredUniIndex] = useState<number | null>(null);

  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(null);

  return (
    <section id="study-abroad" className="section-padding bg-secondary/30">
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
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Global Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            Study <span className="text-gradient-primary">Abroad</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your education by making the world your campus. Access 3000+ universities 
            across 20+ countries with integrated career counselling + admissions strategy.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "20+", label: "Countries", colors: ["#2563EB", "#1E40AF"] },
            { value: "3000+", label: "Universities", colors: ["#059669", "#0EA5A9"] },
            { value: "UG/PG/PhD", label: "Programs", colors: ["#7C3AED", "#6D28D9"] },
            { value: "FREE", label: "Profile Evaluation", colors: ["#F97316", "#F43F5E"] },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.02 * index, duration: 0.45 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onPointerDown={() => setHoveredIndex(index)}
              onPointerUp={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl p-6 text-center shadow-soft cursor-pointer"
              style={{
                background: hoveredIndex === index
                  ? `linear-gradient(90deg, ${stat.colors[0]}, ${stat.colors[1]})`
                  : undefined,
                color: hoveredIndex === index ? '#ffffff' : undefined,
              }}
            >
              <div className={`text-3xl md:text-4xl font-display font-extrabold mb-2 ${hoveredIndex === index ? 'text-white' : 'text-primary'}`}>
                {stat.value}
              </div>
              <p className={`text-sm font-medium ${hoveredIndex === index ? 'text-white/90' : 'text-muted-foreground'}`}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Countries (auto-scrolling marquee) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Study Destinations
          </h3>
          <div className="overflow-hidden">
            <style>{`
              .marquee-track { display:flex; gap:12px; align-items:center; }
              .marquee { overflow:hidden; }
              @keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
              .marquee-track.animate { animation: marquee-left 22s linear infinite; }
              .marquee-track.animate.paused { animation-play-state: paused; }
            `}</style>

            <div
              className="marquee"
              onMouseEnter={(e) => (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.classList.add('paused')}
              onMouseLeave={(e) => (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.classList.remove('paused')}
              onPointerDown={(e) => (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.classList.add('paused')}
              onPointerUp={(e) => (e.currentTarget.querySelector('.marquee-track') as HTMLElement)?.classList.remove('paused')}
            >
              <div className="marquee-track animate">
                {countries.concat(countries).map((country, i) => (
                  <div key={`${country}-${i}`} className="px-6 py-3 bg-background border border-border rounded-full font-semibold text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer min-w-[120px] text-center">
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const isHovered = hoveredFeatureIndex === index;
            const gradient = `linear-gradient(90deg, ${feature.colors[0]}, ${feature.colors[1]})`;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                onHoverStart={() => setHoveredFeatureIndex(index)}
                onHoverEnd={() => setHoveredFeatureIndex(null)}
                onPointerDown={() => setHoveredFeatureIndex(index)}
                onPointerUp={() => setHoveredFeatureIndex(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-2xl p-6 shadow-soft cursor-pointer"
                style={{ background: isHovered ? gradient : undefined, color: isHovered ? '#fff' : undefined }}
              >
                <div
                  className="p-3 rounded-xl w-fit mb-4"
                  style={{ backgroundColor: isHovered ? `${feature.colors[0]}22` : undefined }}
                >
                  <feature.icon className={`h-6 w-6 ${isHovered ? 'text-white' : 'text-primary'}`} />
                </div>
                <h4 className={`font-display font-bold mb-2 ${isHovered ? 'text-white' : 'text-foreground'}`}>{feature.title}</h4>
                <p className={`text-sm ${isHovered ? 'text-white/90' : 'text-muted-foreground'}`}>{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner Universities Preview — vertical timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-2xl p-8 shadow-soft"
        >
          <h3 className="text-xl font-display font-bold text-center text-foreground mb-6">
            Partner Universities Abroad
          </h3>
          <div className="mb-8">
            <VerticalTimeline items={universities} columns={2} />
          </div>
          <div className="text-center">
            <Button variant="default" size="lg">
              Get Free Profile Evaluation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;
