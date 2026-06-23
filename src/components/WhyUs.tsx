import { CheckCheck, ShieldCheck, Thermometer, Truck } from "lucide-react";
import { easeOut, motion, Variants } from "framer-motion";
import FeedbackDisplay from "./FeedbackDisplay";

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
    title: "100% Cold-Chain Integrity",
    description: "Hand-carried door to door by trained couriers—your samples never sit in warehouses.",
  },
  {
    icon: Thermometer,
    title: "Real-Time Tracking",
    description: "Know exactly where your precious samples are at every moment of their journey.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Compliant",
    description: "IATA/WHO certified equipment ensuring international standards are exceeded, not just met.",
  },
  {
    icon: CheckCheck,
    title: "Trusted by Clinics Worldwide",
    description: "Years of proven success with leading fertility clinics and research institutions.",
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
              Complete peace of mind from start to finish
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              We don't just ship samples. We care for them like they matter, because we know they do.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">Hand-carried every step</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">Real-time tracking & updates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">24/7 dedicated support</span>
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
              {/* Customer Reviews Section - Wide Card */}
        <div className="mt-16">
          <FeedbackDisplay showTitle={true} />
        </div>
    </section>
  );
};

export default WhyUs;