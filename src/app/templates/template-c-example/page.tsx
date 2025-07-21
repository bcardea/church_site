import { TemplateC } from "@/components/templates/template-c";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const subNavItems = [
  { label: "Vision", href: "#vision" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Partners", href: "#partners" },
  { label: "Support", href: "#support" }
];

export default function TemplateCExample() {
  return (
    <TemplateC
      title="Template C Example"
      subtitle="Global Impact"
      description="This is an example of Template C - perfect for vision-focused pages, impact stories, and mission-driven content. Features bold typography and a distinctive dark navigation bar."
      heroImage="https://ext.same-assets.com/3701992434/2469607390.webp"
      subNavItems={subNavItems}
      ctaText="Learn More"
      ctaHref="#impact"
    >
      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We envision a world where every person has the opportunity to experience 
              God's love and discover their purpose in life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Extending our impact across communities and cultures worldwide.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
                <p className="text-muted-foreground">
                  Showing God's love through practical acts of service and kindness.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Transformative Growth</h3>
                <p className="text-muted-foreground">
                  Empowering individuals to reach their God-given potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-elevation-dark text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Making an Impact</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                See how God is working through our community to create lasting change.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-elevation-orange mb-2">500+</div>
                <p className="text-white/80">Lives Transformed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-elevation-teal mb-2">25</div>
                <p className="text-white/80">Communities Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-elevation-yellow mb-2">1M+</div>
                <p className="text-white/80">Meals Provided</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-elevation-lightyellow mb-2">100</div>
                <p className="text-white/80">Volunteers Active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Stories of Hope</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/1961196060/1795367905.webp"
                    alt="Story 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Finding Purpose</h3>
                  <p className="text-muted-foreground mb-6">
                    "I never thought I could make a difference until I found my place in this community. 
                    Now I'm helping others discover their purpose too."
                  </p>
                  <p className="font-medium">- Sarah M.</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/3117665944/3256746667.webp"
                    alt="Story 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Restored Relationships</h3>
                  <p className="text-muted-foreground mb-6">
                    "Through the support and guidance I received here, my family was restored 
                    and our faith became stronger than ever."
                  </p>
                  <p className="font-medium">- Michael T.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the Mission</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Be part of something bigger. Your support helps us continue making a difference 
              in communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/giving">Give Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="/eteams">Volunteer</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </TemplateC>
  );
}