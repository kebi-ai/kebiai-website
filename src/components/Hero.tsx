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

        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(42_65%_52%/0.15),transparent)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Company Tagline */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-foreground/90">Building the Future of Automotive Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-foreground">
            AI Solutions for Every{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text">Automotive Challenge</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            From recalls to inventory, scheduling to procurement—Kebi AI delivers intelligent automation across your entire operation. Starting with <a href="https://vehix.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline underline-offset-4 transition-colors">Vehix</a>, our flagship vehicle recall management platform
          </p>

          {/* CTAs */}
          <div className="flex justify-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="mailto:contact@kebi.ai?subject=Vehix%20Demo%20Request&body=Hi%20Kebi%20AI%20Team%2C%0D%0A%0D%0AI'm%20interested%20in%20scheduling%20a%20demo%20of%20Vehix%20for%20my%20dealership.%0D%0A%0D%0ADealership%20Name%3A%20%0D%0AYour%20Name%3A%20%0D%0AYour%20Title%3A%20%0D%0APhone%20Number%3A%20%0D%0APreferred%20Date%2FTime%3A%20%0D%0A%0D%0AThank%20you%2C">
                Request Demo
              </a>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
