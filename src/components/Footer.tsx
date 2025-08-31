import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import rcfLogo from "@/assets/rcf-logo.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={rcfLogo} alt="Root Canal Foundation" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-semibold">Root Canal Foundation</h3>
                <p className="text-sm opacity-80 italic">Painless Precision</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Leading the way in compassionate dental care and professional education. 
              Where advanced technology meets gentle treatment for optimal patient outcomes.
            </p>
            <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/10">
              Schedule Visit
            </Button>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 opacity-80 mt-0.5" />
                <div>
                  <p className="text-sm">123 Dental Plaza, Suite 200</p>
                  <p className="text-sm opacity-80">Healthcare District, HC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80" />
                <p className="text-sm">(555) 123-DENTAL</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-80" />
                <p className="text-sm">info@rootcanalfoundation.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 opacity-80 mt-0.5" />
                <div>
                  <p className="text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm opacity-80">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Patient Services */}
          <div>
            <h4 className="font-semibold mb-6">Patient Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Root Canal Therapy</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Cosmetic Dentistry</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Emergency Care</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Preventive Treatment</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Sedation Options</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Patient Resources</a></li>
            </ul>
          </div>
          
          {/* Academy */}
          <div>
            <h4 className="font-semibold mb-6">Professional Academy</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Course Catalog</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Continuing Education</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Certification Programs</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Workshop Schedule</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Faculty</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-gentle">Student Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © 2024 Root Canal Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-gentle">Privacy Policy</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-gentle">Terms of Service</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-gentle">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;