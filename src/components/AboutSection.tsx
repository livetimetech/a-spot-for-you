import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who believes that great software should be both powerful and beautiful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              With over 5 years of experience in full-stack development, I specialize in creating 
              web applications that not only perform exceptionally but also provide intuitive user experiences.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My journey began with a curiosity about how things work on the web, which evolved into 
              a deep passion for crafting digital solutions that solve real-world problems.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="card-hover border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Frontend Expertise</h3>
                <p className="text-muted-foreground">
                  React, TypeScript, Next.js, Tailwind CSS, and modern UI frameworks
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Backend Development</h3>
                <p className="text-muted-foreground">
                  Node.js, Python, PostgreSQL, MongoDB, and cloud infrastructure
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">Design & UX</h3>
                <p className="text-muted-foreground">
                  User-centered design, prototyping, and creating delightful interactions
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