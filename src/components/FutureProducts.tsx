import { Package, Calendar, TrendingUp, Truck, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import futureProductsImg from "@/assets/images/future-products.jpg";

const futureProducts = [
  {
    icon: Package,
    title: "Inventory Management",
    description: "AI-powered inventory optimization and parts forecasting",
  },
  {
    icon: Calendar,
    title: "Service Scheduling",
    description: "Intelligent appointment booking and resource allocation",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Deep insights into sales performance and customer behavior",
  },
  {
    icon: Truck,
    title: "Fleet Operations",
    description: "Comprehensive fleet management and maintenance tracking",
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Enhanced customer communication and satisfaction tools",
  },
];

const FutureProducts = () => {
  return (
    <section id="product" className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={futureProductsImg}
          alt="Future Products"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Vehix is Just the Beginning
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're building a complete suite of AI-powered tools for automotive operations. 
            Starting with recall management, we're expanding to solve every operational challenge you face.
          </p>
          <p className="text-base text-muted-foreground">
            <strong>Kebi AI LLC</strong> is committed to transforming automotive operations through intelligent automation and data analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {futureProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-xl border border-primary/30 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-3" />
              <p className="text-sm font-medium">And more coming soon...</p>
            </div>
          </div>
        </div>

        <div className="text-center animate-slide-up">
          <p className="text-muted-foreground mb-6">
            Be the first to know when we launch new products
          </p>
          <Button size="lg" variant="outline" className="px-8">
            Join Early Access Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
