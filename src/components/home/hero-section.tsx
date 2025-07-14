import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://storage.googleapis.com/msgsndr/X3eoYfldwznzUvmpfctr/media/67dc2bfab01e2fdc079f6ad3.jpeg"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="relative z-10 container h-full flex flex-col justify-end pb-16">
        <div className="max-w-2xl text-white">
          <h1 className="uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
            TIME TO<br />RISE & SHINE
          </h1>
          <p className="mt-4 text-xl font-medium">Larry Brey</p>
          <p className="text-base opacity-90">Watch the latest sermon</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
              <Link href="/sermons/time-to-rise-shine-larry-brey">
                Watch sermon
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
              <Link href="https://live.elevationchurch.online/">
                Watch full experience →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
