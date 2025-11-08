import { Target, Lightbulb, Rocket, CircleDot, Zap, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <>
      {/* About Kebi AI Section */}
      <section id="about" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-primary">Kebi AI</span>
            </h2>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Kebi AI LLC is on a mission to revolutionize the automotive service industry through intelligent
              automation and data-driven insights. We empower dealerships to work smarter, serve better, and grow
              faster.
            </p>
          </div>

          {/* Vision & Mission Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Our Vision */}
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 animate-slide-up">
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                    To become the leading AI-powered platform transforming how automotive dealerships manage
                    recalls, service operations, and customer relationships. We envision a future where every
                    dealership harnesses the power of artificial intelligence to deliver exceptional service experiences.
                  </p>
                </CardContent>
              </Card>

              {/* Our Mission */}
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: "200ms" }}>
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                    To simplify complex service operations through intelligent automation, enabling dealerships
                    to save time, increase revenue, and deliver superior customer satisfaction. We're committed
                    to building tools that make a measurable difference in your daily operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Solutions Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Intelligent automation designed to transform every aspect of automotive operations
              </p>
            </div>

            {/* Introducing Vehix */}
            <div className="bg-background rounded-2xl p-8 md:p-12 lg:p-16 border-2 border-primary/20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                  <a href="http://www.vehix.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Introducing Vehix
                  </a>
                </h3>
                <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                  Our Flagship Product
                </p>
                <p className="text-base md:text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                  <a href="http://www.vehix.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Vehix</a> is Kebi AI's premier recall intelligence platform, designed specifically for automotive dealerships.
                  It combines cutting-edge AI technology with intuitive design to streamline recall management,
                  automate customer outreach, and maximize service department efficiency. With Vehix, dealerships
                  transform recalls from administrative burdens into revenue opportunities.
                </p>
              </div>

              {/* Vehix Key Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-7 h-7 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">AI-Powered</h4>
                    <p className="text-sm text-foreground/70">Smart automation</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CircleDot className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Dealer-Focused</h4>
                    <p className="text-sm text-foreground/70">Built for your workflow</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-7 h-7 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Fast Setup</h4>
                    <p className="text-sm text-foreground/70">Live in 5 minutes</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Horizons Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Expanding Horizons
            </h2>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              While <a href="http://www.vehix.ai/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Vehix</a> leads the way today, we're building a comprehensive suite of AI solutions to address every challenge in automotive operations. The future is intelligent, automated, and built for growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
