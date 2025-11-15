import { useEffect, useRef, useState } from "react";
import { Plane, Thermometer, Users, Clock, Eye, TrendingUp } from "lucide-react";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue, get, set, runTransaction } from "firebase/database";

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase only once
let app;
let db;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
db = getDatabase(app);

const Stats = () => {
  const [counters, setCounters] = useState({
    deliveries: 0,
    countries: 0,
    clients: 0,
    years: 0,
    totalVisitors: 0,
    todayVisitors: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Plane, label: "Successful Cryo Deliveries", value: 900, key: "deliveries" },
    { icon: Thermometer, label: "Countries Served", value: 16, key: "countries" },
    { icon: Users, label: "Satisfied Clients", value: 100, key: "clients", isPercentage: true },
    { icon: Clock, label: "Years of Experience", value: 3, key: "years" },
  ];

  // Firebase visitor tracking
  useEffect(() => {
    const totalRef = ref(db, "visitors/total");
    const todayRef = ref(db, "visitors/today");
    const lastResetRef = ref(db, "visitors/lastReset");

    const initializeVisitors = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const lastResetSnap = await get(lastResetRef);
        const lastReset = lastResetSnap.val();

        if (lastReset !== today) {
          await set(todayRef, 0);
          await set(lastResetRef, today);
        }

        await runTransaction(totalRef, (currentValue) => (currentValue || 0) + 1);
        await runTransaction(todayRef, (currentValue) => (currentValue || 0) + 1);
      } catch (error) {
        console.error("Error initializing visitors:", error);
      }
    };

    initializeVisitors();

    const unsubscribeTotal = onValue(totalRef, (snap) => {
      setCounters((prev) => ({ ...prev, totalVisitors: snap.val() || 0 }));
    });

    const unsubscribeToday = onValue(todayRef, (snap) => {
      setCounters((prev) => ({ ...prev, todayVisitors: snap.val() || 0 }));
    });

    return () => {
      unsubscribeTotal();
      unsubscribeToday();
    };
  }, []);

  // Animation function
  const startAnimation = () => {
    const duration = 800;
    const steps = 40;

    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }

        setCounters((prev) => ({
          ...prev,
          [stat.key]: Math.floor(current),
        }));
      }, duration / steps);
    });
  };

  // Handle animation differently for mobile vs desktop
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // adjust breakpoint if needed

    if (isMobile) {
      // On mobile, show final numbers immediately
      const mobileCounters = {};
      stats.forEach((stat) => {
        mobileCounters[stat.key] = stat.value;
      });
      setCounters((prev) => ({ ...prev, ...mobileCounters }));
    } else {
      // Desktop: animate when section comes into view
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        },
        { threshold: 0.4 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-4 bg-gradient-subtle relative">
      {/* Top Collage Image */}
      <div className="w-full overflow-hidden">
        <img src="images/collage1.png" alt="Collage 1" className="w-full h-auto object-cover" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center py-4 mb-16">
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Proven Track Record
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in cryogenic shipping
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
                    <div className="font-poppins font-bold text-5xl text-foreground">
                      {counters[stat.key]}
                      {stat.key === "deliveries" && "+"}
                      {stat.isPercentage && "%"}
                    </div>
                    <p className="font-inter font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Visitor Analytics */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full z-10"></div>
                <div className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-40"></div>
                <div
                  className="absolute w-4 h-4 bg-green-400 rounded-full animate-ping opacity-30"
                  style={{ animationDelay: "0.5s" }}
                ></div>
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
                  {counters.totalVisitors.toLocaleString()}
                </div>
              </div>

              <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <p className="font-inter text-sm text-muted-foreground font-medium">Today's Visitors</p>
                </div>
                <div className="font-poppins font-bold text-4xl text-accent">
                  {counters.todayVisitors.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="font-inter text-xs text-muted-foreground">
                <span className="text-primary font-semibold">●</span> Real-time updates • Last synced just now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Collage Image */}
      <div className="w-full overflow-hidden">
        <img src="images/collage2.png" alt="Collage 2" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default Stats;