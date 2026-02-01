import { Settings, Zap, Check } from "lucide-react";
import golf from "@/assets/golf.png";
import vw from "@/assets/vw-t-cross.png";

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
    <section id="biler" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Vores Biler
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Lær at køre i moderne biler
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi tilbyder undervisning i både manuel og automatgear — så du kan
            vælge den type kørekort der passer til dig.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {cars.map((car, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              {/* Image with decorative background */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2" : ""
                } relative`}
              >
                {/* Decorative gradient blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[3rem] blur-3xl transform -rotate-6"></div>
                
                {/* Car image container */}
                <div className="relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
                  <div className="relative">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                </div>

                {/* Floating icon badge */}
                
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "md:order-1" : ""} space-y-8`}>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-primary font-bold text-sm uppercase tracking-wide">
                      {car.type}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    {car.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {car.description}
                  </p>
                </div>

                {/* Features with enhanced styling */}
                <div className="space-y-4">
                  {car.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-semibold text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;