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
      title: "Never Out of Our Hands",
      description:
        "Your samples are hand-carried door to door by trained couriers — never left in a cargo hold or passed to unqualified handlers. You can rest knowing someone is always watching over them.",
    },
    {
      icon: Thermometer,
      title: "Peace of Mind, in Real Time",
      description:
        "Our 5G data loggers let you and your clinic see temperature readings live, throughout the entire journey. No guessing. No waiting until arrival to know your samples are safe.",
    },
    {
      icon: ShieldCheck,
      title: "Built to the Highest Standards",
      description:
        "IATA/WHO-certified MVE dewars, full regulatory compliance, and protocols designed for the most delicate biological cargo on earth. Because 'good enough' is never good enough here.",
    },
    {
      icon: CheckCheck,
      title: "A Partner Who Understands",
      description:
        "Years of experience with fertility clinics and patients worldwide. We speak your language — clinical, emotional, and logistical — and we're with you at every step.",
    },
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
          <motion.div variants={fadeUp(0)} className="lg:top-8">
            <div className="bg-primary/5 rounded-2xl px-6 py-3 inline-block mb-6">
              <span className="font-poppins font-medium text-primary text-sm tracking-wider uppercase">
                How We Deliver
              </span>
            </div>
            <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Where precision meets compassion
            </h2>
            <p className="font-inter text-xl text-muted-foreground mb-8">
              Cryogenic expertise you can trust — delivered with personal care to
              fertility clinics and patients around the world.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">
                  100% cold chain success rate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">
                  IATA P650 certified couriers
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-inter text-muted-foreground">
                  Here for you, around the clock
                </span>
              </div>
            </div>
          </motion.div>

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
      <div className="mt-16">
        <FeedbackDisplay showTitle={true} />
      </div>
    </section>
  );
};

export default WhyUs;
