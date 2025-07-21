import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Facebook } from 'lucide-react';
import { ApplePodcastIcon } from '@/components/icons/apple-podcast-icon';
import { SpotifyIcon } from '@/components/icons/spotify-icon';

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to plan your visit?</h2>
          <p className="text-white/80 mb-6">Make plans to join us this Sunday!</p>
          <Button asChild className="rounded-full bg-green-500 hover:bg-green-500/90 text-white px-8 py-3">
            <Link href="/plan-your-visit">Plan Your Visit</Link>
          </Button>
        </div>

        <div className="w-full h-px bg-white/20 my-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">Who We Are</Link></li>
              <li><Link href="/about#leadership" className="text-white/70 hover:text-white text-sm transition-colors">Leadership</Link></li>
              <li><Link href="/about#beliefs" className="text-white/70 hover:text-white text-sm transition-colors">Beliefs</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/join-the-team" className="text-white/70 hover:text-white text-sm transition-colors">Join the Team</Link></li>
              <li><Link href="https://lifepointhamptonroads.churchcenter.com/groups/small-groups?enrollment=open_signup%2Crequest_to_join&filter=enrollment" className="text-white/70 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">Small Groups</Link></li>
              <li><Link href="/connect" className="text-white/70 hover:text-white text-sm transition-colors">Connect with Us</Link></li>
              <li><Link href="https://lifepointhamptonroads.churchcenter.com/giving" className="text-white/70 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">Give</Link></li>
            </ul>
          </div>

          {/* Next Gen Column */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Next Gen</h3>
            <ul className="space-y-2">
              <li><Link href="/kidspoint" className="text-white/70 hover:text-white text-sm transition-colors">Kidspoint</Link></li>
              <li><Link href="/youth" className="text-white/70 hover:text-white text-sm transition-colors">Youth</Link></li>
            </ul>
          </div>

          {/* Serve Column */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Serve</h3>
            <ul className="space-y-2">
              <li><Link href="/outreach" className="text-white/70 hover:text-white text-sm transition-colors">Outreach</Link></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm">Help</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@lifepointhamptonroads.org" className="text-white/70 hover:text-white text-sm transition-colors">Email Us</a></li>
              <li><Link href="/privacy-policy" className="text-white/70 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 my-10" />

        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Listen to our Podcast</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://podcasts.apple.com/gb/podcast/lifepoint-hampton-roads-with-pastors-eddie-and/id1679166871" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><ApplePodcastIcon className="h-6 w-6" /></a>
              <a href="https://open.spotify.com/show/0Idz1x2XtpKPTBZ2MJme5j" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><SpotifyIcon className="h-6 w-6" /></a>
            </div>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">YouTube Channel</h3>
            <div className="flex justify-center lg:justify-start">
              <a href="https://www.youtube.com/@Lifepoint_HamptonRoads" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Youtube className="h-6 w-6" /></a>
            </div>
          </div>

          <div className="mb-8 lg:mb-0">
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://www.instagram.com/lifepointhamptonroads" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="https://www.facebook.com/lifepointhamptonroads/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 my-10" />

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
