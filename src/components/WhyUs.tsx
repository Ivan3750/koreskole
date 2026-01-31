import { TrendingUp, Heart, ThumbsUp, MapPin } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "40+ Års Erfaring",
      stat: "1984",
      description: "Kørelærer i Vejle siden 1984. Vi kender byen og trafikken ud og ind.",
    },
    {
      icon: Heart,
      title: "Personlig Tilgang",
      stat: "1:1",
      description: "Individuel undervisning tilpasset din læringsstil og tempo.",
    },
    {
      icon: ThumbsUp,
      title: "Høj Kvalitet",
      stat: "100%",
      description: "Fokus på kvalitet frem for kvantitet - vi vil have dig til at blive en sikker bilist.",
    },
    {
      icon: MapPin,
      title: "Centralt i Vejle",
      stat: "7100",
      description: "Beliggende på Nørrebrogade i hjertet af Vejle by.",
    },
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hvorfor Vælge Os</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Det gør os anderledes
          </h2>
          <p className="text-secondary-foreground/70 leading-relaxed">
            Vi tror på at en god køreuddannelse handler om mere end bare at lære at køre bil.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-display font-bold text-primary mb-2">
                {reason.stat}
              </div>
              <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;