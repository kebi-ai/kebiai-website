import { Plug, Brain, BarChart3, RefreshCcw } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "AI Learns Your Operations",
    description: "Connect your systems and let AI analyze patterns, workflows, and operational data",
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-100 to-indigo-100",
    textColor: "text-blue-600",
  },
  {
    icon: Brain,
    number: "02",
    title: "Intelligent Automation Activates",
    description: "AI optimizes processes, automates workflows, and orchestrates complex operations",
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-100 to-violet-100",
    textColor: "text-purple-600",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Real-Time AI Monitoring",
    description: "Track performance with AI-powered dashboards delivering instant insights and alerts",
    color: "from-teal-500 to-emerald-500",
    bgColor: "from-teal-100 to-emerald-100",
    textColor: "text-teal-600",
  },
  {
    icon: RefreshCcw,
    number: "04",
    title: "Continuous AI Improvement",
    description: "The system learns from outcomes and continuously refines its intelligence",
    color: "from-amber-500 to-orange-500",
    bgColor: "from-amber-100 to-orange-100",
    textColor: "text-amber-600",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,hsl(42_65%_52%/0.05),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Driven Operations in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            Intelligence that adapts to your business and improves over time
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } transition-all duration-500`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 h-full group">
                  {/* Gradient Step Number */}
                  <div className={`text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                    {step.number}
                  </div>

                  {/* Icon with colored background */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${step.textColor} ${
                      index === 0 ? "group-hover:rotate-45" :
                      index === 1 ? "group-hover:scale-110" :
                      index === 2 ? "group-hover:-translate-y-0.5" :
                      "group-hover:rotate-180"
                    } transition-transform duration-500`} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Enhanced Connector Line with Gradient */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 w-8 items-center justify-center z-10">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/20 rounded-full"></div>
                    <div className="absolute w-2 h-2 bg-primary/40 rounded-full right-0 animate-pulse"></div>
                  </div>
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
