import React from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion';
import {
  Brain,
  Plane,
  GraduationCap,
  Award,
  Microscope,
  Lightbulb,
  Zap,
  ChevronRight
} from 'lucide-react';

// --- Core Data & Types ---
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  tagline: string;
  features: string[];
  mockupBg: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Career Counselling + Psychometric tests",
    description: "A scientific, multi-dimensional assessment evaluating personality, interests, and skills to create a 15-year roadmap.",
    icon: "Brain",
    color: "#2563EB",
    tagline: "Psychometric Assessment",
    features: ["15-Year Career Roadmap", "Skill Mapping", "Informed Decisions"],
    mockupBg: "bg-gradient-to-br from-blue-600 to-indigo-900"
  },
  {
    id: 2,
    title: "Study abroad",
    description: "End-to-end guidance for admissions across 20+ countries and 3000+ universities. Profile evaluation and visa assistance.",
    icon: "Plane",
    color: "#059669",
    tagline: "Study Abroad Admissions",
    features: ["University Shortlisting", "SOP/LOR Support", "Visa Assistance"],
    mockupBg: "bg-gradient-to-br from-emerald-600 to-teal-800"
  },
  {
    id: 3,
    title: "Indian & Online Degrees",
    description: "Access to 2000+ Indian institutions and 150+ online universities for flexible learning in Tech, AI, and Management.",
    icon: "GraduationCap",
    color: "#7C3AED",
    tagline: "Degree Programs",
    features: ["AI & Data Science", "Management & Business", "On-Campus/Online"],
    mockupBg: "bg-gradient-to-br from-violet-600 to-slate-900"
  },
  {
    id: 4,
    title: "Certifications & Trainings",
    description: "Career-oriented certifications, bootcamps, and 300+ virtual internships designed to improve global employability.",
    icon: "Award",
    color: "#F97316",
    tagline: "Certifications & Internships",
    features: ["Industry-Relevant Skills", "Virtual Internships", "Upskilling Pathways"],
    mockupBg: "bg-gradient-to-br from-orange-500 to-amber-700"
  },
  {
    id: 5,
    title: "Scientific conferences & Events",
    description: "Organization of scientific conferences, FDPs, and workshops. Build portfolios through research and global awards.",
    icon: "Microscope",
    color: "#EAB308",
    tagline: "Scientific Conferences",
    features: ["Research Exposure", "Portfolio Building", "Portfolio Recognitions"],
    mockupBg: "bg-gradient-to-br from-amber-400 to-yellow-700"
  },
  {
    id: 6,
    title: "Startup & Entrepreneurship",
    description: "A structured ecosystem for idea incubation, mentorship, funding access, and scaling for aspiring founders.",
    icon: "Lightbulb",
    color: "#EC4899",
    tagline: "Investors Connect",
    features: ["Idea Incubation", "Mentorship Circles", "GTM Strategy"],
    mockupBg: "bg-gradient-to-br from-pink-600 to-rose-900"
  }
];

// --- Shared Components & Logic ---

const getIcon = (name: string, size = 24, color = "currentColor") => {
  const icons: Record<string, React.ReactNode> = {
    Brain: <Brain size={size} color={color} />,
    Plane: <Plane size={size} color={color} />,
    GraduationCap: <GraduationCap size={size} color={color} />,
    Award: <Award size={size} color={color} />,
    Microscope: <Microscope size={size} color={color} />,
    Lightbulb: <Lightbulb size={size} color={color} />,
    Zap: <Zap size={size} color={color} />
  };
  return (icons as any)[name] || icons.Zap;
};

const ServiceCard: React.FC<{ service: Service; isActive: boolean; onHover: (id: number) => void }> = ({ service, isActive, onHover }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const hexToRgba = (hex: string, a = 1) => {
    const h = hex.replace('#', '');
    const bigint = parseInt(h, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const activeBorder = hexToRgba(service.color, 0.12);
  const hoverBorder = hexToRgba(service.color, 0.06);
  const cardBgActive = 'rgba(255,255,255,0.06)';
  const cardBgInactive = 'rgba(255,255,255,0.02)';

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onMouseEnter={() => onHover(service.id)}
      whileHover={{ y: -6 }}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d", perspective: "1000px" }}
      className={`group relative w-full cursor-pointer rounded-2xl transition-all duration-500 ${isActive ? 'scale-[1.03] z-10' : 'opacity-80'}`}
    >
      {/* left accent bar and subtle tint overlay (uses service color) */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: service.color }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: hexToRgba(service.color, 0.06) }} />
      <div
        className={`p-6 rounded-2xl border transition-all duration-300 backdrop-blur-xl flex flex-col h-full shadow-2xl overflow-hidden`}
        style={{
          borderColor: isActive ? activeBorder : 'rgba(0,0,0,0.04)',
          backgroundColor: isActive ? cardBgActive : cardBgInactive,
        }}
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at center, ${service.color}44 0%, transparent 70%)` }}
        />

        <div className="flex items-center gap-4 mb-4">
          <div
            className="p-3 rounded-xl shadow-lg transition-transform duration-200 transform group-hover:scale-110"
            style={{ backgroundColor: `${service.color}22`, border: `1px solid ${service.color}33` }}
          >
            {getIcon(service.icon, 24, service.color)}
          </div>
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">{service.title}</h3>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{service.tagline}</span>
          <div
            className={`p-1.5 rounded-full transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transform duration-300`}
            style={{ background: isActive ? hexToRgba(service.color, 0.08) : 'transparent' }}
          >
            <ChevronRight size={14} color={isActive ? service.color : '#9CA3AF'} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PhoneMockup: React.FC<{ activeService: Service }> = ({ activeService }) => {
  return (
    <div className="relative w-[280px] h-[580px] lg:w-[320px] lg:h-[640px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.12)]">
      {/* Device Frame */}
      <div className="absolute inset-0 bg-white rounded-[3rem] border-[8px] border-gray-100 overflow-hidden shadow-xl">
        {/* Top Speaker/Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-100 rounded-b-2xl z-50 flex items-center justify-center">
            <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`absolute inset-0 p-6 pt-12 flex flex-col ${activeService.mockupBg}`}
          >
            {/* Mock OS Bar */}
            <div className="flex justify-between items-center px-4 mb-8">
              <span className="text-[10px] font-bold text-white/70">9:41</span>
              <div className="flex gap-1.5 items-center">
                <div className="w-4 h-2 rounded-sm border border-white/30" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>
            </div>

            <div className="flex-1 space-y-8 pt-4">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.03, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 mx-auto bg-white/30 rounded-[2.5rem] flex items-center justify-center border border-white/10 shadow-lg"
              >
                {getIcon(activeService.icon, 48, "white")}
              </motion.div>

              <div className="text-center space-y-3 px-2">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-black text-white leading-tight"
                >
                  {activeService.tagline}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-xs text-white/80 leading-relaxed"
                >
                  {activeService.description}
                </motion.p>
              </div>

              <div className="space-y-3 px-2">
                {activeService.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="p-3.5 rounded-2xl bg-white/10 border border-white/5 flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: activeService.color }} />
                    <span className="text-[11px] font-bold text-white/90">{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto w-full py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] rounded-2xl shadow-md"
            >
              Get Started
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Reflections */}
      <div className="absolute inset-0 pointer-events-none rounded-[3rem] z-40 bg-gradient-to-tr from-white/30 to-transparent" />
    </div>
  );
};

// --- Main Component Export ---
export default function ServicesOverviewSection() {
  const [activeId, setActiveId] = React.useState(SERVICES[0].id);
  const activeService = SERVICES.find(s => s.id === activeId) || SERVICES[0];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-10 reveal-on-scroll">
          <p className="text-gray-500">Overview</p>
          <h3 className="text-3xl font-black mt-4">Explore our services</h3>
          <p className="text-gray-400 mt-3">Interactive preview of each service with synchronized mockup.</p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.55 }}
                >
                  <ServiceCard service={service} isActive={activeId === service.id} onHover={setActiveId} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <PhoneMockup activeService={activeService} />

              <div className="mt-10 text-center">
                <AnimatePresence mode="wait">
                  <motion.div key={activeId} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
                    <p className="text-[10px] uppercase font-black tracking-[0.5em] text-gray-400">Synchronized Module</p>
                    <p className="text-sm font-semibold text-gray-600">{activeService.title} Portal</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
