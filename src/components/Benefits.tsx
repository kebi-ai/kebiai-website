import { Zap, DollarSign, Brain, Clock, Star, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="benefits" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,hsl(220_65%_45%/0.04),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Powered Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform operations with intelligent automation that delivers real results
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Featured Card - AI-Driven Efficiency (Large) */}
          <div
            className={`md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card via-card to-primary/5 p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_8px_16px_hsl(40_10%_20%/0.06),0_16px_32px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Zap className="w-8 h-8 text-amber-600 group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">AI-Driven Efficiency</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Automate repetitive workflows and eliminate manual bottlenecks with intelligent automation
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Reduced Costs */}
          <div
            className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-7 h-7 text-green-600 group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reduced Operational Costs</h3>
            <p className="text-muted-foreground">AI optimization identifies cost savings and maximizes resource utilization</p>
          </div>

          {/* Card 3 - Intelligent Decision Making */}
          <div
            className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-7 h-7 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Intelligent Decision Making</h3>
            <p className="text-muted-foreground">AI-powered insights transform data into strategic actions and informed choices</p>
          </div>

          {/* Card 4 - Predictive Intelligence */}
          <div
            className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-blue-600 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Predictive Intelligence</h3>
            <p className="text-muted-foreground">Stay ahead of challenges with AI forecasting and proactive recommendations</p>
          </div>

          {/* Card 5 - Enhanced Customer Experience (Wide) */}
          <div
            className={`md:col-span-2 lg:col-span-1 bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-125 transition-transform duration-300">
              <Star className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhanced Customer Experience</h3>
            <p className="text-muted-foreground">Deliver superior service with AI-optimized processes and faster response times</p>
          </div>

          {/* Card 6 - Continuous Learning */}
          <div
            className={`bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-green-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-7 h-7 text-teal-600 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground">AI adapts to your operations, learning from patterns to deliver ever-improving results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
