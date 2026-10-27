"use client";

import { useEffect, useState } from "react";
import { Plane, Thermometer, Globe2, Clock, Eye, TrendingUp } from "lucide-react";
import { get, onValue, ref, runTransaction, set } from "firebase/database";
import { isFirebaseInitialized, realtimeDb } from "@/lib/firebase";
import { TRACK_RECORD } from "@/lib/company-facts";

const Stats = () => {
  const [visitorCounts, setVisitorCounts] = useState({
    total: 0,
    today: 0,
  });
  const [visitorTrackingError, setVisitorTrackingError] = useState(false);

  useEffect(() => {
    if (!isFirebaseInitialized || !realtimeDb) {
      return;
    }

    const totalRef = ref(realtimeDb, "visitors/total");
    const todayRef = ref(realtimeDb, "visitors/today");
    const lastResetRef = ref(realtimeDb, "visitors/lastReset");
    let isMounted = true;

    const handleDatabaseError = (error: Error) => {
      console.error("[ARKGlobal] Unable to load live visitor analytics.", error);
      if (isMounted) {
        setVisitorTrackingError(true);
      }
    };

    const initializeVisitors = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const lastResetSnapshot = await get(lastResetRef);

        if (lastResetSnapshot.val() !== today) {
          await set(todayRef, 0);
          await set(lastResetRef, today);
        }

        await runTransaction(totalRef, (currentValue) => (currentValue || 0) + 1);
        await runTransaction(todayRef, (currentValue) => (currentValue || 0) + 1);
      } catch (error) {
        handleDatabaseError(error instanceof Error ? error : new Error(String(error)));
      }
    };

    const unsubscribeTotal = onValue(
      totalRef,
      (snapshot) => {
        if (isMounted) {
          setVisitorCounts((current) => ({ ...current, total: snapshot.val() || 0 }));
        }
      },
      handleDatabaseError
    );
    const unsubscribeToday = onValue(
      todayRef,
      (snapshot) => {
        if (isMounted) {
          setVisitorCounts((current) => ({ ...current, today: snapshot.val() || 0 }));
        }
      },
      handleDatabaseError
    );

    void initializeVisitors();

    return () => {
      isMounted = false;
      unsubscribeTotal();
      unsubscribeToday();
    };
  }, []);

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

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full z-10 ${visitorTrackingError ? "bg-muted-foreground" : "bg-green-500"}`} />
                {!visitorTrackingError ? (
                  <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-40" />
                ) : null}
              </div>
              <h3 className="font-poppins font-semibold text-xl text-foreground">
                Live Website Analytics
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-primary" />
                  <p className="font-inter text-sm text-muted-foreground font-medium">Total Visitors</p>
                </div>
                <div className="font-poppins font-bold text-4xl text-primary">
                  {visitorCounts.total.toLocaleString()}
                </div>
              </div>

              <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <p className="font-inter text-sm text-muted-foreground font-medium">Today&apos;s Visitors</p>
                </div>
                <div className="font-poppins font-bold text-4xl text-accent">
                  {visitorCounts.today.toLocaleString()}
                </div>
              </div>
            </div>

            <p className="mt-6 text-center font-inter text-xs text-muted-foreground">
              <span className={visitorTrackingError ? "text-muted-foreground" : "text-primary"}>●</span>{" "}
              {visitorTrackingError
                ? "Live visitor analytics are temporarily unavailable."
                : "Real-time updates"}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <img src="images/collage2.png" alt="Collage 2" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default Stats;
