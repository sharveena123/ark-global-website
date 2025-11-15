import { CheckCheck, ShieldCheck, Thermometer, Truck } from "lucide-react";
import { easeOut, motion, Variants } from "framer-motion";

const WhyUs = () => {
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

  const features = [
  {
    icon: Truck,
    title: "Carry-on Baggage Transportation",
    description: "All samples are hand-carried door to door by trained onboard couriers for maximum safety.",
  },
  {
    icon: Thermometer,
    title: "Real-time 5G Data Logger",
    description: "State-of-the-art data logger enabling continuous, real-time tracking throughout the entire handling and transport process.",
  },
  {
    icon: ShieldCheck,
    title: "MVE Dewars IATA/WHO Certified",
    description: "Certified by IATA/WHO, ensuring full compliance with international airline and global health standards for secure cryogenic transport.",
  },
  {
    icon: CheckCheck,
    title: "Trusted Experience",
    description: "Years of proven success working with fertility clinics and IVF patients worldwide.",
  }
];

  return (
    <section className="py-20 bg-gradient-light">
      <div className="container mb-20 mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Side - Title and Description */}
          <motion.div variants={fadeUp(0)} className="lg:top-8">
            <div className="bg-primary/5 rounded-2xl px-6 py-3 inline-block mb-6">
              <span className="font-poppins font-medium text-primary text-sm tracking-wider uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Trusted Cryo-Shipping Solutions
            </h2>
            <p className="font-inter text-xl text-muted-foreground mb-8">
              Industry-leading expertise in cryogenic shipping with proven reliability, 
              compliance, and care for your most critical shipments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">100% Success Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">IATA Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeUp((index + 1) * 0.1)}>
                <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-elegant transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;