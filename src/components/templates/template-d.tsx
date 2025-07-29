import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface TemplateDProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  subNavItems: SubNavItem[];
  children: ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function TemplateD({
  title,
  subtitle,
  description,
  heroImage,
  subNavItems,
  children,
  ctaText,
  ctaHref
}: TemplateDProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {subNavItems.length > 0 && (
        <nav className="bg-gray-50 border-b sticky top-16 z-30">
          <div className="container">
            <div className="flex items-center space-x-6 py-3 overflow-x-auto">
              {subNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}

      <main className="flex-1">
        <section className="relative bg-white overflow-hidden">
          {heroImage && (
            <div className="absolute inset-0 -z-10">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            </div>
          )}
          <div className="container py-32 md:py-40 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {subtitle && (
                <p className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
                  {subtitle}
                </p>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {title}
              </h1>
              {description && (
                <p className="text-lg mb-8 text-white/90 max-w-xl">
                  {description}
                </p>
              )}
              {ctaText && ctaHref && (
                <Button asChild size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100">
                  <Link href={ctaHref}>{ctaText}</Link>
                </Button>
              )}
            </div>
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
