import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, TrendingUp, Heart, MapPin } from "lucide-react";

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What I Bring & What I Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
            My superpowers and what I'm looking for in a cofounder
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* My Superpowers */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Zap className="w-6 h-6 text-primary mr-3" />
              My Superpowers
            </h3>
            <div className="space-y-4">
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Raising from the GOATs</h4>
                  <p className="text-muted-foreground text-sm">
                    Pre-seed/angel from early investors in Facebook, Instagram, Tinder, Twitter, LinkedIn, Uber
                  </p>
                </CardContent>
              </Card>

               <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Speed & Grit</h4>
                  <p className="text-muted-foreground text-sm">
                    Ship MVPs in 3 months with no CS background
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Real Traction</h4>
                  <p className="text-muted-foreground text-sm">
                    20% adoption at UChicago, 16 universities testing, 71 universities on waitlist. Revenue. M+ Views on socials. 
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Community Expert</h4>
                  <p className="text-muted-foreground text-sm">
                    Hosted hundreds of events, including "Wheeler Wednesday"
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>

          {/* Looking For */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
              <Target className="w-6 h-6 text-primary mr-3" />
              Ideal Cofounder
            </h3>
            <div className="space-y-4">
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Full Stack & Cracked</h4>
                  <p className="text-muted-foreground text-sm">
                    Shipped consumer products ideally used by 1M+ users
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Consumer Passionate</h4>
                  <p className="text-muted-foreground text-sm">
                    Obsessed with consumer and community
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary"> Humble, Creative, & Passionate</h4>
                  <p className="text-muted-foreground text-sm">
                    Able to figure things out & think outside of the box
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-0 shadow-soft">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-primary">Fast Mover</h4>
                  <p className="text-muted-foreground text-sm">
                    Thrives in fast-paced, high-velocity environments with lots of ownership
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Life Story */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-foreground text-center flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary mr-3" />
            My Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Badge className="mb-3 bg-primary/20 text-primary">Grew up on Shark Tank</Badge>
              <p className="text-sm text-muted-foreground">
                Won my first startup competition when I was 10, been building ever since
              </p>
            </div>
            <div className="text-center">
              <Badge className="mb-3 bg-primary/20 text-primary">Community Leader</Badge>
              <p className="text-sm text-muted-foreground">
                Involved in every group: run clubs, business, tech, sports
              </p>
            </div>
            <div className="text-center">
              <Badge className="mb-3 bg-primary/20 text-primary">College</Badge>
              <p className="text-sm text-muted-foreground">
                Studied death & finding meaning in life @ UChicago before dropping out to build Live Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;