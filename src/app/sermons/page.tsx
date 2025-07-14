import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SermonCardProps {
  image: string;
  title: string;
  speaker: string;
  slug: string;
}

function SermonCard({ image, title, speaker, slug }: SermonCardProps) {
  return (
    <Link href={`/sermons/${slug}`} className="block group">
      <div className="overflow-hidden rounded-lg">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="rounded-full bg-white p-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{speaker}</p>
        </div>
      </div>
    </Link>
  );
}

export default function SermonsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://ext.same-assets.com/3984405072/723250809.jpeg"
              alt="Latest sermon"
              className="object-cover w-full h-full"
              crossOrigin="anonymous"
            />
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

        {/* Sermons Listing */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sermons</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Looking for hope or direction? Search to discover the perfect sermon for your current season.
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search sermons..."
                  className="pl-10 rounded-full w-full"
                />
              </div>
              <div>
                <Button variant="outline" className="rounded-full">
                  Filters
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <SermonCard
                image="https://ext.same-assets.com/4085268698/4060922661.jpeg"
                title="Time To Rise & Shine"
                speaker="Larry Brey"
                slug="time-to-rise-shine-larry-brey"
              />

              <SermonCard
                image="https://ext.same-assets.com/3981931517/2152331090.jpeg"
                title="How To Surrender To God"
                speaker="Pastor Jabin Chavez"
                slug="how-to-surrender-to-god-jabin-chavez"
              />

              <SermonCard
                image="https://ext.same-assets.com/1051266939/4160579506.jpeg"
                title="Move It To The Middle"
                speaker="Pastor Steven Furtick"
                slug="move-it-to-the-middle"
              />

              <SermonCard
                image="https://ext.same-assets.com/713748061/1778002894.jpeg"
                title="The Prayer That Repairs"
                speaker="Pastor Steven Furtick"
                slug="the-prayer-that-repairs"
              />

              <SermonCard
                image="https://ext.same-assets.com/4085268698/4060922661.jpeg"
                title="New Number Same Name"
                speaker="Pastor Steven Furtick"
                slug="new-number-same-name"
              />

              <SermonCard
                image="https://ext.same-assets.com/983214650/2947724480.jpeg"
                title="With God There's Always A Meanwhile"
                speaker="Lysa TerKeurst"
                slug="with-god-there-s-always-a-meanwhile-lysa-terkeurst"
              />

              <SermonCard
                image="https://www.datocms-assets.com/60661/1737937659-20250126_ytarchivethumbnail_lookforwardnotfar.jpeg"
                title="Look Forward Not Far"
                speaker="Pastor Steven Furtick"
                slug="look-forward-not-far"
              />

              <SermonCard
                image="https://www.datocms-assets.com/60661/1737331580-20250119_whenyoujustcantwin_thumbnail.jpeg"
                title="When You Just Can't Win"
                speaker="Pastor Steven Furtick"
                slug="when-you-just-can-t-win"
              />
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="rounded-full px-8">Load more</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
