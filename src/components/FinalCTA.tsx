import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const trustIndicators = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
  "24/7 support included",
];

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/6"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(42_65%_52%/0.1),transparent)]"></div>

      {/* Animated accent shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2
            className={`text-3xl md:text-5xl font-bold mb-6 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-500`}
          >
            Ready to Transform Your Recall Management?
          </h2>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-10 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-500`}
            style={{ transitionDelay: "100ms" }}
          >
            Join leading dealerships using{" "}
            <a
              href="https://vehix.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline underline-offset-4"
            >
              Vehix
            </a>{" "}
            to complete more recalls, reduce costs, and improve customer satisfaction
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-500`}
            style={{ transitionDelay: "200ms" }}
          >
            <Button
              size="lg"
              className="text-lg px-10 group"
              asChild
            >
              <a href="mailto:contact@kebi.ai?subject=Vehix%20Demo%20Request&body=Hi%20Kebi%20AI%20Team%2C%0D%0A%0D%0AI'm%20interested%20in%20scheduling%20a%20demo%20of%20Vehix%20for%20my%20dealership.%0D%0A%0D%0ADealership%20Name%3A%20%0D%0AYour%20Name%3A%20%0D%0AYour%20Title%3A%20%0D%0APhone%20Number%3A%20%0D%0APreferred%20Date%2FTime%3A%20%0D%0A%0D%0AThank%20you%2C">
                <span>Request Your Demo</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 group"
              asChild
            >
              <a href="mailto:contact@kebi.ai?subject=Sales%20Inquiry%20-%20Vehix&body=Hi%20Kebi%20AI%20Team%2C%0D%0A%0D%0AI'd%20like%20to%20speak%20with%20your%20sales%20team%20about%20Vehix.%0D%0A%0D%0ADealership%20Name%3A%20%0D%0AYour%20Name%3A%20%0D%0AYour%20Title%3A%20%0D%0APhone%20Number%3A%20%0D%0ABest%20Time%20to%20Call%3A%20%0D%0A%0D%0AThank%20you%2C">
                Talk to Sales
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className={`flex items-center justify-center gap-2.5 text-sm text-muted-foreground ${
                  isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
                } transition-all duration-500`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`${isVisible ? "scale-100" : "scale-0"} transition-transform duration-300`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
                <span className="font-medium">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
