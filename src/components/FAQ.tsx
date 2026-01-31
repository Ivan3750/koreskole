import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Hvor lang tid tager det at få kørekort?",
      answer: "Det varierer fra person til person, men typisk tager det 3-6 måneder. Det afhænger af hvor hurtigt du kan gennemføre teori- og kørelektioner, samt hvornår der er ledige prøvetider.",
    },
    {
      question: "Hvad koster et kørekort?",
      answer: "Prisen afhænger af pakken og om du vælger manuel eller automatgear. Ring til os på 23 74 87 80 for en uforpligtende snak om priser og muligheder.",
    },
    {
      question: "Kan jeg vælge mellem manuel og automatgear?",
      answer: "Ja! Vi tilbyder undervisning i både manuel gear (VW Golf) og automatgear (VW T-Cross). Bemærk at et kørekort til automatgear kun gælder til automatgear-biler.",
    },
    {
      question: "Hvor foregår teoriundervisningen?",
      answer: "Teoriundervisningen foregår i vores lokaler på Nørrebrogade 5, 1. sal i Vejle centrum. Vi har moderne undervisningsmaterialer og skaber en hyggelig atmosfære.",
    },
    {
      question: "Hvad er glatførekursus?",
      answer: "Glatførekursus er et obligatorisk kursus på køreteknisk anlæg, hvor du lærer at håndtere bilen under vanskelige forhold som glatte veje. Jørgen er instruktør på anlægget i Vejle.",
    },
    {
      question: "Hvornår kan jeg starte?",
      answer: "Du kan starte med det samme! Ring til os for at høre om næste holdstart for teoriundervisning og vi finder sammen de bedste tider til dine kørelektioner.",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ofte Stillede Spørgsmål</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Har du spørgsmål?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Her finder du svar på de mest almindelige spørgsmål om køreuddannelse.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;