import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Content */}
<div className="relative z-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">
              Live Time
            </h1>
            <div className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Looking for <span className="font-semibold text-primary">Technical Cofounder(s)</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hi, I'm Emily Wheeler
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              I grew Live Time from a dorm-coded MVP into a nationwide platform used across universities, 
              raising pre-seed funding from early investors in Facebook, Instagram, Tinder, and more.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Now I'm looking for 1-2 insane builders who want to change the way humans connect together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="mailto:emily@liveti.me?subject=COFOUNDER">
                <Mail className="w-5 h-5 mr-2" />
                Email Me!
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              asChild
            >
              <a href="https://www.liveti.me" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                See Live Time
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
