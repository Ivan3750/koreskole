import { Award, Heart, Clock } from "lucide-react";

const Instructors = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full hero-gradient flex items-center justify-center shadow-xl">
                    <span className="text-5xl font-display font-bold text-primary-foreground">JB</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Jørgen Bargisen</h3>
                  <p className="text-primary font-semibold">Indehaver & Kørelærer</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 card-shadow border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-foreground">40+ år</p>
                  <p className="text-sm text-muted-foreground">erfaring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Mød Din Kørelærer</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              En Passioneret Kørelærer Med Hjerte for Sikkerhed
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Jørgen Bargisen har været kørelærer i Vejle siden 1984. Med over 40 års erfaring 
              har han uddannet tusindvis af elever og hjulpet dem med at blive sikre, 
              ansvarsbevidste bilister.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hans filosofi er enkel: Undervisningen skal være både lærerig og hyggelig. 
              Han tror på, at en afslappet atmosfære skaber de bedste betingelser for læring, 
              og hans tålmodige tilgang har gjort ham til en favorit blandt eleverne.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Personlig Tilgang</p>
                  <p className="text-sm text-muted-foreground">Tilpasser undervisningen til den enkelte elev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Fleksible Tider</p>
                  <p className="text-sm text-muted-foreground">Både hverdage og weekender efter aftale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
