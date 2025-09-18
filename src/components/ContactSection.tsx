import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:alex@example.com",
      description: "alex@example.com"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/alexjohnson",
      description: "@alexjohnson"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/alexjohnson",
      description: "Alex Johnson"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/alexjohnson",
      description: "@alexjohnson"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className="card-hover border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2 text-foreground">{link.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{link.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Ready to start a project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you have a specific idea in mind or just want to explore possibilities, 
            I'd love to hear from you.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            asChild
          >
            <a href="mailto:alex@example.com">
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;