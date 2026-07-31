import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-[#0A2540] to-[#6C7A89]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="h-4 w-28 rounded bg-white/20 mb-6" />
          <div className="h-6 w-24 rounded-full bg-white/20 mb-4" />
          <div className="h-12 w-full rounded bg-white/20 mb-4" />
          <div className="h-4 w-40 rounded bg-white/15 mb-4" />
          <div className="h-4 w-64 rounded bg-white/15" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="h-4 w-full rounded bg-secondary" />
          ))}
          <div className="h-4 w-3/4 rounded bg-secondary" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
