import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const trustIndicators = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
  "24/7 support included",
];

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Recall Management?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join leading dealerships using <a href="https://vehix.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Vehix</a> to complete more recalls, reduce costs,
            and improve customer satisfaction
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="text-lg px-8 shadow-lg hover:shadow-xl transition-all animate-glow-pulse"
              asChild
            >
              <a href="mailto:contact@kebi.ai?subject=Vehix%20Demo%20Request&body=Hi%20Kebi%20AI%20Team%2C%0D%0A%0D%0AI'm%20interested%20in%20scheduling%20a%20demo%20of%20Vehix%20for%20my%20dealership.%0D%0A%0D%0ADealership%20Name%3A%20%0D%0AYour%20Name%3A%20%0D%0AYour%20Title%3A%20%0D%0APhone%20Number%3A%20%0D%0APreferred%20Date%2FTime%3A%20%0D%0A%0D%0AThank%20you%2C">
                Request Your Demo
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8"
              asChild
            >
              <a href="mailto:contact@kebi.ai?subject=Sales%20Inquiry%20-%20Vehix&body=Hi%20Kebi%20AI%20Team%2C%0D%0A%0D%0AI'd%20like%20to%20speak%20with%20your%20sales%20team%20about%20Vehix.%0D%0A%0D%0ADealership%20Name%3A%20%0D%0AYour%20Name%3A%20%0D%0AYour%20Title%3A%20%0D%0APhone%20Number%3A%20%0D%0ABest%20Time%20to%20Call%3A%20%0D%0A%0D%0AThank%20you%2C">
                Talk to Sales
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
