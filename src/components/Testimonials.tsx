import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Andersen",
      age: 19,
      text: "Jørgen er en fantastisk kørelærer! Han var altid tålmodig og forklarede tingene på en måde, jeg kunne forstå. Bestod i første forsøg!",
      rating: 5,
    },
    {
      name: "Thomas Nielsen",
      age: 22,
      text: "Super god køreskole med fleksible tider. Jeg kunne nemt passe køretimerne ind i mit studie. Kan varmt anbefales!",
      rating: 5,
    },
    {
      name: "Sofie Pedersen",
      age: 18,
      text: "Jeg var meget nervøs i starten, men Jørgen fik mig til at føle mig tryg. Den hyggelige atmosfære gjorde hele forskellen.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Anmeldelser</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Hvad Vores Elever Siger
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi er stolte af vores mange tilfredse elever gennem årene.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age} år</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
