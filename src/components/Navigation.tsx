import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import kebiLogo from "@/assets/images/kebi-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <img src={kebiLogo} alt="Kebi AI" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#benefits" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#product" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Product
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="default" size="sm">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
              <a
                href="#benefits"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#product"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Product
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-3"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button variant="default" className="w-full">
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
