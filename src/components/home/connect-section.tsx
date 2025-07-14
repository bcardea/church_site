import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ConnectCardProps {
  image: string;
  title: string;
  description: string;
  linkHref: string;
}

function ConnectCard({ image, title, description, linkHref }: ConnectCardProps) {
  return (
    <Link href={linkHref} className="block">
      <Card className="overflow-hidden border-none shadow-md">
        <CardContent className="p-0">
          <div className="relative aspect-[16/9]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
              <p className="text-white/90 text-sm">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function ConnectSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover more ways to connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            There are always new ways to participate in what God is doing through our church,
            including events, tours, worship music, and so much more.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <ConnectCard
                image="https://ext.same-assets.com/1961196060/1795367905.webp"
                title="Register for YTHX"
                description="A camp where youth will deepen their relationship with God. July 8-11."
                linkHref="/ythx"
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <ConnectCard
                image="https://ext.same-assets.com/3701992434/2469607390.webp"
                title="Worship Experiences"
                description="Join us online or in person for our weekend services."
                linkHref="/locations"
              />
            </CarouselItem>
            <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <ConnectCard
                image="https://ext.same-assets.com/272754724/2787392600.webp"
                title="Elevation Worship"
                description="Experience uplifting worship music from Elevation Worship."
                linkHref="https://elevationworship.com"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
