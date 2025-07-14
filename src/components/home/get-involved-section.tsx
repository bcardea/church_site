import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface InvolvementCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

function InvolvementCard({ image, title, description, linkText, linkHref }: InvolvementCardProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="mt-auto">
        <Button asChild variant="outline" className="rounded-full w-full">
          <Link href={linkHref}>{linkText}</Link>
        </Button>
      </div>
    </div>
  );
}

export function GetInvolvedSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How To Get Involved</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how God can use your gifts to make an eternal impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InvolvementCard
            image="https://ext.same-assets.com/3117665944/3256746667.webp"
            title="Volunteer"
            description="Participate in the mission to advance the gospel by serving on a volunteer team."
            linkText="Learn more"
            linkHref="/eteams"
          />
          <InvolvementCard
            image="https://ext.same-assets.com/1685956723/1317406799.webp"
            title="Lead"
            description="Lead an eGroup, host a Watch Party or become a student leader."
            linkText="Learn more"
            linkHref="/lead"
          />
          <InvolvementCard
            image="https://ext.same-assets.com/2795399208/330837824.webp"
            title="Jobs"
            description="Explore job opportunities to use your gifts in a ministry setting."
            linkText="Learn more"
            linkHref="/opportunities"
          />
        </div>
      </div>
    </section>
  );
}
