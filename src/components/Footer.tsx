import { Phone, Mail, MapPin, Linkedin, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-poppins font-bold text-2xl mb-2">
                ARK<span className="text-primary">Global</span>
              </h3>
              <p className="font-inter text-sm text-background/80">
                Your Trusted Cryo Shipper
              </p>
            </div>
            <p className="font-inter text-background/80">
              Southeast Asia's leading specialist in cryogenic shipping for 
              IVF samples, embryos, and stem cells with complete cold chain integrity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <MessageSquare className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg text-background">
              Our Services
            </h4>
            <ul className="space-y-3 font-inter text-background/80">
              <li>
                <a href="#business" className="hover:text-primary transition-smooth">
                  IVF Cryo Shipping
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-primary transition-smooth">
                  Stem Cell Shipping
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-primary transition-smooth">
                  Cryogenic Solutions
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-primary transition-smooth">
                  Global Logistics
                </a>
              </li>
              <li>
                <a href="#business" className="hover:text-primary transition-smooth">
                  Delivery Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg text-background">
              Company
            </h4>
            <ul className="space-y-3 font-inter text-background/80">
              <li>
                <a href="#company" className="hover:text-primary transition-smooth">
                  About ARKGlobal
                </a>
              </li>
              <li>
                <a href="#company" className="hover:text-primary transition-smooth">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#company" className="hover:text-primary transition-smooth">
                  Quality Assurance
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-smooth">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg text-background">
              Contact Information
            </h4>
            <div className="space-y-4 font-inter text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Setapak, Kuala Lumpur</p>
                  <p>Seremban, Negeri Sembilan</p>
                  <p>Malaysia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+60122196896" className="hover:text-primary transition-smooth">
                  +60 12-219 6896
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@arkglobalasia.com" className="hover:text-primary transition-smooth">
                  info@arkglobalasia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-background/60">
              Copyright © {currentYear} ARKGlobal. All rights reserved.
            </p>
            <div className="flex gap-6 font-inter text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-smooth">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                IATA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;