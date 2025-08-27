import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Baby, 
  Microscope, 
  Package, 
  MapPin, 
  Clock, 
  Snowflake,
  Users,
  Globe
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "IVF Cryo Shipping",
      description: "Specialized transport for frozen eggs, embryos, and sperm samples with temperature monitoring.",
      features: ["Temperature-controlled transport", "Liquid nitrogen dry shippers", "Real-time monitoring", "Door-to-door service"]
    },
    {
      icon: Microscope,
      title: "Stem Cell Shipping",
      description: "Expert handling of stem cell samples for research institutions and medical facilities.",
      features: ["Research-grade handling", "Chain of custody documentation", "Compliance protocols", "Secure transport"]
    },
    {
      icon: Package,
      title: "Cryogenic Solutions",
      description: "Complete cryogenic storage and transport solutions with trained personnel.",
      features: ["Liquid nitrogen systems", "Custom packaging", "Trained onboard staff", "Safety protocols"]
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description: "Worldwide shipping with customs support and regulatory compliance.",
      features: ["Customs clearance", "International permits", "Regulatory compliance", "24/7 tracking"]
    }
  ];

  const stats = [
    { icon: Clock, number: "24/7", label: "Monitoring & Support" },
    { icon: Snowflake, number: "-196°C", label: "Temperature Control" },
    { icon: Users, number: "500+", label: "Successful Deliveries" },
    { icon: MapPin, number: "50+", label: "Countries Served" }
  ];

  return (
    <section id="business" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Cryo <span className="text-primary">Shipping Services</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            From IVF samples to stem cells, we provide end-to-end cryogenic transport 
            solutions with uncompromising safety and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-smooth bg-gradient-light">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-inter text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Proven Excellence in Cryo Logistics
            </h3>
            <p className="font-inter text-muted-foreground">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-poppins font-bold text-3xl text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg">
            Discuss Your Shipping Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;