import { SiteHeader } from "@/components/header/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ConnectSection } from "@/components/home/connect-section";
import { MinistrySection } from "@/components/home/ministry-section";
import { GetInvolvedSection } from "@/components/home/get-involved-section";
import { SiteFooter } from "@/components/footer/site-footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ConnectSection />
        <MinistrySection />
        <GetInvolvedSection />
      </main>
      <SiteFooter />
    </div>
  );
}
