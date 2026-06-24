import { Heart, ShieldCheck, Globe2, Thermometer, FileCheck2 } from "lucide-react";
import Link from "next/link";

const trustPoints = [
  {
    icon: Heart,
    title: "Protecting Precious Possibilities",
    description:
      "Every embryo, egg, and sperm sample represents someone's hope for a family. We treat each shipment with the reverence it deserves — because we understand what is truly at stake.",
  },
  {
    icon: Thermometer,
    title: "Trusted Cryogenic Expertise",
    description:
      "Our team lives and breathes cryogenic logistics. From dry shipper preparation to real-time temperature monitoring, we bring deep scientific precision to every journey we undertake.",
  },
  {
    icon: Globe2,
    title: "Global Reach with Personal Care",
    description:
      "We serve fertility clinics and patients across 200+ countries — yet every shipment receives individual attention. You are never just a reference number to us.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Without Compromise",
    description:
      "Hand-carried door to door. Continuous cold chain monitoring. Zero tolerance for shortcuts. Your samples travel with the same care we would want for our own.",
  },
  {
    icon: FileCheck2,
    title: "International Compliance You Can Trust",
    description:
      "IATA P650 certified, EU Tissue Directive compliant, and MOF registered. We navigate complex import and export regulations so you can focus on what matters — your fertility journey.",
  },
];

export default function EEAT() {
  return (
    <section id="trust" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="font-poppins font-medium text-primary text-sm tracking-wider uppercase">
            Why Choose ARKGlobal
          </span>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-4">
            Trusted care for life&apos;s most precious journey
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Behind every shipment is a story of hope. We are committed to protecting
            what matters most — with the expertise of a specialist and the compassion
            of people who truly understand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={point.title}
              className={`bg-white rounded-2xl p-6 shadow-soft border border-secondary md:col-span-1 lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${index === 4 ? "lg:col-start-4" : ""}`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-foreground mb-2">
                {point.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            "IATA P650 Certified",
            "MOF Registered (Malaysia)",
            "EU Tissue Compliant",
            "WHO Standards",
            "MVE Dewars Certified",
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 bg-white border border-primary/20 text-foreground font-inter text-sm font-semibold px-4 py-2 rounded-full"
            >
              <ShieldCheck className="w-4 h-4 text-primary" />
              {badge}
            </span>
          ))}
        </div>

        <div className="text-center">
          <p className="font-inter text-muted-foreground mb-4">
            Every journey is different. We&apos;re here to guide yours:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ivf-transport"
              className="font-inter text-sm font-semibold text-primary hover:underline"
            >
              IVF Transport →
            </Link>
            <Link
              href="/embryo-shipping"
              className="font-inter text-sm font-semibold text-primary hover:underline"
            >
              Embryo Shipping →
            </Link>
            <Link
              href="/cryo-shipping"
              className="font-inter text-sm font-semibold text-primary hover:underline"
            >
              Cryo Shipping →
            </Link>
            <Link
              href="/blog"
              className="font-inter text-sm font-semibold text-primary hover:underline"
            >
              Expert Guides →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
