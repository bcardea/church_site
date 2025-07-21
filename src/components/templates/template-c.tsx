import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface SubNavItem {
  label: string;
  href: string;
}

interface TemplateCProps {
  title: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  subNavItems: SubNavItem[];
  children: ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function TemplateC({
  title,
  subtitle,
  description,
  heroImage,
  subNavItems,
  children,
  ctaText,
  ctaHref
}: TemplateCProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      {/* Sub Navigation with colored background */}
      <nav className="bg-elevation-dark text-white sticky top-16 z-40">
        <div className="container">
          <div className="flex items-center space-x-8 py-4 overflow-x-auto">
            {subNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-white/70 hover:text-white whitespace-nowrap transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elevation-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section - Minimal with large text */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              {subtitle && (
                <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-6 text-center">
                  {subtitle}
                </p>
              )}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 text-center leading-tight">
                {title}
              </h1>
              {description && (
                <p className="text-xl text-muted-foreground mb-10 max-w-4xl mx-auto text-center leading-relaxed">
                  {description}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {ctaText && ctaHref && (
                  <Button asChild size="lg" className="rounded-full px-8">
                    <Link href={ctaHref}>{ctaText}</Link>
                  </Button>
                )}
                {heroImage && (
                  <div className="mt-8 sm:mt-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                      <img
                        src={heroImage}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured image section */}
        {heroImage && (
          <section className="py-0">
            <div className="container">
              <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <div className="py-20">
          {children}
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}