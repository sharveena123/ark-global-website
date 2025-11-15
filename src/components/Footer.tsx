import { Phone, Mail, MapPin, Linkedin, MessageSquare } from "lucide-react";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
              <p className="font-inter text-xs text-background/60 mt-1">
                Reg No: CT0123202-W
              </p>
            </div>
            <p className="font-inter text-background/80">
              Southeast Asia's leading specialist in cryogenic shipping for 
              IVF samples, embryos, and stem cells with complete cold chain integrity.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/ark-global-cryogenic-shipper-1721362a5"
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-smooth">
                <Linkedin className="w-5 h-5 text-primary" />
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
                  IVF Cryo Shipping
              </li>
              <li>
                  Stem Cell Shipping
              </li>
              <li>
                  Cryogenic Solutions
              </li>
              <li>
                  Global Logistics
              </li>
              <li>
                  Delivery Solutions
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
                <button 
                  onClick={(e) => handleSmoothScroll(e, 'company')}
                  className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit text-left p-0"
                >
                  About ARKGlobal
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleSmoothScroll(e, 'company')}
                  className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit text-left p-0"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleSmoothScroll(e, 'company')}
                  className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit text-left p-0"
                >
                  Quality Assurance
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit text-left p-0"
                >
                  Contact Us
                </button>
              </li>
              {/* <li>
                <button className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit text-left p-0">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit text-left p-0">
                  Privacy Policy
                </button>
              </li> */}
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
                <a href="mailto:arkglobalhandler@gmail.com" className="hover:text-primary transition-smooth">
                  arkglobalhandler@gmail.com
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
            {/* <div className="flex gap-6 font-inter text-sm text-background/60">
              <button className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit p-0">
                Terms & Conditions
              </button>
              <button className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit p-0">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-smooth bg-transparent border-none cursor-pointer font-inherit text-inherit p-0">
                IATA Compliance
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;