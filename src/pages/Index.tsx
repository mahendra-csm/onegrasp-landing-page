import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesOverviewSection from "@/components/ServicesOverviewSection";
import CareerCounsellingSection from "@/components/CareerCounsellingSection";
import StudyAbroadSection from "@/components/StudyAbroadSection";
import IndianDegreesSection from "@/components/IndianDegreesSection";
import CertificationsSection from "@/components/CertificationsSection";
import ScientificEventsSection from "@/components/ScientificEventsSection";
import StartupsSection from "@/components/StartupsSection";
import StudentDashboardSection from "@/components/StudentDashboardSection";
import PartnerUniversitiesSection from "@/components/PartnerUniversitiesSection";
import WhyOneGraspSection from "@/components/WhyOneGraspSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverviewSection />
        <CareerCounsellingSection />
        <StudyAbroadSection />
        <IndianDegreesSection />
        <CertificationsSection />
        <ScientificEventsSection />
        <StartupsSection />
        <StudentDashboardSection />
        <PartnerUniversitiesSection />
        <WhyOneGraspSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
