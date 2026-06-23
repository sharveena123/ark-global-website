import React from 'react';
import { motion, Variants, easeOut } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">
          Ready to trust us with your fertility journey?
        </h2>
        <p className="font-inter text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Get a personalized quote within 24 hours. Our specialists are standing by to answer your questions.
        </p>
        <button
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
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors"
        >
          Request Your Quote
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
