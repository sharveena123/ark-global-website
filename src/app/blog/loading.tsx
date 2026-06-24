import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 text-center">
          <div className="h-6 w-44 mx-auto rounded-full bg-white/20 mb-6" />
          <div className="h-12 w-80 max-w-full mx-auto rounded-lg bg-white/20 mb-4" />
          <div className="h-5 w-[32rem] max-w-full mx-auto rounded-lg bg-white/15" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-soft border border-secondary overflow-hidden"
              >
                <div className="p-6 bg-secondary/30">
                  <div className="h-6 w-24 rounded-full bg-secondary mb-3" />
                  <div className="h-6 w-full rounded bg-secondary/80 mb-2" />
                  <div className="h-6 w-4/5 rounded bg-secondary/80" />
                </div>
                <div className="p-6">
                  <div className="h-4 w-full rounded bg-secondary mb-2" />
                  <div className="h-4 w-11/12 rounded bg-secondary mb-2" />
                  <div className="h-4 w-3/4 rounded bg-secondary mb-6" />
                  <div className="h-4 w-28 rounded bg-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
