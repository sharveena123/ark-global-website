"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Baby, Microscope, Package, MapPin, Clock, 
  Snowflake, Users, Globe, Truck 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Frozen Embryo Transportation",
      description: "Secure shipping of embryos using the frozen method with utmost care and reliability.",
      features: ["Frozen embryo transport", "Strictest safety protocols", "Domestic & overseas delivery", "Pristine condition guarantee"]
    },
    {
      icon: Microscope,
      title: "Sperm Samples & Gametes",
      description: "Seamless, secure delivery of sperm samples and gametes across the globe.",
      features: ["Cargo & hand-carry packages", "Specially trained personnel", "Rigorous security measures", "State-of-the-art tracking"]
    },
    {
      icon: Package,
      title: "Frozen Donor Egg & Oocyte",
      description: "Safe and efficient shipping of frozen donor eggs, oocytes, and biomaterials.",
      features: ["Cryopreservation expertise", "Optimal transit conditions", "Global network partners", "Swift delivery coordination"]
    },
    {
      icon: Globe,
      title: "Stem Cell Shipping",
      description: "Expert handling for research laboratories and medical facilities worldwide.",
      features: ["Research-grade handling", "Chain of custody documentation", "Compliance protocols", "Secure transport"]
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Carry-on Baggage Transportation",
      description: "All shipments are hand carried on board aircraft. Never risking valuable cryoshipments in luggage hold.",
    },
    {
      icon: MapPin,
      title: "Customs Clearance Services",
      description: "Comprehensive customs clearance and documentation from pickup through all customs procedures.",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "5G state-of-the-art online tracking system supporting 200+ countries with temperature monitoring.",
    },
    {
      icon: Snowflake,
      title: "Temperature Data Logger",
      description: "Built-in temperature logger ensures -196°C is maintained during entire transportation process.",
    }
  ];

  const stats = [
    { icon: Clock, number: "24/7", label: "Monitoring & Support" },
    { icon: Snowflake, number: "-196°C", label: "Temperature Control" },
    { icon: Users, number: "500+", label: "Successful Deliveries" },
    { icon: MapPin, number: "50+", label: "Countries Served" }
  ];

  // 🔹 Motion variants
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const fadeUp = (delay = 0): Variants => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut, delay },
    },
  });

  return (
    <section id="business" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp(0)}
            className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6"
          >
            Comprehensive Cryo <span className="text-primary">Shipping Services</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From IVF samples to stem cells, we provide end-to-end cryogenic transport 
            solutions with uncompromising safety and reliability.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp(index * 0.1)}
            >
              <Card className="border-border hover:shadow-soft transition-smooth bg-gradient-light">
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
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.h3 variants={fadeUp(0)} className="font-poppins font-bold text-3xl text-foreground mb-4">
              Why Choose ARKGlobal
            </motion.h3>
            <motion.p variants={fadeUp(0.1)} className="font-inter text-muted-foreground">
              Industry-leading features that set us apart
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeUp(index * 0.1)}>
                <div className="flex gap-4 p-6 bg-gradient-light rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-inter text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="bg-secondary rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <motion.h3 variants={fadeUp(0)} className="font-poppins font-bold text-3xl text-foreground mb-4">
              Proven Excellence in Cryo Logistics
            </motion.h3>
            <motion.p variants={fadeUp(0.1)} className="font-inter text-muted-foreground">
              Our track record speaks for itself
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeUp(index * 0.1)} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-poppins font-bold text-3xl text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp(0.1)}
          className="text-center mt-16"
        >
          <Button size="lg" className="text-lg">
            Discuss Your Shipping Requirements
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
