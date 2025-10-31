import { Zap, DollarSign, Brain, Clock, Star, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "AI-Driven Efficiency",
    description: "Automate repetitive workflows and eliminate manual bottlenecks with intelligent automation",
  },
  {
    icon: DollarSign,
    title: "Reduced Operational Costs",
    description: "AI optimization identifies cost savings and maximizes resource utilization",
  },
  {
    icon: Brain,
    title: "Intelligent Decision Making",
    description: "AI-powered insights transform data into strategic actions and informed choices",
  },
  {
    icon: Clock,
    title: "Predictive Intelligence",
    description: "Stay ahead of challenges with AI forecasting and proactive recommendations",
  },
  {
    icon: Star,
    title: "Enhanced Customer Experience",
    description: "Deliver superior service with AI-optimized processes and faster response times",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "AI adapts to your operations, learning from patterns to deliver ever-improving results",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Powered Benefits
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform operations with intelligent automation that delivers real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
