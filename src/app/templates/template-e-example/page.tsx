import { TemplateE } from "@/components/templates/template-e";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const subNavItems = [
  { label: "About", href: "#about" },
  { label: "Info", href: "#info" },
  { label: "Sign Up", href: "#signup" }
];

export default function TemplateEExample() {
  return (
    <TemplateE
      title="Template E Example"
      subtitle="Announcement"
      description="A simple gradient hero perfect for quick announcements."
      heroImage="https://ext.same-assets.com/3680949849/2314867779.webp"
      subNavItems={subNavItems}
      ctaText="Learn More"
      ctaHref="#info"
    >
      <section id="about" className="py-16 bg-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">About This Announcement</h2>
          <p className="text-muted-foreground">Provide a short overview explaining the news or update.</p>
        </div>
      </section>
      <section id="info" className="py-16 bg-gray-50 text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">More Information</h2>
          <p className="text-muted-foreground">Include any extra details or next steps for your audience.</p>
        </div>
      </section>
      <section id="signup" className="py-16 bg-white text-center">
        <div className="container">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contact">Get Connected</Link>
          </Button>
        </div>
      </section>
    </TemplateE>
  );
}
