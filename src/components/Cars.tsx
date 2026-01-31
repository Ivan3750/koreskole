import { Settings, Zap } from "lucide-react";
import golf from "@/assets/golf1.jpg";
import vw from "@/assets/vw-t-cross.jpg";

const Cars = () => {
  const cars = [
    {
      name: "VW Golf",
      type: "Manuel Gear",
      img: golf,
      icon: Settings,
      description: "Klassisk og pålidelig til traditionel køreuddannelse",
      features: ["6-trins manuel", "Diesel", "Kompakt og overskuelig"],
    },
    {
      name: "VW T-Cross",
      type: "Automat Gear",
      img: vw,
      icon: Zap,
      description: "Moderne SUV med automatgear til komfortabel kørsel",
      features: ["7-trins DSG", "Crossover", "God udsyn i trafikken"],
    },
  ];

  return (
    <section id="biler" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Vores Biler
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Lær at køre i moderne biler
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi tilbyder undervisning i både manuel og automatgear — så du kan
            vælge den type kørekort der passer til dig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cars.map((car, index) => {
            const Icon = car.icon;

            return (
              <div
                key={index}
                className="bg-card rounded-3xl overflow-hidden card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border"
              >
                {/* Car image */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">
                        {car.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {car.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-5">
                    {car.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-primary/10 rounded-full text-xs font-semibold text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Cars;
