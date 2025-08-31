import { Button } from "@/components/ui/button";
import { ArrowRight, Users, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-dental-office.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern dental office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient-soft opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Painless Precision</span> in<br />
            Dental Excellence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Experience anxiety-free dental care and world-class professional education. 
            Where cutting-edge technology meets compassionate treatment.
          </p>
          
          {/* Dual CTA Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* For Patients */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border hover-lift">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">For Patients</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Gentle, state-of-the-art dental care in a calming environment designed to reduce anxiety.
              </p>
              <Button variant="hero" size="lg" className="w-full group">
                Schedule Your Visit
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-gentle" />
              </Button>
            </div>
            
            {/* For Professionals */}
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border hover-lift">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-semibold text-foreground">For Dental Professionals</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced training programs and continuing education to elevate your practice.
              </p>
              <Button variant="secondary" size="lg" className="w-full group">
                Explore Academy
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-gentle" />
              </Button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center space-x-8 text-muted-foreground">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary mr-2">98%</span>
              <span className="text-sm">Patient Satisfaction</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-secondary mr-2">15+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-accent mr-2">500+</span>
              <span className="text-sm">Professionals Trained</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;