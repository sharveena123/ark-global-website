import { Button } from "@/components/ui/button";
import ivfSamplesLeft from "@/assets/ivf-samples-left.jpg";
import cryoWorkRight from "@/assets/cryo-work-right.jpg";
import cryoDewarBottomLeft from "@/assets/cryo-dewar-bottom-left.jpg";
import embryoLabBottomCenter from "@/assets/embryo-lab-bottom-center.jpg";
import cryoContainerBottomRight from "@/assets/cryo-container-bottom-right.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-light pt-24">
      <div className="container mx-auto px-4 py-20">
        {/* U-Shaped Image Layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Top Row - Left and Right Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={ivfSamplesLeft} 
                alt="IVF samples in laboratory" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={cryoWorkRight} 
                alt="Cryogenic work in laboratory" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="text-center py-12 px-4">
            <h1 className="font-poppins font-bold text-4xl lg:text-6xl text-foreground mb-6 leading-tight">
              Your trusted cryo shipper for
              <br />
              <span className="text-foreground">assisted reproduction</span>
            </h1>
            <Button 
              variant="default" 
              size="lg" 
              className="bg-[#4BA3E3] hover:bg-[#3d8bc7] text-white px-12 py-6 text-lg rounded-full shadow-lg"
            >
              Contact Us
            </Button>
          </div>

          {/* Bottom Row - Three Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={cryoDewarBottomLeft} 
                alt="Cryogenic dewar handling" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={embryoLabBottomCenter} 
                alt="Embryo laboratory work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={cryoContainerBottomRight} 
                alt="Cryo container sealing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
