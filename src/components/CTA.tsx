import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Klar til at få dit kørekort?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Tag det første skridt mod frihed på vejen. Ring til os i dag og hør mere om, 
            hvordan vi kan hjælpe dig med at blive en sikker bilist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 group">
              <Phone className="w-5 h-5 mr-2" />
              Ring 23 74 87 80
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-lg px-8 group">
              Se Priser
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            Åbent for opkald: Mandag - Fredag, 8:00 - 20:00
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;