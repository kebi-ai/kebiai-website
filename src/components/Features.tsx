import { Map, Route, Activity, Users, Settings, BarChart } from "lucide-react";
import geographicVisualization from "@/assets/images/geographic-visualization.png";
import aiRouting from "@/assets/images/ai-routing.png";
import realTimeDashboard from "@/assets/images/real-time-dashboard.png";
import multiTenant from "@/assets/images/multi-tenant.png";
import campaignConfig from "@/assets/images/campaign-config.png";
import performanceAnalytics from "@/assets/images/performance-analytics.png";

const features = [
  {
    icon: Map,
    title: "Geographic Recall Visualization",
    description: "Interactive map showing recall distribution across your dealer network with real-time status updates and heat maps",
    benefit: "Get instant visibility into where recalls need attention",
    image: geographicVisualization,
  },
  {
    icon: Route,
    title: "AI-Powered Routing & Assignment",
    description: "Intelligent technician routing that optimizes travel time and assigns recalls based on skills, availability, and location",
    benefit: "Reduce travel costs by up to 40% and complete more recalls daily",
    image: aiRouting,
  },
  {
    icon: Activity,
    title: "Real-Time Tracking Dashboard",
    description: "Live monitoring of recall completion rates, technician performance, and campaign progress with customizable metrics",
    benefit: "Make data-driven decisions and identify bottlenecks instantly",
    image: realTimeDashboard,
  },
  {
    icon: Users,
    title: "Multi-Tenant Management",
    description: "Centralized platform for managing multiple dealership locations with role-based access control",
    benefit: "Maintain oversight while giving local teams autonomy",
    image: multiTenant,
  },
  {
    icon: Settings,
    title: "Campaign Configuration",
    description: "Set up recall campaigns with custom priority levels, urgency indicators, and automated notifications",
    benefit: "Focus resources on critical recalls and ensure compliance",
    image: campaignConfig,
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Comprehensive reporting on completion rates, response times, cost per recall, and productivity metrics",
    benefit: "Demonstrate ROI and continuously improve operations",
    image: performanceAnalytics,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to Manage Recalls
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed specifically for automotive dealerships
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
