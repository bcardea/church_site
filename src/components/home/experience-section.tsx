import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExperienceCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function ExperienceCard({ icon, title, description, linkText, linkHref }: ExperienceCardProps) {
  return (
    <div className="flex flex-col items-start p-6 space-y-4">
      <div className="text-4xl">{icon}</div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <Button asChild variant="link" className="px-0">
        <Link href={linkHref} className="flex items-center">
          {linkText} <span className="ml-1">→</span>
        </Link>
      </Button>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find the right experience for you.</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          No matter where you are, online or in person, become a part of all God is doing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExperienceCard
            icon="🏢"
            title="Physical Campus"
            description="Worship with us in person at one of our physical campuses."
            linkText="Find a location"
            linkHref="/locations"
          />
          <ExperienceCard
            icon="📺"
            title="Live Streams"
            description="eFam is our online community who stream church from wherever they are."
            linkText="Find a time"
            linkHref="/streaming"
          />
          <ExperienceCard
            icon="👪"
            title="Watch Party"
            description="Watch Parties are groups of eFam that stream the worship experience together."
            linkText="Find a watch party"
            linkHref="/watch-parties/about"
          />
          <ExperienceCard
            icon="🌐"
            title="Pop-Up"
            description="A Pop-Up is where we bring church to different cities across the nation."
            linkText="Find a pop-up"
            linkHref="/pop-ups"
          />
        </div>

        <Button asChild variant="outline" className="mt-12 rounded-full">
          <Link href="/locations">
            View locations
          </Link>
        </Button>
      </div>
    </section>
  );
}
