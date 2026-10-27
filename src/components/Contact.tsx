"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import FeedbackCard from "./FeedbackCard";
import WorkButton from "./animata/work-whatsapp-button";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>({});
  const [isSending, setIsSending] = useState(false);

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

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof typeof errors]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setIsSending(false);
          setFormData({ fullName: "", email: "", phone: "", message: "" });
          setErrors({});
          setShowSuccess(true);
        },
        () => {
          alert("Failed to send enquiry. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const encodedMessage = encodeURIComponent(
      `*Hello ARKGlobal!*\nI would like to request a quotation.\n\n*Customer Details:*\n• *Full Name:* ${formData.fullName}\n• *Email:* ${formData.email}\n• *Phone:* ${formData.phone}\n\n*Message:*\n${formData.message}\n\nThank you!`
    );
    window.open(`https://wa.me/60122196896?text=${encodedMessage}`, "_blank");
  };

  const inputBase =
    "font-inter w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

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
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input name="fullName" value={formData.fullName} onChange={handleChange}
                          className={`${inputBase} ${errors.fullName ? "border-red-500" : "border-border"}`}
                          placeholder="Your full name" />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input type="email" name="email" value={formData.email} onChange={handleChange}
                          className={`${inputBase} ${errors.email ? "border-red-500" : "border-border"}`}
                          placeholder="your@email.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input name="phone" value={formData.phone} onChange={handleChange}
                        className={`${inputBase} ${errors.phone ? "border-red-500" : "border-border"}`}
                        placeholder="+60 12-345 6789" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea name="message" value={formData.message} onChange={handleChange}
                        className={`${inputBase} min-h-[120px] ${errors.message ? "border-red-500" : "border-border"}`}
                        placeholder="Please describe your shipping requirements: origin, destination, sample type, urgency, etc." />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="hero" size="lg" type="submit" className="w-full sm:w-1/2 text-lg"
                        disabled={isSending}>
                        {isSending ? "Sending..." : "Submit Enquiry"}
                      </Button>
                      <WorkButton type="button" className="w-full sm:w-1/2" onClick={handleWhatsApp} />
                    </div>
                    <p className="font-inter text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                    </p>
                  </form>
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
