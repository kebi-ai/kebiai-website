import { Plug, Brain, BarChart3, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "AI Learns Your Operations",
    description: "Connect your systems and let AI analyze patterns, workflows, and operational data",
  },
  {
    icon: Brain,
    number: "02",
    title: "Intelligent Automation Activates",
    description: "AI optimizes processes, automates workflows, and orchestrates complex operations",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Real-Time AI Monitoring",
    description: "Track performance with AI-powered dashboards delivering instant insights and alerts",
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Continuous AI Improvement",
    description: "The system learns from outcomes and continuously refines its intelligence",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Driven Operations in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Intelligence that adapts to your business and improves over time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
