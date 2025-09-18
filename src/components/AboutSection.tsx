import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Live Time's Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From a dorm room MVP to a nationwide movement across universities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Live Time empowers people to organize, share, and monetize IRL events & groups—blending 
              group management, event planning, instant payments, and partnerships with their favorite brands.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              From sorority rush events to run clubs and cultural meetups, Live Time makes bringing 
              communities together effortless. With sponsorships and free merch from partners like Monster, 
              Welch's, and the Jonas Brothers' Popcorn, every event becomes unforgettable.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Despite building the MVP with no CS background using low-code tools, we achieved 
              <span className="font-semibold text-primary"> over 20% adoption at UChicago</span> within months.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="card-hover border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Proven Traction</h3>
                </div>
                <p className="text-muted-foreground">
                  Beta testing across 16 universities with 71 schools on waitlist
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Elite Investors</h3>
                </div>
                <p className="text-muted-foreground">
                  Backed by early investors in Facebook, Instagram, Snapchat, Uber, LinkedIn
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-primary">Brand Partnerships</h3>
                </div>
                <p className="text-muted-foreground">
                  Sponsorships with Monster, Spritz Society, Cay Skin, Jonas Brother's Popcorn
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;