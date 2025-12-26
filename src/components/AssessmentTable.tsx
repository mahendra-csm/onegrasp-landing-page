import { Brain, Users, Lightbulb, Briefcase, Cog } from "lucide-react";
import { motion } from "framer-motion";

const AssessmentTable = () => {
  const assessments = [
    {
      area: "1. Career Personality",
      icon: Users,
      whatWeAnalyze: {
        title: "Self-Understanding:",
        description: "We assess your most dominant preferences—from how you focus your energy to how you make decisions based on logic."
      },
      yourBenefit: {
        title: "Aligns You:",
        description: "Expand your career options in alignment with your unique personality for a more rewarding career choice."
      }
    },
    {
      area: "2. Career Interest Types",
      icon: Lightbulb,
      whatWeAnalyze: {
        title: "Occupational Interest:",
        description: "We identify your top interest patterns (e.g., detail-oriented work with data, or analytical problem-solving)."
      },
      yourBenefit: {
        title: "Finds Your Fit:",
        description: "Identifies a clear career focus directly linked to occupations you'll enjoy."
      }
    },
    {
      area: "3. Career Motivator Types",
      icon: Briefcase,
      whatWeAnalyze: {
        title: "Core Values:",
        description: "We find what you value most in a career, like working independently or enjoying work routine."
      },
      yourBenefit: {
        title: "Ensures Fulfillment:",
        description: "A career in line with your core beliefs is more likely to be a lasting and positive choice."
      }
    },
    {
      area: "4. Skills & Abilities",
      icon: Cog,
      whatWeAnalyze: {
        title: "Talent Mapping:",
        description: "We score your strengths (e.g., Excellent Verbal Ability and Good Logical Ability) and areas needing development (like Mechanical or Social Skills)."
      },
      yourBenefit: {
        title: "Strategic Development:",
        description: "Helps you identify different ways to reshape your career direction and focus on skills that give you a career advantage."
      }
    },
    {
      area: "5. Learning Style",
      icon: Brain,
      whatWeAnalyze: {
        title: "Optimal Learning:",
        description: "For instance, the report shows a high preference for Auditory Learning (50%)."
      },
      yourBenefit: {
        title: "Boosts Academics:",
        description: "Provides concrete strategies (like working in groups or listening to recorded notes) to maximize your study efficiency and exam scores."
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-border shadow-card"
    >
      <div className="overflow-x-auto">
          <table className="w-full table-auto text-base">
          <thead>
            <tr>
                <th className="bg-primary text-primary-foreground p-4 text-left font-display font-bold w-[220px] text-sm md:text-base">
                Assessment Area
              </th>
                <th className="bg-primary text-primary-foreground p-4 text-left font-display font-bold text-sm md:text-base">
                  What We Analyze
              </th>
                <th className="bg-primary text-primary-foreground p-4 text-left font-display font-bold text-sm md:text-base">
                  Your Benefit
              </th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((item, index) => (
              <motion.tr
                key={item.area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="border-b border-border hover:bg-secondary/30 transition-colors"
              >
                <td className="p-4 bg-primary/5 align-top">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-display font-bold text-primary text-base md:text-lg">
                      {item.area}
                    </span>
                  </div>
                </td>
                <td className="p-4 align-top">
                  <p className="text-foreground text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">{item.whatWeAnalyze.title}</span>{" "}
                    {item.whatWeAnalyze.description}
                  </p>
                </td>
                <td className="p-4 align-top">
                  <p className="text-foreground text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-primary">{item.yourBenefit.title}</span>{" "}
                    {item.yourBenefit.description}
                  </p>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default AssessmentTable;
