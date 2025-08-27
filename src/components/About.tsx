import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Shield, 
  Users, 
  Globe2,
  CheckCircle,
  FileCheck,
  Thermometer,
  HeartHandshake,
  Heart,
  TrendingUp
} from "lucide-react";

const About = () => {
  const certifications = [
    {
      icon: Shield,
      title: "IATA Standards",
      description: "Full compliance with International Air Transport Association regulations for dangerous goods shipping."
    },
    {
      icon: FileCheck,
      title: "EU Tissue Directives",
      description: "Compliant with EU Directives 2004/23/CE, 2006/17/EC, and 2006/86/EC for tissue handling."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality management systems ensuring consistent, reliable service delivery."
    },
    {
      icon: Thermometer,
      title: "Cold Chain Certified",
      description: "Specialized certification in cryogenic transport and liquid nitrogen handling protocols."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Driven to advance supply chain solutions for the life sciences industry while never losing sight of our value to humanity."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, truthfulness and transparency in accordance to the highest ethical and corporate governance standards."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We get things done through commitment, collaboration, and mutual respect. None of us is as smart as all of us."
    },
    {
      icon: TrendingUp,
      title: "Value Creation",
      description: "We strive to build value for all stakeholders through client-centric focus and exceeding competitive benchmarks."
    }
  ];

  return (
    <section id="company" className="py-20 bg-gradient-light">
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
                To transport IVF samples and human reproductive cells for fertility clinics and individual IVF patients.
              </p>
              <p className="font-inter text-muted-foreground">
                Over years of experience helps us contribute to your dream of starting a family by providing the highest level of shipping services. We understand the criticality of maintaining the optimal temperature for liquid nitrogen inside dry shipper dewars.
              </p>
            </div>
            <div className="bg-secondary rounded-xl p-6">
              <h4 className="font-poppins font-semibold text-xl text-foreground mb-4">
                Our Commitment
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  IATA standards & EU-Tissue Directive compliance
                </li>
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Personalized hand-carry door-to-door service
                </li>
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Highly trained onboard personnel
                </li>
                <li className="flex items-center gap-3 font-inter">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cold chain integrity maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Core Values
            </h3>
            <p className="font-inter text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gradient-light rounded-xl border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="font-inter text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Certifications & Compliance
            </h3>
            <p className="font-inter text-muted-foreground">
              Meeting the highest international standards for cryogenic transport
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-poppins font-semibold text-lg text-foreground">
                  {cert.title}
                </h4>
                <p className="font-inter text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Assurance Statement */}
          <div className="mt-12 p-6 bg-secondary rounded-xl border-l-4 border-primary">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                  Our Assurance to You
                </h4>
                <p className="font-inter text-muted-foreground">
                  Every shipment is handled with the highest level of care, monitored continuously, 
                  and delivered with complete documentation. We provide peace of mind for patients 
                  and clinics through our proven track record of successful deliveries with zero 
                  damage incidents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;