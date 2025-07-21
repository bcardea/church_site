import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface TemplateBProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  subNavItems: SubNavItem[];
  children: ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function TemplateB({
  title,
  subtitle,
  description,
  heroImage,
  subNavItems,
  children,
  ctaText,
  ctaHref
}: TemplateBProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      {/* Sub Navigation */}
      <nav className="bg-white border-b shadow-sm sticky top-16 z-40">
        <div className="container">
          <div className="flex items-center justify-center space-x-8 py-4 overflow-x-auto">
            {subNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 whitespace-nowrap transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section - Side by side layout */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                {subtitle && (
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                    {subtitle}
                  </p>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {title}
                </h1>
                {description && (
                  <p className="text-lg text-muted-foreground mb-8">
                    {description}
                  </p>
                )}
                {ctaText && ctaHref && (
                  <Button asChild size="lg" className="rounded-full">
                    <Link href={ctaHref}>{ctaText}</Link>
                  </Button>
                )}
              </div>
              {heroImage && (
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={heroImage}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content with alternating background */}
        <div className="bg-gray-50">
          {children}
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}