import { TemplateA } from "@/components/templates/template-a";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const subNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "What to Expect", href: "#expect" },
  { label: "Get Involved", href: "#involved" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" }
];

export default function TemplateAExample() {
  return (
    <TemplateA
      title="Template A Example"
      subtitle="Ministry Focus"
      description="This is an example of Template A - perfect for ministry pages, events, and program overviews. Features a full-width hero with overlay text and comprehensive content sections."
      heroImage="https://ext.same-assets.com/3463242785/1198186214.webp"
      subNavItems={subNavItems}
      ctaText="Get Started"
      ctaHref="#involved"
    >
      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris.
                </p>
                <p className="text-muted-foreground">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://ext.same-assets.com/1773292928/53675696.webp"
                  alt="Ministry overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="expect" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Worship</h3>
                <p className="text-muted-foreground">
                  Experience meaningful worship and connect with God through music and prayer.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Teaching</h3>
                <p className="text-muted-foreground">
                  Learn from practical, Bible-based messages that apply to your daily life.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Build lasting relationships with others who share your faith and values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="involved" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to take your next step? Here are some ways to get more involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/locations">Find a Location</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </TemplateA>
  );
}