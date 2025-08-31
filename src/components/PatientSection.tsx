import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Zap, Clock, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Root Canal Therapy",
    description: "Pain-free root canal treatments using advanced microscopic techniques and gentle sedation options.",
    features: ["Microscopic precision", "Same-day treatment", "Anxiety management"]
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our comprehensive cosmetic treatments designed for natural-looking results.",
    features: ["Porcelain veneers", "Teeth whitening", "Smile makeovers"]
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "24/7 emergency dental services for urgent situations requiring immediate professional attention.",
    features: ["Same-day appointments", "Pain relief", "Urgent procedures"]
  },
  {
    icon: Clock,
    title: "Preventive Care",
    description: "Comprehensive preventive treatments to maintain optimal oral health and prevent future issues.",
    features: ["Regular checkups", "Professional cleaning", "Early detection"]
  }
];

const PatientSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Compassionate Care for Every Patient
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our patient-centered approach combines advanced technology with gentle care to ensure your comfort and confidence throughout your treatment journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card border-border hover-lift">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="bg-primary-soft p-3 rounded-xl mr-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Appointment Booking CTA */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Experience Painless Precision?
              </h3>
              <p className="text-muted-foreground mb-6">
                Book your consultation today and discover how our gentle approach can transform your dental experience. Our team is here to answer all your questions and ensure your comfort.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  Free initial consultation
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  Flexible payment options
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  Same-day emergency appointments
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Button variant="hero" size="lg" className="w-full">
                Book Your Appointment
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Call (555) 123-DENTAL
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Available Monday - Friday: 8AM - 6PM<br />
                Emergency care available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientSection;