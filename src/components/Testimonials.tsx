import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "IVF Specialist",
      clinic: "Singapore Fertility Centre",
      content:
        "ARKGlobal has been our trusted partner for cryo shipping for over 3 years. Their attention to detail and commitment to maintaining the cold chain is unmatched. Every delivery has been perfect.",
      rating: 5,
      location: "Singapore",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Reproductive Endocrinologist",
      clinic: "Bangkok IVF Clinic",
      content:
        "The peace of mind that ARKGlobal provides is invaluable. Their real-time tracking and professional handling gives our patients confidence during the most critical moments of their fertility journey.",
      rating: 5,
      location: "Thailand",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Embryologist",
      clinic: "KL Reproductive Medicine",
      content:
        "What sets ARKGlobal apart is their understanding of how precious these samples are. The hand-carry service and temperature monitoring throughout the entire journey is exceptional.",
      rating: 5,
      location: "Malaysia",
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      clinic: "European Stem Cell Institute",
      content:
        "For our international stem cell research collaborations, ARKGlobal has been indispensable. Their compliance with EU regulations and flawless logistics make complex shipments seem effortless.",
      rating: 5,
      location: "Netherlands",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading fertility clinics and research institutions
            worldwide
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-strong transition-all duration-300 text-left">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <blockquote className="font-inter text-foreground/80 leading-relaxed mb-6 italic">
                    “{t.content}”
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-poppins font-semibold text-foreground">
                          {t.name}
                        </h4>
                        <p className="font-inter text-sm text-muted-foreground">
                          {t.role}
                        </p>
                        <p className="font-inter text-sm text-primary font-medium">
                          {t.clinic}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-inter text-sm text-muted-foreground">
                          {t.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-card border border-border p-3 rounded-full shadow hover:bg-muted transition"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-card border border-border p-3 rounded-full shadow hover:bg-muted transition"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
