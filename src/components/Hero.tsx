import { Button } from "@/components/ui/button";
import { Cpu, Zap, Building2 } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI-powered vehicle management"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Company Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/90 border border-primary mb-6">
            <span className="text-xs sm:text-sm font-medium text-white">Building the Future of Automotive Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
            AI Solutions for Every{" "}
            <span className="text-primary">Automotive Challenge</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            From recalls to inventory, scheduling to procurement—Kebi AI delivers intelligent automation across your entire operation. Starting with <span className="font-semibold text-primary">Vehix</span>, our flagship vehicle recall management platform
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo Video
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/70 animate-scale-in">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Intelligent Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              <span>Built for Dealerships</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
