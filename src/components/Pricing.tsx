import { ArrowRight, Check } from "lucide-react";

const packageIncludes = [
  "29 lektioner i teoretisk undervisning",
  "4 lektioner på manøvrebane",
  "16 lektioner kørsel på vej",
  "4 lektioner på Køreteknisk Anlæg i Vejle",
  "Glatførekursus inkl. kørsel i glat føre",
  "Førstehjælp",
  "Undervisning efter Trafikstyrelsens lektionsplan",
  "Personlig og tilpasset undervisning",
];

const Pricing = () => {
  return (
    <section id="priser" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Priser & indhold
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Én komplet pakke – vælg selv biltype
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Uanset om du vælger manuel eller automatgear, får du det samme
            grundige undervisningsforløb.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Package */}
          <div className="bg-card rounded-3xl p-8 card-shadow border border-border md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-6">
              Dette er inkluderet i kørekort-pakken
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {packageIncludes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-1 rounded-full hero-gradient flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm">
              Prisen afhænger af dit valg af biltype og dit individuelle
              forløb – kontakt os for en præcis pris.
            </p>
          </div>

          {/* Manuel */}
          <div className="bg-muted/40 rounded-3xl p-6 border border-border">
            <h4 className="font-display text-xl font-bold mb-2">
              Manuel gear
            </h4>
            <p className="text-muted-foreground text-sm">
              Den klassiske løsning, hvor du lærer fuld kontrol over bilen
              og gearskifte fra bunden.
            </p>
          </div>

          {/* Automat */}
          <div className="bg-muted/40 rounded-3xl p-6 border border-border">
            <h4 className="font-display text-xl font-bold mb-2">
              Automat gear
            </h4>
            <p className="text-muted-foreground text-sm">
              En moderne og afslappet måde at tage kørekort på – ideel hvis
              du vil fokusere mere på trafik og mindre på teknik.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Er du i tvivl om, hvilken biltype der passer dig bedst?
          </p>
          <a
            href="tel:23748780"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Ring til Jørgen på 23 74 87 80
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
