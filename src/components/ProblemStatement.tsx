import { RefreshCw, Database, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: RefreshCw,
    title: "Manual Processes Hold You Back",
    description: "Repetitive operational tasks that AI could automate consume valuable time and resources",
    featured: true,
  },
  {
    icon: Database,
    title: "Data Without Intelligence",
    description: "Operational information exists but lacks the AI-powered insights to drive meaningful action",
    featured: false,
  },
  {
    icon: TrendingDown,
    title: "Reactive Instead of Predictive",
    description: "Without AI-driven forecasting, challenges are addressed after they occur rather than prevented",
    featured: false,
  },
];

const ProblemStatement = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-muted/60 to-background relative overflow-hidden">
      {/* Subtle radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(42_65%_52%/0.06),transparent)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Traditional Operations Need AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform challenges into opportunities with intelligent automation
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {/* Featured Card - Large (spans 3 cols on desktop) */}
          <div
            className={`lg:col-span-3 lg:row-span-2 bg-card p-8 lg:p-10 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_8px_16px_hsl(40_10%_20%/0.06),0_16px_32px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <RefreshCw className="w-8 h-8 text-amber-600 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{problems[0].title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{problems[0].description}</p>
          </div>

          {/* Card 2 */}
          <div
            className={`lg:col-span-2 bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Database className="w-7 h-7 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{problems[1].title}</h3>
            <p className="text-muted-foreground">{problems[1].description}</p>
          </div>

          {/* Card 3 */}
          <div
            className={`lg:col-span-2 bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <TrendingDown className="w-7 h-7 text-rose-600 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{problems[2].title}</h3>
            <p className="text-muted-foreground">{problems[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
