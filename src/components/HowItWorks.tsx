import { Upload, Route, Activity, FileText } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Import Recall Data",
    description: "Import recalls from OEM databases or upload manually with bulk import capabilities",
  },
  {
    icon: Route,
    number: "02",
    title: "AI Routes & Assigns",
    description: "Intelligent AI assigns and routes technicians to optimal locations based on multiple factors",
  },
  {
    icon: Activity,
    number: "03",
    title: "Track in Real-Time",
    description: "Monitor progress live on your dashboard with instant updates and notifications",
  },
  {
    icon: FileText,
    number: "04",
    title: "Generate Reports",
    description: "Access comprehensive analytics and reports on completion rates and performance",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes and see results immediately
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
