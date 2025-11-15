"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Microscope, Package, Globe, Plane } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Frozen Eggs Transportation",
      features: [
        "Cryogenic safe",
        "IATA & EU compliant",
        "Hand-carried by trained couriers",
        "Flexible pickup & delivery",
      ],
    },
    
    {
      icon: Package,
      title: "Sperm Samples Transportation",
      features: [
        "Liquid nitrogen dewars",
        "Stable & contamination-free",
        "Confidential handling",
        "Fast global delivery",
      ],
    },
    {
      icon: Microscope,
      title: "Frozen Embryos Transportation",
      features: [
        "Specialized dry shippers",
        "Continuous temp monitoring",
        "Secure door-to-door delivery",
        "International standard compliance",
      ],
    },
    {
      icon: Globe,
      title: "Stem Cell Shipping",
      features: [
        "Advanced preservation methods",
        "Certified long-distance transport",
        "Expert biological handlers",
        "Trusted by clinics & labs",
      ],
    },
    {
      icon: Plane,
      title: "Import & Export Permits",
      features: [
        "Inbound & outbound support",
        "Permit handlings",
        "Documentation support",
        "Regulatory coordination",
      ],
    },
  ];

  // Motion variants
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

  const CardComponent = ({ service }: { service: typeof services[0] }) => (
    <motion.div variants={fadeUp(0)}>
      <Card className="border-border hover:shadow-soft transition-smooth bg-gradient-light">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <service.icon className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="font-poppins font-semibold text-xl text-foreground">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 font-inter text-sm"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="business" className="py-20 bg-background">
      <div className="container py-12 mx-auto px-4">
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
            Comprehensive Cryo{" "}
            <span className="text-primary">Shipping Services</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            From IVF samples to stem cells, we provide end-to-end cryogenic
            transport solutions with uncompromising safety and reliability.
          </motion.p>
        </motion.div>

        {/* Single-row Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <CardComponent key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
