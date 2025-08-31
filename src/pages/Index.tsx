import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PatientSection from "@/components/PatientSection";
import AcademySection from "@/components/AcademySection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = "Root Canal Foundation - Painless Precision Dental Care & Education";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience anxiety-free dental care and world-class professional education at Root Canal Foundation. Painless precision in dental treatment and advanced training programs for dental professionals.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PatientSection />
        <AcademySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
