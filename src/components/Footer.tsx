import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 hero-gradient rounded-xl flex items-center justify-center">
                <span className="font-display font-bold text-xl text-primary-foreground">NK</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg">Nørretorv</span>
                <span className="text-secondary-foreground/60 text-sm block -mt-1">Køreskole</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed max-w-md">
              Din partner i tryg og sikker køreuddannelse i Vejle. 
              Med over 40 års erfaring guider vi dig hele vejen til kørekortet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#forside" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Forside
                </a>
              </li>
              <li>
                <a href="#om-os" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Om Os
                </a>
              </li>
              <li>
                <a href="#priser" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Priser
                </a>
              </li>
              <li>
                <a href="#biler" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Biler
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:23748780" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  23 74 87 80
                </a>
              </li>
              <li>
                <a href="mailto:jorgen@norretorv.dk" className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  jorgen@norretorv.dk
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-secondary-foreground/70">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  Vestre Engvej 7<br />7100 Vejle
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Nørretorv Køreskole. Alle rettigheder forbeholdes.
          </p>
          <p className="text-secondary-foreground/50 text-sm">
            Kørelærer i Vejle siden 1984
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;