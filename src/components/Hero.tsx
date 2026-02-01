import { ArrowRight, Shield, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-driving.jpg";

const Hero = () => {
  return (
    <section id="forside" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image - Only on large screens */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img
          src={heroImage}
          alt="Moderne køreskole i Vejle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Solid background for mobile/tablet */}
      <div className="absolute inset-0 z-0 lg:hidden bg-gradient-to-br from-background via-muted/30 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mt-10">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 border border-primary/20 shadow-lg">
            <Award className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              Kørelærer i Vejle siden 1984
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 sm:mb-8">
            Din Vej til{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Sikker Kørsel
              </span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            Vi lægger stor vægt på at gøre dig til en hensynsfuld, ansvarsbevidst, 
            og frem for alt en <span className="text-foreground font-semibold">sikker bilist</span> — på en hyggelig og humoristisk måde.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button 
              size="lg" 
              className="relative hero-gradient text-primary-foreground overflow-hidden group text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl font-bold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:scale-105"
            >
              {/* Animated shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              {/* Pulsing background */}
              <span className="absolute inset-0 bg-primary/20 animate-pulse"></span>
              
              <span className="relative flex items-center gap-2">
                Kom i Gang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Stats - Responsive Grid */}
          <div className="animate-fade-up-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-3 sm:gap-4 bg-background/50 backdrop-blur-sm p-4 rounded-2xl border border-border/50 hover:bg-background/70 transition-all group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl sm:text-2xl">40+ År</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Erfaring</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 bg-background/50 backdrop-blur-sm p-4 rounded-2xl border border-border/50 hover:bg-background/70 transition-all group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl sm:text-2xl">1000+</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Elever</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 bg-background/50 backdrop-blur-sm p-4 rounded-2xl border border-border/50 hover:bg-background/70 transition-all group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl sm:text-2xl">95%</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Bestående</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade - Only on large screens with image */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5] hidden lg:block"></div>
    </section>
  );
};

export default Hero;