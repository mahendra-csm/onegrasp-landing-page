import { Check, X, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";

const GradeOfferingsTable = () => {
  const offerings = [
    {
      grade: "6th",
      careerExplanation: true,
      psychometric: "Multiple Intelligence",
      counselling: true,
      executionPlan: "dash",
      research: "plus",
      internships: "plus",
      admissions: "plus",
      spotAdmissions: false
    },
    {
      grade: "7th",
      careerExplanation: true,
      psychometric: "Multiple Intelligence + Aptitude Check",
      counselling: true,
      executionPlan: "dash",
      research: "plus",
      internships: "plus",
      admissions: "plus",
      spotAdmissions: false
    },
    {
      grade: "8th",
      careerExplanation: true,
      psychometric: "Multiple Intelligence + Personality + Aptitude",
      counselling: true,
      executionPlan: "dash",
      research: "plus",
      internships: "plus",
      admissions: "plus",
      spotAdmissions: false
    },
    {
      grade: "9th",
      careerExplanation: true,
      psychometric: "5 Dimensional Assessment + Stream Selection + Career Recommendation",
      counselling: true,
      executionPlan: true,
      research: "plus",
      internships: "plus",
      admissions: "plus",
      spotAdmissions: false
    },
    {
      grade: "10th",
      careerExplanation: true,
      psychometric: "5 Dimensional Assessment + Stream Selection + Career Recommendation",
      counselling: true,
      executionPlan: true,
      research: "plus",
      internships: "Min 1 – Max 3 Internships can be taken",
      admissions: "plus",
      spotAdmissions: false
    },
    {
      grade: "11th",
      careerExplanation: true,
      psychometric: "6 Dimensional Assessment + Career Recommendation",
      counselling: true,
      executionPlan: true,
      research: true,
      internships: "Min 1 – Max 3 Internships can be taken",
      admissions: "plus",
      spotAdmissions: false
    },
    {
      grade: "12th",
      careerExplanation: true,
      psychometric: "Subjects Group Specific 6 dimensional Assessment and 30+ Pages Career Report + Admissions Profiler Admission and Predictor",
      counselling: true,
      executionPlan: true,
      research: true,
      internships: "Min 1 – Max 3 Internships can be taken",
      admissions: true,
      spotAdmissions: true
    }
  ];

  const renderCell = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="flex justify-center">
          <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
        </div>
      );
    }
    if (value === "dash") {
      return (
        <div className="flex justify-center">
          <Minus className="h-5 w-5 text-foreground" strokeWidth={2.5} />
        </div>
      );
    }
    if (value === "plus") {
      return (
        <div className="flex justify-center">
          <Plus className="h-5 w-5 text-red-500" strokeWidth={2.5} />
        </div>
      );
    }
    return <span className="text-xs text-foreground font-medium">{value}</span>;
  };

  const headers = [
    "Grade",
    "Career Explanation Presentation",
    "Psychometric Assessments + Career Reports",
    "1:1 Career Counselling",
    "15 Years Execution Plan",
    "Research Publications (Portfolio Building)",
    "Virtual Internships & StartUps support",
    "International Admissions Guidance",
    "Spot Admissions Event India + International"
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
              {headers.map((header, index) => (
                <th
                  key={header}
                    className={`p-3 md:p-4 text-center font-display font-semibold text-sm md:text-base bg-primary text-primary-foreground`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {offerings.map((item, index) => (
              <motion.tr
                key={item.grade}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border hover:bg-secondary/30 transition-colors"
              >
                <td className="p-3 md:p-4 font-bold text-primary text-center bg-background whitespace-nowrap text-sm md:text-base">
                  {item.grade}
                </td>
                <td className="p-3 md:p-4 text-center bg-background">
                  {renderCell(item.careerExplanation)}
                </td>
                <td className="p-3 md:p-4 text-center bg-background">
                  <span className="text-sm md:text-base text-foreground">{item.psychometric}</span>
                </td>
                <td className="p-3 md:p-4 text-center bg-background">{renderCell(item.counselling)}</td>
                <td className="p-3 md:p-4 text-center bg-background">{renderCell(item.executionPlan)}</td>
                <td className="p-3 md:p-4 text-center bg-background">{renderCell(item.research)}</td>
                <td className="p-3 md:p-4 text-center bg-background">{renderCell(item.internships)}</td>
                <td className="p-3 md:p-4 text-center bg-background">{renderCell(item.admissions)}</td>
                <td className="p-3 md:p-4 text-center bg-background">{renderCell(item.spotAdmissions)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Legend */}
      <div className="bg-secondary/50 p-4 flex flex-wrap gap-6 justify-center text-base">
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5 text-primary" strokeWidth={2.5} />
          <span className="text-muted-foreground">Included</span>
        </div>
        <div className="flex items-center gap-2">
          <Plus className="h-5 w-5 text-red-500" strokeWidth={2.5} />
          <span className="text-muted-foreground">Optional Add-on</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus className="h-5 w-5 text-foreground" strokeWidth={2.5} />
          <span className="text-muted-foreground">Not Applicable</span>
        </div>
        <div className="flex items-center gap-2">
          <X className="h-5 w-5 text-red-500" strokeWidth={2.5} />
          <span className="text-muted-foreground">Not Available</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GradeOfferingsTable;
