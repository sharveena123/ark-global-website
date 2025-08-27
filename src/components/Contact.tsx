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
  Send
} from "lucide-react";

const Contact = () => {
  const locations = [
    {
      city: "Kuala Lumpur",
      address: "Setapak, Kuala Lumpur, Malaysia",
      description: "Main Operations Hub"
    },
    {
      city: "Seremban", 
      address: "Seremban, Negeri Sembilan, Malaysia",
      description: "Regional Service Center"
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
      value: "info@arkglobalasia.com", 
      link: "mailto:info@arkglobalasia.com",
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
                We will respond within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                    Full Name *
                  </label>
                  <Input placeholder="Your full name" className="font-inter" />
                </div>
                <div>
                  <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                    Organization
                  </label>
                  <Input placeholder="Clinic/Institution name" className="font-inter" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your@email.com" className="font-inter" />
                </div>
                <div>
                  <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input placeholder="+60 12-345 6789" className="font-inter" />
                </div>
              </div>

              <div>
                <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                  Service Required *
                </label>
                <select className="w-full p-3 border border-border rounded-md font-inter bg-background">
                  <option>Select service type</option>
                  <option>IVF Cryo Shipping</option>
                  <option>Stem Cell Shipping</option>
                  <option>Research Sample Transport</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="font-inter font-medium text-sm text-foreground mb-2 block">
                  Shipping Details
                </label>
                <Textarea 
                  placeholder="Please describe your shipping requirements: origin, destination, sample type, urgency, etc."
                  className="font-inter min-h-[120px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg">
                Submit Quote Request
              </Button>

              <p className="font-inter text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
              </p>
            </CardContent>
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
  );
};

export default Contact;