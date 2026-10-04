"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
  FileText,
  ShieldCheck,
} from "lucide-react";
import FeedbackCard from "./FeedbackCard";
import { TransportEnquiryDialog } from "@/components/contact/TransportEnquiryDialog";

const Contact = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const locations = [
    {
      city: "Kuala Lumpur",
      address: "Setapak, Kuala Lumpur, Malaysia",
      description: "Main Operations Hub",
    },
    {
      city: "Seremban",
      address: "Seremban, Negeri Sembilan, Malaysia",
      description: "Satellite for International",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+60 12-219 6896",
      link: "tel:+60122196896",
      description: "Here whenever you need us — including urgent shipments",
    },
    {
      icon: Mail,
      title: "Email",
      value: "operations@arkglobalasia.com",
      link: "mailto:operations@arkglobalasia.com",
      description: "For quotes, questions, and peace of mind",
    },
    {
      icon: MessageSquare,
      title: "WeChat & Telegram",
      value: "Available on request",
      link: "#",
      description: "Alternative messaging platforms",
    },
  ];

  const enquiryPoints = [
    "Patient contact details and country of residence",
    "Specimen type, quantity, and planned transfer timing",
    "Originating and receiving clinic names and locations",
    "At least one verifiable clinic detail before we quote",
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="font-inter text-sm font-medium text-primary uppercase tracking-wide mb-3">
              Get in touch
            </p>
            <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-foreground mb-4">
              We&apos;re here when you&apos;re ready
            </h2>
            <p className="font-inter text-base lg:text-lg text-muted-foreground">
              Questions about cryogenic shipping, or ready for a quotation — our team responds
              within 24 hours with clear, personalised guidance.
            </p>
          </div>

          <div className="grid xl:grid-cols-12 gap-8 xl:gap-10 items-start">
            <div className="xl:col-span-8 order-2 xl:order-1 space-y-6">
              <Card className="border-border shadow-soft overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary/80 via-primary to-primary/60" />
                <CardHeader className="pb-2">
                  <CardTitle className="font-poppins font-semibold text-xl text-foreground flex items-center gap-2">
                    <Send className="w-5 h-5 text-primary" />
                    International cryogenic transportation enquiry
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    ARK Global arranges verified international transport for cryopreserved embryos,
                    oocytes, sperm, and related specimens. To provide an accurate quotation, we
                    need details about both clinics, your specimens, and at least one piece of
                    verifiable clinic information.
                  </p>

                  <ul className="space-y-3">
                    {enquiryPoints.map((point) => (
                      <li key={point} className="flex gap-3 font-inter text-sm text-foreground">
                        <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 rounded-lg border border-border/80 bg-muted/30 p-4">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                      Enquiries are reviewed for clinic verification and regulatory compliance
                      before any quote or booking is confirmed. The guided form takes about 5
                      minutes and can be saved until you submit.
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto text-base px-8"
                    onClick={() => setEnquiryOpen(true)}
                  >
                    Start transportation enquiry
                  </Button>
                </CardContent>
              </Card>
              <FeedbackCard />
            </div>

            <div className="xl:col-span-4 order-1 xl:order-2 space-y-5 xl:sticky xl:top-24">
              <Card className="border-border shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="font-poppins font-semibold text-lg text-foreground">
                    Contact information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-poppins font-semibold text-sm text-foreground">
                          {method.title}
                        </h4>
                        <a
                          href={method.link}
                          className="font-inter text-sm font-medium text-primary hover:text-primary/80 transition-smooth break-all"
                        >
                          {method.value}
                        </a>
                        <p className="font-inter text-xs text-muted-foreground mt-0.5">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="font-poppins font-semibold text-lg text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Our locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {locations.map((location, index) => (
                    <div key={index} className="p-3 bg-muted/40 rounded-lg border border-border/60">
                      <h4 className="font-poppins font-semibold text-sm text-foreground">
                        {location.city}
                      </h4>
                      <p className="font-inter text-xs text-muted-foreground">{location.address}</p>
                      <p className="font-inter text-xs text-primary mt-1">{location.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardHeader className="pb-3">
                  <CardTitle className="font-poppins font-semibold text-lg text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Service hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2.5 font-inter text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Emergency</span>
                      <span className="font-medium text-foreground text-right">24/7</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Office</span>
                      <span className="font-medium text-foreground text-right">Mon–Fri, 9–6</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Weekends</span>
                      <span className="font-medium text-foreground text-right">On-call urgent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <TransportEnquiryDialog
        open={enquiryOpen}
        onOpenChange={setEnquiryOpen}
        onSubmitted={() => setShowSuccess(true)}
      />

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[60]">
          <div className="bg-white rounded-xl shadow-lg p-8 w-80 text-center animate-fade-in">
            <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Enquiry submitted</h2>
            <p className="text-gray-600 mb-6">
              Thank you. We will review your details and respond within 24 hours.
            </p>
            <Button variant="hero" size="lg" onClick={() => setShowSuccess(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
