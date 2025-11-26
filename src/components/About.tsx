import {  
  Users, 
  TrendingUp,
  ShieldCheck,
  Flame
} from "lucide-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/marquee';


const About = () => {

  const IntCollaborators = [

    { name: "Int1", src: "/international/americas.png" },
    { name: "Int2", src: "/international/calicryo.png" },
    { name: "Int3", src: "/international/cryos.png" },
    { name: "Int4", src: "/international/morula.png" },
    { name: "Int5", src: "/international/newlife.png" },
    { name: "Int6", src: "/international/sgh.png" },
    { name: "Int7", src: "/international/stluke.png" },
    { name: "Int8", src: "/international/thomson.png" },
    { name: "Int9", src: "/international/virtus.png" },
    { name: "Int10", src: "/international/first.png" },
  ];

  const malaysiaCollaborators = [
    { name: "My1", src: "/malaysia/kl.png" },
    { name: "My2", src: "/malaysia/alpha.png" },
    { name: "My3", src: "/malaysia/archukm.png" },
    { name: "My4", src: "/malaysia/everlink.png" },
    { name: "My5", src: "/malaysia/hospsarawak.png" },
    { name: "My6", src: "/malaysia/kensington.png" },
    { name: "My7", src: "/malaysia/alhaya.png" },
    { name: "My8", src: "/malaysia/kpjdaman.png" },
    { name: "My9", src: "/malaysia/metro.png" },
    { name: "My10", src: "/malaysia/sabahcare.png" },
    { name: "My11", src: "/malaysia/sunfert.png" },
    { name: "My12", src: "/malaysia/tmc.png" },
  ];
  const coreValues = [
  {
    title: "Passion",
    description:
      "Driven to advance supply chain solutions for the life sciences industry while never losing sight of our value to humanity.",
    icon: <Flame className="w-6 h-6" />,
    position: "top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty, truthfulness and transparency in accordance to the highest ethical and corporate governance standards.",
    icon: <ShieldCheck className="w-6 h-6" />,
    position: "right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Teamwork",
    description:
      "We get things done through commitment, collaboration, and mutual respect. None of us is as smart as all of us.",
    icon: <Users className="w-6 h-6" />,
    position: "bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2",
  },
  {
    title: "Value Creation",
    description:
      "We strive to build value for all stakeholders through client-centric focus and exceeding competitive benchmarks.",
    icon: <TrendingUp className="w-6 h-6" />,
    position: "left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
];
  return (
    <section id="company" className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
            We Are <span className="text-primary">ARKGlobal</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            ARKGlobal is a Southeast Asia company that specializes in cryo shipping for assisted reproduction. 
            Our core focus is primarily transporting IVF samples and human reproductive cells for fertility clinics and individual IVF patients around the globe.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-light rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-poppins font-bold text-3xl text-foreground mb-6">
                Our Mission
              </h3>
              <p className="font-inter text-lg text-muted-foreground mb-6">
                To provide safe, reliable transport of IVF samples and reproductive cells for fertility clinics and individual patients, both domestically and internationally.         
              </p>
              <p className="font-inter text-muted-foreground">
                Over years of experience helps us contribute to your dream of starting a family by providing the highest level of shipping services. We understand the criticality of maintaining the optimal temperature for liquid nitrogen inside dry shipper dewars.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="font-poppins font-semibold text-xl text-foreground mb-4">
                Our Compliance Standards
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  IATA Compliant
                </li>
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  EU Tissue Directive 2004/23/CE
                </li>
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  EU Directives 2006/17/EC & 2006/86/EC
                </li>
              </ul>
            </div>
          </div>
        </div>
               
 {/* Core Values */}
        <div className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
                Our <span className="text-primary">Core Values</span>
              </h2>
              <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

              {/* Orbit container */}
            <div className="flex justify-center mb-20">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
                {/* Radial gradient background */}
                <div className="absolute w-full h-full rounded-full" style={{
                  background: 'radial-gradient(circle, rgba(0, 174, 238, 0.49) 0%, rgba(0, 173, 238, 0.05) 40%, transparent 70%)'
                }}></div>
                {/* Outer and inner circles */}
                <div className="absolute w-full h-full rounded-full border-2 border-primary/20"></div>

                {/* Value icons around the orbit */}
                {coreValues.map((value, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${value.position} flex flex-col items-center text-center w-32 sm:w-40`}
                  >
                    <div className="bg-primary text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-soft mb-2 hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <p className="font-poppins font-semibold text-xs sm:text-sm text-foreground">{value.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* International Partners - Sliding Left */}
            <div className="text-center mb-6">
              <h3 className="font-poppins font-light text-md text-foreground mb-2">
                 International Partners
              </h3>
            </div>
            
            <Marquee>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
              <MarqueeContent direction="left" speed={40}>
                {IntCollaborators.map((partner, index) => (
                  <MarqueeItem key={index} className="mx-4 lg:mx-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-32 h-20 lg:w-40 lg:h-24 flex items-center justify-center">
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="text-center text-xs text-gray-500 font-medium px-2">
                              ${partner.name}
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>
          {/* Malaysian Partners - Sliding Right */}
            <div className="text-center mt-12 mb-6">
              <h3 className="font-poppins font-light text-md text-foreground mb-2">
                 Malaysian Partners
              </h3>
            
            <Marquee>
              <MarqueeFade side="left" />
              <MarqueeFade side="right" />
              <MarqueeContent direction="right" speed={35}>
                {malaysiaCollaborators.map((partner, index) => (
                  <MarqueeItem key={index} className="mx-4 lg:mx-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 w-32 h-20 lg:w-40 lg:h-24 flex items-center justify-center">
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = `
                            <div class="text-center text-xs text-gray-500 font-medium px-2">
                              ${partner.name}
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
        </div>
    </section>
  );
};

export default About;