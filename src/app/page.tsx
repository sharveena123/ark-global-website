"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import WhyUs from "@/components/WhyUs";

// Skip static rendering for this page since it has dynamic external dependencies
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <WhatsAppButton />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <CTASection />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
