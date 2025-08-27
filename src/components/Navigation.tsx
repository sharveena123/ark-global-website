import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Company", href: "#company" },
    { name: "Business", href: "#business" },
    { name: "Reach Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6 text-muted-foreground font-inter">
            <a href="tel:+60122196896" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Phone className="w-3 h-3" />
              +60 12-219 6896
            </a>
            <a href="mailto:info@arkglobalasia.com" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Mail className="w-3 h-3" />
              info@arkglobalasia.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="font-poppins font-bold text-2xl text-foreground">
              ARK<span className="text-primary">Global</span>
            </h1>
            <span className="ml-2 text-sm text-muted-foreground font-inter hidden md:block">
              Your Trusted Cryo Shipper
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-inter font-medium text-foreground hover:text-primary transition-smooth"
              >
                {item.name}
              </a>
            ))}
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-inter font-medium text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="hero" size="sm" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;