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
            Join leading dealerships using Vehix to complete more recalls, reduce costs, 
            and improve customer satisfaction
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all animate-glow-pulse">
              Request Your Demo
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Talk to Sales
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
