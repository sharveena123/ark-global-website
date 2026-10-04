"use client";

import { Plane, Thermometer, Globe2, Clock } from "lucide-react";
import { TRACK_RECORD } from "@/lib/company-facts";

const Stats = () => {
  const stats = [
    {
      icon: Plane,
      label: "Successful cryo deliveries",
      value: `${TRACK_RECORD.successfulDeliveries}+`,
    },
    {
      icon: Globe2,
      label: "Countries served",
      value: String(TRACK_RECORD.countriesServed),
    },
    {
      icon: Thermometer,
      label: "Cold chain focus",
      value: "LN₂",
      sub: "Vapour-phase dry shippers on every hand-carry movement",
    },
    {
      icon: Clock,
      label: "Years in cryogenic logistics",
      value: String(TRACK_RECORD.yearsExperience),
    },
  ];

  return (
    <section className="py-4 bg-gradient-subtle relative">
      <div className="w-full overflow-hidden">
        <img src="images/collage1.png" alt="Collage 1" className="w-full h-auto object-cover" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center py-4 mb-12">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Proven track record
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Published operational metrics from ARK Global cryogenic transport — updated as verified
            figures grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant hover:shadow-strong transition-all duration-300 border border-border/50">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="font-poppins font-bold text-4xl lg:text-5xl text-foreground">
                      {stat.value}
                    </div>
                    <p className="font-inter font-medium text-muted-foreground">{stat.label}</p>
                    {"sub" in stat && stat.sub ? (
                      <p className="font-inter text-xs text-muted-foreground/80">{stat.sub}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <img src="images/collage2.png" alt="Collage 2" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default Stats;
