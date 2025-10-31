import { AlertTriangle, Clock, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Complex Multi-Location Management",
    description: "Managing recalls across multiple dealership locations is time-consuming and prone to errors",
  },
  {
    icon: Clock,
    title: "Inefficient Routing & Scheduling",
    description: "Manual technician routing wastes valuable time and significantly increases operational costs",
  },
  {
    icon: BarChart3,
    title: "Limited Visibility & Compliance Risks",
    description: "Lack of real-time tracking creates compliance risks and reduces customer satisfaction",
  },
];

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Challenge Dealerships Face
          </h2>
          <p className="text-lg text-muted-foreground">
            Managing vehicle recalls shouldn't be this complicated
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
