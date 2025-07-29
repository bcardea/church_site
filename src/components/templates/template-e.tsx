import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface TemplateEProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  subNavItems: SubNavItem[];
  children: ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function TemplateE({
  title,
  subtitle,
  description,
  heroImage,
  subNavItems,
  children,
  ctaText,
  ctaHref
}: TemplateEProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {subNavItems.length > 0 && (
        <nav className="border-b bg-white/80 backdrop-blur sticky top-16 z-30">
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

      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-elevation-light to-white py-32 md:py-40 text-center overflow-hidden">
          {heroImage && (
            <div className="absolute inset-0 opacity-20 -z-10">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="container">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-wider text-page-accent mb-6">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {title}
            </h1>
            {description && (
              <p className="text-lg mb-10 max-w-2xl mx-auto text-muted-foreground">
                {description}
              </p>
            )}
            {ctaText && ctaHref && (
              <Button asChild size="lg" className="rounded-full">
                <Link href={ctaHref}>{ctaText}</Link>
              </Button>
            )}
          </div>
        </section>

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
