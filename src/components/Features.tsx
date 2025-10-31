import { Brain, Zap, LineChart, Network, Workflow, TrendingUp } from "lucide-react";
import geographicVisualization from "@/assets/images/geographic-visualization.png";
import aiRouting from "@/assets/images/ai-routing.png";
import realTimeDashboard from "@/assets/images/real-time-dashboard.png";
import multiTenant from "@/assets/images/multi-tenant.png";
import campaignConfig from "@/assets/images/campaign-config.png";
import performanceAnalytics from "@/assets/images/performance-analytics.png";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms analyze operational patterns and surface actionable intelligence from your data",
    benefit: "Discover hidden opportunities and optimize decision-making",
    image: geographicVisualization,
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "AI automates complex workflows and repetitive tasks, freeing your team to focus on high-value activities",
    benefit: "Reduce manual effort and accelerate operations",
    image: aiRouting,
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "AI forecasts trends, identifies potential bottlenecks, and recommends optimal resource allocation strategies",
    benefit: "Stay ahead of challenges with proactive intelligence",
    image: realTimeDashboard,
  },
  {
    icon: Network,
    title: "Smart Orchestration",
    description: "AI coordinates operations across multiple locations, ensuring consistent processes and optimal efficiency",
    benefit: "Seamlessly manage complexity at scale",
    image: multiTenant,
  },
  {
    icon: Workflow,
    title: "Adaptive Learning",
    description: "The system continuously learns from your operations, adapting to your unique workflows and improving over time",
    benefit: "Experience intelligence that evolves with your business",
    image: campaignConfig,
  },
  {
    icon: TrendingUp,
    title: "Real-Time Intelligence",
    description: "AI-powered dashboards deliver instant insights, alerts, and recommendations based on live operational data",
    benefit: "Make informed decisions with up-to-the-minute intelligence",
    image: performanceAnalytics,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Powered Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            Intelligent solutions that learn, adapt, and optimize your automotive operations
          </p>
        </div>

        <div className="space-y-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center animate-slide-up py-16 px-4 lg:px-8 ${
                  isEven ? "bg-background" : "bg-gray-50"
                }`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm font-medium">{feature.benefit}</p>
                  </div>
                </div>

                <div className="flex-1 max-w-md mx-auto">
                  {feature.image ? (
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border hover:shadow-primary/20 transition-shadow duration-300">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-12 aspect-video flex items-center justify-center border border-border">
                      <Icon className="w-24 h-24 text-primary/40" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
