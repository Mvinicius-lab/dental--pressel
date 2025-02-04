import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;