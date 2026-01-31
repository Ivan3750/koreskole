import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_large.jpg"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Forside", href: "#forside" },
    { name: "Ydelser", href: "#ydelser" },
    { name: "Om Os", href: "#om-os" },
    { name: "Priser", href: "#priser" },
    { name: "Biler", href: "#biler" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#forside" className="flex items-center gap-3">
              <img src={logo} alt="NK" className="w-11 h-11"/>
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-lg text-foreground">Nørretorv</span>
              <span className="text-muted-foreground text-sm block -mt-1">Køreskole</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:23748780" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-semibold">23 74 87 80</span>
            </a>
            <Button className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity shadow-lg">
              Tilmeld Dig
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:23748780" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">23 74 87 80</span>
              </a>
              <Button className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity w-full mt-2">
                Tilmeld Dig
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;