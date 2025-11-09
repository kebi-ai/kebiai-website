import { RefreshCw, Database, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: RefreshCw,
    title: "Manual Processes Hold You Back",
    description: "Repetitive operational tasks that AI could automate consume valuable time and resources",
  },
  {
    icon: Database,
    title: "Data Without Intelligence",
    description: "Operational information exists but lacks the AI-powered insights to drive meaningful action",
  },
  {
    icon: TrendingDown,
    title: "Reactive Instead of Predictive",
    description: "Without AI-driven forecasting, challenges are addressed after they occur rather than prevented",
  },
];

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/80 to-muted/60 border-b-4 border-primary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Traditional Operations Need AI
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform challenges into opportunities with intelligent automation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
