import React from 'react';
import Image from 'next/image';
import ExternalLinkButton from './animata/shining-button';


const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
      
      {/* Background Pattern - Enlarged and Full Coverage */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-16 relative z-10">
        {/* U-Shaped Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left Side Images - Hidden on mobile and tablet */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg relative">
              <Image src="/images/pic1.png" alt="Cryogenic IVF sample transport by ARKGlobal courier" fill className="object-cover" sizes="208px" priority />
            </div>
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg ml-10 relative">
              <Image src="/images/pic3.png" alt="Frozen embryo storage in liquid nitrogen dewar" fill className="object-cover" sizes="208px" loading="lazy" />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 px-4 py-12 md:px-8 lg:px-16 text-center flex flex-col justify-center items-center min-h-[400px] lg:min-h-[600px]">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3 font-inter">
              Trusted by fertility clinics worldwide
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-gray-800 font-bold mb-4 leading-tight font-poppins">
              Protecting what matters most on your{" "}
              <span className="text-blue-600">fertility journey</span>
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-4 leading-relaxed font-inter">
              We safely transport IVF samples, embryos, oocytes, and reproductive
              cells worldwide — with the care, precision, and protection every step
              of your journey deserves.
            </p>
            <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8 font-inter italic">
              Behind every shipment is a story of hope. We&apos;re honoured to be part of yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <ExternalLinkButton />
              <a
                href="/ivf-transport"
                className="font-inter text-sm font-semibold text-blue-800 hover:text-blue-600 underline underline-offset-4 transition-colors"
              >
                See how we protect your samples →
              </a>
            </div>
          </div>

          {/* Right Side Images - Hidden on mobile and tablet */}
          <div className="hidden lg:flex flex-col gap-8 items-end">
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg relative">
              <Image src="/images/pic2.png" alt="IATA certified cryogenic dry shipper for embryo transport" fill className="object-cover" sizes="208px" loading="lazy" />
            </div>
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg mr-10 relative">
              <Image src="/images/pic5.png" alt="Secure biological sample container for air transport" fill className="object-cover" sizes="208px" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Bottom Center Image - Hidden on mobile and tablet */}
        <div className="hidden lg:flex justify-center -mt-30">
          <div className="w-52 h-56 bg-gray-300 rounded-lg overflow-hidden shadow-lg relative">
            <Image src="/images/pic4.png" alt="Embryology laboratory handling frozen reproductive samples" fill className="object-cover" sizes="208px" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;