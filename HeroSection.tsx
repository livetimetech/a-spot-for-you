import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side text */}
        <div className="animate-fade-in text-left">
          <div className="mb-35">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">
              Welcome to Live Time
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Hey, It's Emily & I'm looking for a technical co-founder(s)
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              I vibe-coded Live Time in my dorm room and grew it nationwide, 
              raising pre-seed funding from early investors in Facebook, Instagram, Tinder, and more.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Now I'm looking for 1-2 insane builders who want to change the way humans connect together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="mailto:emily@liveti.me?subject=COFOUNDER">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
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
                Try Live Time
              </a>
            </Button>
          </div>
        </div>

        {/* Right side video */}
        <div className="flex justify-center">
          <div className="relative w-[300px] aspect-[9/19.5] overflow-hidden rounded-2xl shadow-lg">
            <video
              src="/demo-video-compressed.mp4"   // make sure the file is in /public
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover block scale-[1.005]"
              style={{
                transform: "translateZ(0) scale(1.005)", // Prevent seams on zoom
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                outline: "none",
                border: "0",
              }}
            />
          </div>
        </div>
      </div> {/* closes grid wrapper */}
    </section>
  );
};

export default HeroSection;
