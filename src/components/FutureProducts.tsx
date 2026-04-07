import { Package, Calendar, TrendingUp, Truck, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import futureProductsImg from "@/assets/images/future-products.jpg";

const FutureProducts = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section id="product" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={futureProductsImg}
          alt="Future Products"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">Our Product Suite</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            AI-Powered Solutions, Expanding Horizons
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            <a href="https://vehix.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Vehix</a> showcases our AI capabilities in action. We're building intelligent solutions
            that transform automotive operations across multiple domains.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div ref={ref} className="max-w-5xl mx-auto mb-12">
          {/* Vehix - Full Width Hero Card */}
          <a
            href="https://vehix.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className={`block mb-6 bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 shadow-[0_4px_14px_hsl(42_65%_52%/0.15)] hover:shadow-[0_8px_24px_hsl(42_65%_52%/0.25)] hover:-translate-y-1 group relative ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/90 text-white text-sm font-semibold shadow-[0_2px_8px_hsl(42_65%_52%/0.3)] animate-glow">
                Available Now
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/15 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Vehix - Recall Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  AI-powered recall management streamlining operations across dealership networks. Automate compliance, improve customer outreach, and maximize recall completion rates.
                </p>
              </div>
            </div>
          </a>

          {/* Future Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Inventory Management */}
            <div
              className={`bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-6 h-6 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Coming Soon</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">Inventory Management</h3>
              <p className="text-sm text-muted-foreground">AI-powered inventory optimization and parts forecasting</p>
            </div>

            {/* Service Scheduling */}
            <div
              className={`bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-purple-600 group-hover:rotate-6 transition-transform duration-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Coming Soon</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">Service Scheduling</h3>
              <p className="text-sm text-muted-foreground">Intelligent appointment booking and resource allocation</p>
            </div>

            {/* Sales Analytics */}
            <div
              className={`bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-teal-600 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Coming Soon</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">Sales Analytics</h3>
              <p className="text-sm text-muted-foreground">Deep insights into sales performance and customer behavior</p>
            </div>

            {/* Fleet Operations */}
            <div
              className={`bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-500 shadow-[0_2px_4px_hsl(40_10%_20%/0.04),0_4px_8px_hsl(40_10%_20%/0.06)] hover:shadow-[0_4px_8px_hsl(40_10%_20%/0.04),0_8px_16px_hsl(40_10%_20%/0.08)] hover:-translate-y-1 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-6 h-6 text-orange-600 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Coming Soon</span>
              <h3 className="text-lg font-semibold mt-1 mb-2">Fleet Operations</h3>
              <p className="text-sm text-muted-foreground">Comprehensive fleet management and maintenance tracking</p>
            </div>
          </div>
        </div>

        <div
          className={`text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-500`}
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Be the first to know when we launch new products
          </p>
          <Button size="lg" variant="outline" className="px-8 group">
            <span>Join Early Access Program</span>
            <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
