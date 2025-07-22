import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface TemplateFProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  subNavItems: SubNavItem[];
  children: ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function TemplateF({
  title,
  subtitle,
  description,
  heroImage,
  subNavItems,
  children,
  ctaText,
  ctaHref
}: TemplateFProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
          {heroImage && (
            <div className="absolute inset-0 -z-10">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          )}
          <div className="container">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                {description}
              </p>
            )}
            {ctaText && ctaHref && (
              <Button asChild size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100">
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            )}
          </div>
        </section>

        {subNavItems.length > 0 && (
          <nav className="border-b bg-white sticky top-16 z-30">
            <div className="container">
              <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
                {subNavItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}

        <div className="py-20 md:py-24 bg-white">
          <div className="container">
            {children}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
