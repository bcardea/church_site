import { TemplateF } from "@/components/templates/template-f";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const subNavItems = [
  { label: "Overview", href: "#overview" },
  { label: "Stories", href: "#stories" },
  { label: "Connect", href: "#connect" }
];

export default function TemplateFExample() {
  return (
    <TemplateF
      title="Template F Example"
      subtitle="Story Focus"
      description="Demonstrates a hero with overlay followed by navigation."
      heroImage="https://ext.same-assets.com/1837070386/3340408662.webp"
      subNavItems={subNavItems}
      ctaText="Read More"
      ctaHref="#stories"
    >
      <section id="overview" className="py-16 bg-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground">This template is great for sharing inspiring stories.</p>
        </div>
      </section>
      <section id="stories" className="py-16 bg-gray-50 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Stories</h2>
          <p className="text-muted-foreground">Add testimonials or reports of how lives have been changed.</p>
        </div>
      </section>
      <section id="connect" className="py-16 bg-white text-center">
        <div className="container">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Connect</Link>
          </Button>
        </div>
      </section>
    </TemplateF>
  );
}
