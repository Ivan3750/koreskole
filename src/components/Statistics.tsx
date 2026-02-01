import { TrendingUp, Users, Calendar, Award } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Calendar,
      number: "40+",
      label: "År i Branchen",
      description: "Erfaring siden 1984",
    },
    {
      icon: Users,
      number: "1000+",
      label: "Uddannede Elever",
      description: "Tilfredse kørere på vejen",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Beståelsesprocent",
      description: "Over landsgennemsnittet",
    },
    {
      icon: Award,
      number: "5/5",
      label: "Kundevurdering",
      description: "Baseret på anmeldelser",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-2">
                {stat.number}
              </p>
              <p className="font-semibold text-secondary-foreground/90 mb-1">{stat.label}</p>
              <p className="text-sm text-secondary-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
