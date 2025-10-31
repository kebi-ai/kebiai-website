import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import FutureProducts from "@/components/FutureProducts";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <Benefits />
      <FutureProducts />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
