import { Button } from "@/components/ui/button";
import rcfLogo from "@/assets/rcf-logo.png";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={rcfLogo} alt="Root Canal Foundation" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-semibold text-foreground">Root Canal Foundation</h1>
              <p className="text-xs text-muted-foreground italic">Painless Precision</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-gentle">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-gentle">
              Services
            </a>
            <a href="#academy" className="text-muted-foreground hover:text-foreground transition-gentle">
              Academy
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-gentle">
              Contact
            </a>
            <Button variant="medical" size="sm">
              Book Appointment
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;