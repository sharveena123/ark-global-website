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
  HeartHandshake
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
      icon: HeartHandshake,
      title: "Patient-Centered Care",
      description: "Every shipment represents hope and dreams. We handle each sample with the utmost care and respect."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our trained professionals understand the critical nature of reproductive and stem cell samples."
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "From Southeast Asia to worldwide destinations, we ensure safe delivery wherever you need."
    }
  ];

  return (
    <section id="company" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Trust, Expertise & <span className="text-primary">Compliance</span>
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            ARKGlobal is Southeast Asia's premier cryogenic shipping specialist, 
            dedicated to preserving life's most precious possibilities through expert transport services.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-poppins font-semibold text-3xl text-foreground">
              Your Partner in Preserving Hope
            </h3>
            <div className="space-y-4 font-inter text-muted-foreground">
              <p>
                Based in the heart of Southeast Asia with offices in Kuala Lumpur and Seremban, 
                ARKGlobal has established itself as the trusted partner for fertility clinics, 
                research institutions, and medical facilities worldwide.
              </p>
              <p>
                We understand that every sample we transport represents hope, dreams, and the 
                future of families. That's why we've built our entire operation around one 
                core principle: absolute reliability in every aspect of cryogenic transport.
              </p>
              <p>
                Our team of trained professionals combines years of expertise with cutting-edge 
                technology to ensure that every shipment arrives safely, on time, and with 
                complete cold chain integrity maintained throughout the journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero">
                Learn About Our Process
              </Button>
              <Button variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-background shadow-soft">
                <CardContent className="p-6">
                  <div className="flex gap-4">
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
                </CardContent>
              </Card>
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