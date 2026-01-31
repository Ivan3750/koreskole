import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-driving.jpg";

const Hero = () => {
  return (
    <section id="forside" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Moderne køreskole i Vejle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Kørelærer i Vejle siden 1984</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Din Vej til <br />
            <span className="text-gradient">Sikker Kørsel</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Vi lægger stor vægt på at gøre dig til en hensynsfuld, ansvarsbevidst, 
            og frem for alt en sikker bilist — på en hyggelig og humoristisk måde.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity group shadow-lg shadow-primary/25">
              Kom i Gang
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 bg-background/50 backdrop-blur-sm hover:bg-background/80">
              Se Priser
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 mt-12 grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">40+ År</p>
                <p className="text-sm text-muted-foreground">Erfaring</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">1000+</p>
                <p className="text-sm text-muted-foreground">Elever</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Høj</p>
                <p className="text-sm text-muted-foreground">Bestående</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;