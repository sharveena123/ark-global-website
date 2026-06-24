"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/schema";

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  id?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to the questions patients and clinics ask most about international IVF shipping.",
  faqs,
  id = "faq",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="font-poppins font-medium text-primary text-sm tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mt-3 mb-4">
            {title}
          </h2>
          <p className="font-inter text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-secondary rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-poppins font-semibold text-foreground text-base lg:text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1">
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
