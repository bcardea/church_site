import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to plan your visit?</h2>
          <p className="text-white/80 mb-6">Make plans to join us this Sunday!</p>
          <Button asChild className="rounded-full bg-elevation-orange hover:bg-elevation-orange/90">
            <Link href="/locations">Find an experience</Link>
          </Button>
        </div>

        <div className="w-full h-px bg-white/20 my-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          <div className="space-y-3">
            <h3 className="font-bold">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm">Who we are</Link></li>
              <li><Link href="/about/#leadership" className="text-white/70 hover:text-white text-sm">Leadership</Link></li>
              <li><Link href="/about/#beliefs" className="text-white/70 hover:text-white text-sm">Beliefs</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/locations" className="text-white/70 hover:text-white text-sm">Locations</Link></li>
              <li><Link href="/streaming" className="text-white/70 hover:text-white text-sm">Watch Online</Link></li>
              <li><Link href="/egroups" className="text-white/70 hover:text-white text-sm">Groups</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/sermons" className="text-white/70 hover:text-white text-sm">Sermons</Link></li>
              <li><Link href="https://elevationworship.com" className="text-white/70 hover:text-white text-sm">Music</Link></li>
              <li><Link href="/store" className="text-white/70 hover:text-white text-sm">Store</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Serve</h3>
            <ul className="space-y-2">
              <li><Link href="/eteams" className="text-white/70 hover:text-white text-sm">Volunteer</Link></li>
              <li><Link href="/outreach" className="text-white/70 hover:text-white text-sm">Outreach</Link></li>
              <li><Link href="/giving" className="text-white/70 hover:text-white text-sm">Give</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Next Gen</h3>
            <ul className="space-y-2">
              <li><Link href="/ekidz" className="text-white/70 hover:text-white text-sm">eKidz</Link></li>
              <li><Link href="/youth" className="text-white/70 hover:text-white text-sm">Youth</Link></li>
              <li><Link href="/young-adults" className="text-white/70 hover:text-white text-sm">Young Adults</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-white/70 hover:text-white text-sm">Contact</Link></li>
              <li><Link href="/jobs" className="text-white/70 hover:text-white text-sm">Jobs</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-white text-sm">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="https://storage.googleapis.com/msgsndr/X3eoYfldwznzUvmpfctr/media/67c5b50b9778f6800e21e53b.svg"
              alt="Lifepoint Hampton Roads"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Lifepoint Hampton Roads. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
