import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import WorkButton from "./animata/work-whatsapp-button";
import FeedbackCard from "./FeedbackCard";

const Contact = () => {

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
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};
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
    if (errors[name as keyof typeof errors]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setFormData({ fullName: "", email: "", phone: "", message: "" });
          setErrors({});
          setShowPopup(true); // Show popup instead of alert
        },
        (error) => {
          alert("❌ Failed to send quote request. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const whatsappNumber = "60122196896"; 
    const encodedMessage = encodeURIComponent(
      `*Hello ARKGlobal!* 
I would like to request a quotation.

*Customer Details:*
• *Full Name:* ${formData.fullName}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone}

*Message:*
${formData.message}

Thank you!`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  const inputBase =
    "font-inter w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";

  const locations = [
    {
      city: "Kuala Lumpur",
      address: "Setapak, Kuala Lumpur, Malaysia",
      description: "Main Operations Hub"
    },
    {
      city: "Seremban", 
      address: "Seremban, Negeri Sembilan, Malaysia",
      description: "Satellite for International"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      value: "+60 12-219 6896",
      link: "tel:+60122196896",
      description: "Available 24/7 for urgent shipments"
    },
    {
      icon: Mail,
      title: "Email",
      value: "arkglobalhandler@gmail.com", 
      link: "mailto:arkglobalhandler@gmail.com",
      description: "For quotes and general inquiries"
    },
    {
      icon: MessageSquare,
      title: "WeChat & Telegram",
      value: "Available on request",
      link: "#",
      description: "Alternative messaging platforms"
    }
  ];

  return (
    <>
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Get in Touch with <span className="text-primary">ARKGlobal</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your cryogenic shipping needs? Our expert team is here to 
            provide personalized solutions for your specific requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
           <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-2xl text-foreground flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Request a Quote
                </CardTitle>
                <p className="font-inter text-muted-foreground">
                  We would gladly provide you with detailed information if you have any queries.
                  Expect a response within 24 hours.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`${inputBase} ${
                          errors.fullName ? "border-red-500 focus:ring-red-500" : "border-border"
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputBase} ${
                          errors.email ? "border-red-500 focus:ring-red-500" : "border-border"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputBase} ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-border"
                      }`}
                      placeholder="+60 12-345 6789"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputBase} min-h-[120px] ${
                        errors.message ? "border-red-500 focus:ring-red-500" : "border-border"
                      }`}
                      placeholder="Please describe your shipping requirements: origin, destination, sample type, urgency, etc."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="hero"
                      size="lg"
                      type="submit"
                      className="w-full sm:w-1/2 text-lg"
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Submit Quote Request"}
                    </Button>

                    <WorkButton
                      type="button"
                      className="w-full sm:w-1/2"
                      onClick={handleWhatsApp}
                    />
                  </div>

                  <p className="font-inter text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                  </p>
                </form>
              </CardContent>
                                <FeedbackCard />

            </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-xl text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">
                        {method.title}
                      </h4>
                      <a 
                        href={method.link}
                        className="font-inter font-medium text-primary hover:text-primary/80 transition-smooth"
                      >
                        {method.value}
                      </a>
                      <p className="font-inter text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-xl text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-poppins font-semibold text-foreground mb-1">
                      {location.city}
                    </h4>
                    <p className="font-inter text-muted-foreground mb-1">
                      {location.address}
                    </p>
                    <p className="font-inter text-sm text-primary">
                      {location.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-border shadow-soft">
              <CardHeader>
                <CardTitle className="font-poppins font-semibold text-xl text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Service Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-inter">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Shipments:</span>
                    <span className="font-medium text-foreground">24/7 Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Office Hours:</span>
                    <span className="font-medium text-foreground">Mon-Fri, 9AM-6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Weekend Support:</span>
                    <span className="font-medium text-foreground">On-call for urgent cases</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

     {/* Success Popup - Move outside the section */}
    {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-80 text-center animate-fade-in">
          <CheckCircle className="mx-auto w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Quote Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your request. We will get back to you within 24 hours.
          </p>
          <Button variant="hero" size="lg" onClick={() => setShowPopup(false)}>
            Close
          </Button>
        </div>
      </div>
    )}
  
</>
  );
};
export default Contact;