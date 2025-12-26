import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-foreground rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground mb-6 leading-tight">
            One Wrong Choice Can Cost You Years.{" "}
            <span className="text-accent whitespace-nowrap">Choose Right Today.</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Your future is not an accident. It's a decision.{" "}
          </p>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">What decision will you make today?</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="accent" size="xl" className="group">
              Get Free Evaluation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Phone className="h-5 w-5" />
              Talk to a Career Expert
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
            <a href="tel:+918977760442" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +91 89777 60442
            </a>
            <a href="tel:+918977760443" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" />
              +91 89777 60443
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
