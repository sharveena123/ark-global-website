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
      title: "Temperature Control",
      description: "Each shipment is kept at optimal liquid nitrogen levels inside dry shipper dewars throughout transit.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Safety",
      description: "All cryo deliveries meet IATA standards and EU-Tissue Directives for international transport.",
    },
    {
      icon: CheckCheck,
      title: "Trusted Experience",
      description: "Years of proven success working with fertility clinics and IVF patients worldwide.",
    }
  ];


  return (
    <section className="py-16 bg-gradient-light">
      <div className="container mx-auto px-4">

        {/* Additional Features Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mb-20"
        >
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.slice(0, 2).map((feature, index) => (
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

          {/* Centered Title Section */}
          <div className="text-center py-12 mb-12">
            <motion.h3 variants={fadeUp(0.2)} className="font-poppins font-bold text-3xl text-foreground mb-4">
              Why Choose ARKGlobal
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div key={index + 2} variants={fadeUp((index + 4) * 0.1)}>
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

        </div>
    </section>
  );
};

export default WhyUs;