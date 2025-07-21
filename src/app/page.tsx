import { SiteHeader } from "@/components/header/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ConnectSection } from "@/components/home/connect-section";
import { MinistrySection } from "@/components/home/ministry-section";
import { SiteFooter } from "@/components/footer/site-footer";

export const revalidate = 0;

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ConnectSection />
        <MinistrySection />
      </main>
      <SiteFooter />
    </div>
  );
}
