"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EEAT from "@/components/EEAT";
import FAQ from "@/components/FAQ";
import ClosingStatement from "@/components/ClosingStatement";
import { homeFaqs } from "@/lib/faq-data";

const Stats = dynamic(() => import("@/components/Stats"), { ssr: true });
const WhyUs = dynamic(() => import("@/components/WhyUs"), { ssr: true });
const WhatsAppButton = dynamic(() => import("@/components/WhatsappButton"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      <Hero />
      <Services />
      <Stats />
      <About />
      <EEAT />
      <Testimonials />
      <WhyUs />
      <FAQ
        faqs={homeFaqs}
        title="Questions you may be carrying"
        subtitle="We know this journey can feel overwhelming. Here are clear, honest answers to help you feel more at ease."
      />
      <ClosingStatement />
      <Contact />
      <Footer />
    </div>
  );
}
