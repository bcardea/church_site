import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ExperienceCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function ExperienceCard({ title, description, linkText, linkHref }: ExperienceCardProps) {
  return (
    <div className="flex flex-col items-start p-6 space-y-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
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
      <div className="container text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome <span className="font-light">Home.</span></h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          No matter where you are, online or in person, become a part of all God is doing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExperienceCard
            title="Join us on Sunday at 10am"
            description="Worship with us in person at 600 Jarman Rd. Chesapeake, VA"
            linkText="Get directions"
            linkHref="https://www.google.com/maps/search/?api=1&query=600+Jarman+Rd+Chesapeake+VA"
          />
          <ExperienceCard
            title="Watch our Services"
            description="Experience previous services at Lifepoint"
            linkText="Watch Now"
            linkHref="https://www.youtube.com/@Lifepoint_HamptonRoads"
          />
          <ExperienceCard
            title="Plan Your Visit"
            description="We're so excited to have you join us this Sunday. Click below to make sure you're all set!"
            linkText="Plan Now"
            linkHref="/im-new"
          />
          <ExperienceCard
            title="Kidspoint"
            description="We can't wait to meet your little ones! For a better Sunday morning experience, click below to pre-register your children for Kidspoint"
            linkText="Pre-register Now"
            linkHref="/kidspoint"
          />
        </div>
      </div>
    </section>
  );
}
