import { TrendingUp, DollarSign, Target, Clock, Star, Shield } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    metric: "40%",
    title: "More Recalls Completed",
    description: "Increase your monthly recall completion rate with optimized workflows",
  },
  {
    icon: DollarSign,
    metric: "35%",
    title: "Cost Reduction",
    description: "Reduce routing and operational costs through AI-powered optimization",
  },
  {
    icon: Target,
    metric: "90%",
    title: "Completion Rate",
    description: "Improve recall completion rates from 60% to 90% with better tracking",
  },
  {
    icon: Clock,
    metric: "10+",
    title: "Hours Saved Weekly",
    description: "Save service managers 10+ hours per week on manual coordination",
  },
  {
    icon: Star,
    metric: "Higher",
    title: "Customer Satisfaction",
    description: "Increase customer satisfaction with proactive recall management",
  },
  {
    icon: Shield,
    metric: "100%",
    title: "Compliance Assured",
    description: "Ensure full compliance with safety regulations and OEM requirements",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Measurable Results for Your Dealership
          </h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes that impact your bottom line and customer satisfaction
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
                <div className="text-4xl font-bold text-primary mb-2">
                  {benefit.metric}
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
