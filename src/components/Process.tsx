import { CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Tilmelding",
      description: "Ring eller skriv til os for at tilmelde dig. Vi finder sammen det bedste tidspunkt for din start.",
    },
    {
      number: "02",
      title: "Teoriundervisning",
      description: "Du starter med teorikursus hvor du lærer færdselsreglerne og sikker adfærd i trafikken.",
    },
    {
      number: "03",
      title: "Kørelektioner",
      description: "Praktisk køreundervisning i en af vores moderne biler med erfaren instruktør.",
    },
    {
      number: "04",
      title: "Glatførekursus",
      description: "Obligatorisk kursus på køreteknisk anlæg i Vejle for at lære at håndtere glatte veje.",
    },
    {
      number: "05",
      title: "Førstehjælp",
      description: "Lær grundlæggende førstehjælp så du kan handle rigtigt i en nødsituation.",
    },
    {
      number: "06",
      title: "Køreprøve",
      description: "Når du er klar, tager du teori- og køreprøve - og så har du dit kørekort!",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sådan Foregår Det</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Din vej til kørekortet
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi guider dig gennem hele forløbet fra tilmelding til du holder dit kørekort i hånden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-6 left-[4.5rem] w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;