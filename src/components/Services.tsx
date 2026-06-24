"use client";

import { motion, Variants, easeOut } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Microscope, Package, Globe, Plane } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Frozen Eggs",
      features: [
        "Handled with utmost care",
        "IATA & EU compliant",
        "Hand-carried by trained couriers",
        "Flexible, patient-centred scheduling",
      ],
    },
    {
      icon: Package,
      title: "Sperm Samples",
      features: [
        "Secure liquid nitrogen dewars",
        "Stable, contamination-free transport",
        "Discreet, confidential handling",
        "Delivered safely, worldwide",
      ],
    },
    {
      icon: Microscope,
      title: "Frozen Embryos",
      features: [
        "Specialised dry shippers",
        "Live temperature monitoring",
        "Gentle door-to-door delivery",
        "Full international compliance",
      ],
    },
    {
      icon: Globe,
      title: "Stem Cells",
      features: [
        "Advanced preservation methods",
        "Certified long-distance transport",
        "Expert biological handlers",
        "Trusted by clinics & research labs",
      ],
    },
    {
      icon: Plane,
      title: "Permits & Compliance",
      features: [
        "Import & export support",
        "Permit management handled for you",
        "Documentation guidance",
        "Regulatory coordination worldwide",
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
      <Card className="border-border hover:shadow-soft transition-smooth bg-gradient-light h-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <service.icon className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="font-poppins font-semibold text-lg text-foreground">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-inter text-sm text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="business" className="py-20 bg-background">
      <div className="container py-12 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="visible"
          animate="visible"
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUp(0)}
            className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6"
          >
            Trusted with your most <span className="text-primary">delicate journey</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            From frozen embryos to stem cells, we provide end-to-end cryogenic
            transport — protecting what matters most with care you can feel and
            standards you can trust.
          </motion.p>
        </motion.div>

        {/* Single-row Services Grid */}
        <motion.div
          initial="visible"
          animate="visible"
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <CardComponent key={index} service={service} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center"
        >
          <motion.button
            variants={fadeUp(0.1)}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact');
              if (element) {
                const headerOffset = 60;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 font-bold text-white bg-blue-800 rounded-full hover:bg-blue-900 transition-colors"
          >
            Request a Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
