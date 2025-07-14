import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface MinistryCardProps {
  image: string;
  title: string;
  tagline: string;
  ministry: string;
  linkHref: string;
  bgColor: string;
  textColor: string;
}

function MinistryCard({
  image,
  title,
  tagline,
  ministry,
  linkHref,
  bgColor,
  textColor
}: MinistryCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${bgColor}`}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-white/10 to-black/20 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="p-8 h-full flex flex-col justify-between relative z-10">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/20 backdrop-blur-sm">{ministry}</span>
          <h3 className={`text-2xl font-bold mb-3 ${textColor} leading-tight`}>{title}</h3>
          {tagline && <p className="text-sm opacity-90 mb-2">{tagline}</p>}
        </div>
        <Button asChild variant="link" className={`px-0 justify-start ${textColor} group-hover:translate-x-1 transition-transform duration-300`}>
          <Link href={linkHref} className="flex items-center mt-4">
            Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function MinistrySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">A place for you and your family</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join small groups, get involved in outreach, and discover ways for your whole family to grow in their faith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <MinistryCard
            image=""
            title="Connecting people. Activating faith."
            tagline=""
            ministry="eGroup Ministry"
            linkHref="/egroups/about"
            bgColor="bg-gradient-to-br from-blue-800 to-blue-950"
            textColor="text-white"
          />
          <MinistryCard
            image=""
            title="Making an impact — locally and globally."
            tagline=""
            ministry="Outreach Ministry"
            linkHref="/outreach"
            bgColor="bg-gradient-to-br from-green-600 to-green-800"
            textColor="text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <MinistryCard
            image=""
            title="Partnering with parents to develop kids' faith."
            tagline=""
            ministry="Children's Ministry"
            linkHref="/ekidz"
            bgColor="bg-gradient-to-br from-cyan-400 to-cyan-600"
            textColor="text-white"
          />
          <MinistryCard
            image=""
            title="Developing youth who influence culture."
            tagline=""
            ministry="Youth Ministry"
            linkHref="/youth"
            bgColor="bg-gradient-to-br from-gray-800 to-black"
            textColor="text-white"
          />
          <MinistryCard
            image=""
            title="Building community. Deepening faith."
            tagline=""
            ministry="Young Adult Ministry"
            linkHref="/young-adults"
            bgColor="bg-gradient-to-br from-orange-400 to-orange-600"
            textColor="text-white"
          />
        </div>

        <div className="w-full">
          <MinistryCard
            image=""
            title="Inspiring your faith and creating an atmosphere of worship to God."
            tagline=""
            ministry="Worship Ministry"
            linkHref="https://elevationworship.com"
            bgColor="bg-gradient-to-br from-gray-800 to-black"
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
}
