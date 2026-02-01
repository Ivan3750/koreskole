import { MapPin, Clock, Phone, Mail } from "lucide-react";

const Location = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Find Os</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Centralt Placeret i Vejle
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi holder til midt i Vejle centrum med nem adgang til både teori og praktisk kørsel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.8!2d9.5353!3d55.7095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQyJzM0LjIiTiA5wrAzMicwNy4xIkU!5e0!3m2!1sda!2sdk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nørretorv Køreskole lokation"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">Nørretorv 2A, 1. sal</p>
                  <p className="text-muted-foreground">7100 Vejle</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Åbningstider</h3>
                  <p className="text-muted-foreground">Mandag - Fredag: 8:00 - 20:00</p>
                  <p className="text-muted-foreground">Lørdag: Efter aftale</p>
                  <p className="text-muted-foreground">Søndag: Lukket</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Kontakt</h3>
                  <a href="tel:23748780" className="text-primary hover:underline block">23 74 87 80</a>
                  <a href="mailto:info@norretorv.dk" className="text-muted-foreground hover:text-primary transition-colors">info@norretorv.dk</a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Parkering</h3>
                  <p className="text-muted-foreground">Gratis parkering ved Nørretorv P-hus</p>
                  <p className="text-muted-foreground text-sm">2 minutters gang fra køreskolen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
