import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface TemplateAProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  subNavItems: SubNavItem[];
  children: ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function TemplateA({
  title,
  subtitle,
  description,
  heroImage,
  subNavItems,
  children,
  ctaText,
  ctaHref
}: TemplateAProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      {/* Sub Navigation */}
      <nav className="bg-gray-50 border-b sticky top-16 z-40">
        <div className="container">
          <div className="flex items-center space-x-8 py-3 overflow-x-auto">
            {subNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary whitespace-nowrap transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 py-20">
          {heroImage && (
            <>
              <div className="absolute inset-0 z-0">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>
            </>
          )}
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {subtitle && (
                <p className={`text-sm font-semibold uppercase tracking-wide mb-4 ${heroImage ? 'text-white/80' : 'text-primary'}`}>
                  {subtitle}
                </p>
              )}
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${heroImage ? 'text-white' : 'text-gray-900'}`}>
                {title}
              </h1>
              {description && (
                <p className={`text-lg mb-8 max-w-3xl mx-auto ${heroImage ? 'text-white/90' : 'text-muted-foreground'}`}>
                  {description}
                </p>
              )}
              {ctaText && ctaHref && (
                <Button asChild size="lg" className="rounded-full">
                  <Link href={ctaHref}>{ctaText}</Link>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="py-16">
          {children}
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}