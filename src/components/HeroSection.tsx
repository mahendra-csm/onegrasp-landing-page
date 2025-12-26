import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
// Use the public folder image at `/a.png` for production deployments
// (assets in `public/` are served at the site root)
const HeroMentor = '/a.png';

const HeroSection = () => {
  const stats = [
    { value: "98.6%", label: "Report Accuracy" },
    { value: "3000+", label: "Partner Universities" },
    { value: "20+", label: "Countries" },
    { value: "95%", label: "Success Rate" },
  ];

  const frameworks = [
    "John Holland",
    "Carl Jung",
    "Howard Gardner",
    "Daniel Goleman",
    "Neil Fleming"
  ];

  const rightHeading = "Learn, Grow, and Succeed—Anywhere, Anytime!";
  const headingWords = rightHeading.split(" ");

  const headingContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
  };

  const headingChild = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 450, damping: 28 },
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    let mounted = true;
    async function loop() {
      while (mounted) {
        await controls.start("visible");
        // keep visible for a bit
        await new Promise((r) => setTimeout(r, 2200));
        // reset to hidden before running again
        await controls.start("hidden");
        await new Promise((r) => setTimeout(r, 400));
      }
    }
    loop();
    return () => {
      mounted = false;
    };
  }, [controls]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean Background with subtle accent */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <Award className="h-4 w-4 text-primary" />
              <span className="text-poppins font-medium text-primary">98.6% Report Accuracy</span>

            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight drop-shadow-lg"
              >

                <span className="font-display">Decode Your</span>{" "}
                <span className="font-display">Future</span>

                <span className="poppins">Decode Your</span>{" "}
                <span className="poppins">Future</span>

              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl font-display font-semibold text-foreground drop-shadow-md"
              >
                A 40-Minute Scientific Assessment That Saves{" "}
                <span className="text-primary font-bold">40 Years</span> of Career Struggle.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl font-display font-semibold text-foreground drop-shadow-md max-w-xl"
              >
                AI-powered + Expert-guided career clarity, education pathways, global admissions, and startup support.
              </motion.p>
            </div>

            {/* Scientific Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="space-y-2"
            >
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Built on Proven Scientific Frameworks
              </p>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 bg-secondary px-3 py-1.5 rounded-full text-sm font-medium text-secondary-foreground"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-primary" />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                Get Your 15-Year Career Roadmap
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Free Evaluation
              </Button>
            </motion.div>

            {/* Pricing Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4 p-4 bg-accent/10 border border-accent/30 rounded-xl"
            >
              <div className="flex-shrink-0">
                <span className="text-2xl font-display font-bold text-accent">₹2500</span>
                <span className="text-sm text-muted-foreground line-through ml-2">₹5000</span>
              </div>
              <div className="border-l border-border pl-4">
                <p className="font-semibold text-foreground">Career Counselling + Psychometric Test</p>
                <p className="text-sm text-muted-foreground">Limited Time Offer • Valid until 31st December</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            {/* Small learning image */}
            <div className="relative w-full h-[350px] overflow-hidden">
              <img
                src={HeroMentor}
                alt="Learning"
                className="w-full h-full object-cover"
              />
            </div>


            <motion.div
              variants={headingContainer}
              initial="hidden"
              animate={controls}
              className="mb-6 inline-block relative"
            >
              <span aria-hidden="true" className="absolute -z-10 w-36 h-36 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl opacity-30" />
              {headingWords.map((word, i) => (
                <motion.span key={i} variants={headingChild} className="inline-block mr-2 text-2xl md:text-3xl font-extrabold text-primary">
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                  className="rounded-2xl p-6 text-center transition border-2 border-primary/25 bg-background/6"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</div>
                  <p className="text-sm text-foreground/90 mt-1 font-semibold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-secondary/50 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-secondary"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
