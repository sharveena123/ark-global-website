import React from 'react';


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
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/pic1.png" alt="Laboratory samples" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg ml-10">
              <img src="/images/pic3.png" alt="Cryogenic storage" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 px-4 py-12 md:px-8 lg:px-16 text-center flex flex-col justify-center items-center min-h-[400px] lg:min-h-[600px]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-gray-800 font-bold mb-6 leading-tight">
              Safe, trusted transport of IVF samples & embryos worldwide
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 leading-relaxed">
              Handled with precision, care, and complete cold-chain protection. Your fertility journey matters to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerOffset = 60;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="group cursor-pointer rounded-full border-4 border-blue-800 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100"
              >
                <div className="flex items-center justify-center gap-2 rounded-full bg-blue-800 px-8 py-4 font-bold text-white hover:bg-blue-900 transition-colors">
                  Get a Quote in 24 Hours
                </div>
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerOffset = 60;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 font-bold text-blue-800 border-2 border-blue-800 rounded-full hover:bg-blue-50 transition-colors"
              >
                Talk to a Specialist
              </button>
            </div>
          </div>

          {/* Right Side Images - Hidden on mobile and tablet */}
          <div className="hidden lg:flex flex-col gap-8 items-end">
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img src="/images/pic2.png" alt="Cryogenic process" className="w-full h-full object-cover" />
            </div>
            <div className="w-52 h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg mr-10">
              <img src="/images/pic5.png" alt="Sample container" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Center Image - Hidden on mobile and tablet */}
        <div className="hidden lg:flex justify-center -mt-43">
          <div className="w-52 h-48 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src="/images/pic4.png" alt="Laboratory work" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;