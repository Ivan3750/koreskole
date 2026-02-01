import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefon",
      value: "23 74 87 80",
      href: "tel:23748780",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jorgen@norretorv.dk",
      href: "mailto:jorgen@norretorv.dk",
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Vestre Engvej 7 \n7100 Vejle",
      href: "https://maps.google.com/?q=Vestre+Engvej+7,+7100+Vejle",
    },
  ];

  return (
    <section id="kontakt" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kontakt</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Lad os tage en snak
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Har du spørgsmål om køreuddannelse, priser eller tilmelding? 
              Ring eller skriv til os — vi står klar til at hjælpe dig i gang.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 group"
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:hero-gradient transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground whitespace-pre-line group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button asChild className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                <a href="tel:23748780">
                  <Phone className="w-4 h-4 mr-2" />
                  Ring Nu
                </a>
              </Button>
              
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-3xl overflow-hidden card-shadow h-72 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12153.2252481922!2d9.534519930379213!3d55.71527382563587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c82509eaaa53d%3A0xfa34ac2a4dc08d4d!2sVestre%20Engvej%207%2C%207100%20Vejle!5e0!3m2!1suk!2sdk!4v1769987195463!5m2!1suk!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nørretorv Køreskole lokation"
              />
            </div>

            {/* Hours Card */}
            <div className="bg-card rounded-3xl p-6 card-shadow border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shadow-md">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Åbningstider</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Teoriundervisning</span>
                  <span className="font-semibold text-foreground">Efter aftale</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Køretimer</span>
                  <span className="font-semibold text-foreground">Fleksible tider</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Telefontid</span>
                  <span className="font-semibold text-foreground">8:00 - 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;