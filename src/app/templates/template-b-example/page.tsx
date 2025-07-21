import { TemplateB } from "@/components/templates/template-b";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const subNavItems = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" }
];

export default function TemplateBExample() {
  return (
    <TemplateB
      title="Template B Example"
      subtitle="Community Programs"
      description="This is an example of Template B - ideal for program pages, community initiatives, and service-focused content. Features a side-by-side hero layout with alternating content sections."
      heroImage="https://ext.same-assets.com/763745910/3827906442.webp"
      subNavItems={subNavItems}
      ctaText="Join Today"
      ctaHref="#programs"
    >
      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About This Program</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover how this program can transform your life and strengthen your faith journey.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Learn</h3>
                  <p className="text-muted-foreground">
                    Gain new insights and deepen your understanding through structured learning.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Connect</h3>
                  <p className="text-muted-foreground">
                    Build meaningful relationships with others on the same journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Grow</h3>
                  <p className="text-muted-foreground">
                    Experience personal and spiritual growth in a supportive environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Programs</h2>
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Weekly Gatherings</h3>
                  <p className="text-muted-foreground mb-6">
                    Join us every week for inspiring messages, worship, and fellowship. 
                    Our gatherings are designed to encourage and equip you for the week ahead.
                  </p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="#schedule">View Schedule</Link>
                  </Button>
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/1195740054/2881109792.webp"
                    alt="Weekly gatherings"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="https://ext.same-assets.com/272754724/2787392600.webp"
                    alt="Small groups"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Small Groups</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect with others in a more intimate setting through our small group program. 
                    Build lasting friendships while growing in your faith together.
                  </p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="/egroups">Find a Group</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Sundays</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Morning Service</span>
                      <span className="font-medium">9:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Evening Service</span>
                      <span className="font-medium">6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Weekdays</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Bible Study</span>
                      <span className="font-medium">Wed 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Prayer Meeting</span>
                      <span className="font-medium">Fri 6:30 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </TemplateB>
  );
}