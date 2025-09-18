import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink, Linkedin, Instagram, Rocket, Clock } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:emily@liveti.me?subject=COFOUNDER",
      description: "emily@liveti.me",
      primary: true
    },
    {
      name: "Website",
      icon: ExternalLink,
      href: "https://www.liveti.me",
      description: "www.liveti.me"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/emilyjwheeler/",
      description: "Emily Wheeler"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/liveti.me/",
      description: "@liveti.me"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm looking for the 1-2 insane builders who want to change the way humans connect together.
          </p>
        </div>
        
        {/* The Process */}
        <div className="mb-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center justify-center">
            <Rocket className="w-6 h-6 text-primary mr-3" />
            The Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Reach Out</h4>
                <p className="text-sm text-muted-foreground">
                  Email with "COFOUNDER" in subject line and your top-1 impressive achievement
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">30-Min Chat</h4>
                <p className="text-sm text-muted-foreground">
                  Quick conversation to see if we vibe and share the vision
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">One-Week Sprint</h4>
                <p className="text-sm text-muted-foreground">
                  Build prototypes, hack, and create something cool together
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className={`card-hover border-0 shadow-soft ${contact.primary ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 text-foreground">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                  <Button 
                    variant={contact.primary ? "default" : "outline"}
                    size="sm"
                    className={contact.primary 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      {contact.primary ? "Email Now" : "Connect"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-8">
          <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Why Now?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We have real traction, elite investors, and a proven market. The only thing standing 
            between us and changing how humans connect is finding the right technical cofounder(s).
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            asChild
          >
            <a href="mailto:emily@liveti.me?subject=COFOUNDER">
              <Mail className="w-5 h-5 mr-2" />
              Let's Build Together
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;