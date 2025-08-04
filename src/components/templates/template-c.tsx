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
  description?: string | { type: string; title?: string; content: string | string[] };
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
      
      {/* Sub Navigation */}
      {subNavItems && subNavItems.length > 0 && (
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
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-40 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              {subtitle && (
                <p className="text-sm font-semibold uppercase tracking-wide text-page-accent mb-4">
                  {subtitle}
                </p>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                {title}
              </h1>
              {description && (
                <div className="mb-8 max-w-3xl mx-auto">
                  {typeof description === 'string' ? (
                    <p className="text-lg text-muted-foreground">
                      {description}
                    </p>
                  ) : (
                    <div>
                      {description.title && (
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{description.title}</h2>
                      )}
                      {Array.isArray(description.content) ? (
                        <div className="space-y-2">
                          {description.content.map((line, index) => (
                            <p key={index} className="text-lg text-muted-foreground">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-lg text-muted-foreground">{description.content}</p>
                      )}
                    </div>
                  )}
                </div>
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
          <div className="container">
            {children}
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}