import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface MinistryCardProps {
  image: string;
  title: string;
  tagline: string;
  ministry: string;
  linkHref: string;
  bgColor?: string;
  textColor: string;
}

function MinistryCard({
  image,
  title,
  tagline,
  ministry,
  linkHref,
  bgColor,
  textColor,
}: MinistryCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${bgColor || ''}`}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover z-0"
        />
      )}

      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-2xl z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent z-20"></div>

      <div className="p-8 h-full flex flex-col justify-between relative z-30">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-white/20 backdrop-blur-sm">
            {ministry}
          </span>
          <h3 className={`text-2xl font-bold mb-3 ${textColor} leading-tight`}>{title}</h3>
          {tagline && <p className="text-sm opacity-90 mb-2">{tagline}</p>}
        </div>
        <Button
          asChild
          variant="link"
          className={`px-0 justify-start ${textColor} group-hover:translate-x-1 transition-transform duration-300`}
        >
          <Link href={linkHref} className="flex items-center mt-4">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
            image="https://saltassets.b-cdn.net/lchr/DSC00780.jpg"
            title="Join the Team, Live out your Purpose"
            tagline=""
            ministry="Join the Team"
            linkHref="/join-the-team"
            bgColor=""
            textColor="text-white"
          />
          <MinistryCard
            image="https://saltassets.b-cdn.net/lchr/DSC09748.jpg"
            title="Find your next group"
            tagline=""
            ministry="Small Groups"
            linkHref="/small-groups"
            bgColor=""
            textColor="text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <MinistryCard
            image="https://saltassets.b-cdn.net/lchr/image%20(4).jpeg"
            title="Developing the next generation for Jesus"
            tagline=""
            ministry="Kidspoint"
            linkHref="/kidspoint"
            bgColor=""
            textColor="text-white"
          />
          <MinistryCard
            image="https://saltassets.b-cdn.net/lchr/image%20(2).jpeg"
            title="Youth: You are the NOW Generation"
            tagline=""
            ministry="Youth"
            linkHref="/youth"
            bgColor=""
            textColor="text-white"
          />
          <MinistryCard
            image="https://saltassets.b-cdn.net/lchr/image%20(1).jpeg"
            title="Serve the local community"
            tagline=""
            ministry="Outreach"
            linkHref="/outreach"
            bgColor=""
            textColor="text-white"
          />
        </div>

        <div className="w-full">
          <MinistryCard
            image="https://saltassets.b-cdn.net/lchr/image%20(3).jpeg"
            title="Get connected with Lifepoint"
            tagline=""
            ministry="Connect"
            linkHref="/connect-with-us"
            bgColor=""
            textColor="text-white"
          />
        </div>
      </div>
    </section>
  );
}
