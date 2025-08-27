import { Button } from "@/components/ui/button";
import { Shield, Thermometer, Truck, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cryo-lab.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-light">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional cryogenic laboratory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-foreground leading-tight">
                Your Trusted
                <span className="text-primary block">Cryo Shipper</span>
              </h1>
              <p className="font-inter text-xl text-foreground/70 leading-relaxed">
                Southeast Asia's leading specialist in cryogenic shipping for IVF samples, 
                embryos, and stem cells. IATA compliant with door-to-door service ensuring 
                complete cold chain integrity.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-inter font-medium">IATA Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Thermometer className="w-5 h-5 text-primary" />
                </div>
                <span className="font-inter font-medium">Cold Chain Integrity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <span className="font-inter font-medium">Door-to-Door Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="font-inter font-medium">100% Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Request Shipping Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn About Our Process
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="font-inter text-sm text-foreground/60 mb-4">
                Trusted by leading fertility clinics and research institutions
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-inter font-medium text-foreground">
                <span>EU Tissue Directives Compliant</span>
                <span>•</span>
                <span>Liquid Nitrogen Specialists</span>
                <span>•</span>
                <span>24/7 Monitoring</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-primary rounded-2xl p-8 shadow-strong">
              <div className="bg-background/95 rounded-xl p-6 space-y-6">
                <h3 className="font-poppins font-semibold text-xl text-foreground">
                  Specialized Transport Services
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-inter">IVF Samples (Eggs, Embryos, Sperm)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-inter">Stem Cell Shipping</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-inter">Reproductive Cell Transport</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-inter">Research Specimens</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-inter text-sm text-muted-foreground">
                    Operating from Kuala Lumpur & Seremban with global reach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;