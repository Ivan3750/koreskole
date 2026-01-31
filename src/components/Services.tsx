import { BookOpen, Car, Shield, Users, Clock, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Teoriundervisning",
      description: "Grundig teoretisk undervisning med moderne materialer og engagerende formidling.",
    },
    {
      icon: Car,
      title: "Køreundervisning",
      description: "Praktisk køreundervisning i moderne biler med erfaren instruktør.",
    },
    {
      icon: Shield,
      title: "Glatførekursus",
      description: "Obligatorisk kursus på køreteknisk anlæg for sikker kørsel i alle vejrforhold.",
    },
    {
      icon: Users,
      title: "Førstehjælpskursus",
      description: "Livsvigtig førstehjælp - lær at handle rigtigt i nødsituationer.",
    },
    {
      icon: Clock,
      title: "Fleksible Tider",
      description: "Vi tilpasser undervisningen efter din hverdag med fleksible mødetider.",
    },
    {
      icon: Award,
      title: "Høj Beståelsesrate",
      description: "Kvalitetsundervisning der giver dig de bedste forudsætninger for at bestå.",
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Vores Ydelser</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Alt hvad du behøver til dit kørekort
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi tilbyder en komplet køreuddannelse med fokus på sikkerhed, kvalitet og personlig vejledning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;