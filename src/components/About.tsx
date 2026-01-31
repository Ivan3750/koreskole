import { Check } from "lucide-react";

const About = () => {
  const features = [
    "Professionel og erfaren undervisning",
    "Hyggelig og afslappet atmosfære",
    "Fleksible mødetider",
    "Moderne undervisningsmaterialer",
    "Køreteknisk anlæg i Vejle",
    "Personlig tilgang til hver elev",
  ];

  return (
    <section id="om-os" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Om Os</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Mere end bare en køreskole
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kære kommende bilist. Hvert år lukkes tusindvis af nye trafikanter ud på vejene. 
              Om du bliver en dygtig trafikant, afhænger naturligvis ikke alene af valget af 
              køreskole — det har også noget at gøre med temperament, talent og færdelstraditioner.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vi lægger stor vægt på at gøre dig til en hensynsfuld, risiko- og ansvarsbevidst, 
              og frem for alt en sikker bilist. At det så kan ske på en hyggelig og humoristisk 
              måde, er vel kun en ekstra fordel?
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full hero-gradient flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 card-shadow border border-border">
              <div className="text-center mb-8">
                <div className="w-24 h-24 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-display font-bold text-3xl">JB</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">Jørgen Bargisen</h3>
                <p className="text-muted-foreground text-sm mt-1">Kørelærer siden 1984</p>
              </div>

              <div className="space-y-4">
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Erfaring</p>
                  <p className="font-semibold text-foreground">40+ års erfaring i Vejle</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Speciale</p>
                  <p className="font-semibold text-foreground">Instruktør på Køreteknisk anlæg</p>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Filosofi</p>
                  <p className="font-semibold text-foreground">Kvalitet over kvantitet</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-6 left-6 right-6 bottom-6 hero-gradient opacity-20 rounded-3xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;