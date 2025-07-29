import { TemplateD } from "@/components/templates/template-d";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const subNavItems = [
  { label: "Intro", href: "#intro" },
  { label: "Details", href: "#details" },
  { label: "Contact", href: "#contact" }
];

export default function TemplateDExample() {
  return (
    <TemplateD
      title="Template D Example"
      subtitle="Special Event"
      description="Showcases the split hero layout with a bold call to action."
      heroImage="https://ext.same-assets.com/1486344081/3249250275.webp"
      subNavItems={subNavItems}
      ctaText="Register"
      ctaHref="#contact"
    >
      <section id="intro" className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Welcome</h2>
          <p className="text-muted-foreground">
            This example demonstrates the new Template D with an eye catching hero section.
          </p>
        </div>
      </section>
      <section id="details" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Details</h2>
          <p className="text-muted-foreground">
            Use this area for additional content blocks or information about your event.
          </p>
        </div>
      </section>
      <section id="contact" className="py-16 bg-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </TemplateD>
  );
}
