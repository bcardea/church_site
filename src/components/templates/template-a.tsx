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
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-16 z-40 shadow-sm">
        <div className="container">
          <div className="flex items-center gap-1 py-4 overflow-x-auto scrollbar-hide">
            {subNavItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap transition-all duration-200 rounded-lg hover:bg-gray-100/70 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-32 md:py-40 lg:py-48 overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {heroImage && (
            <>
              <div className="absolute inset-0 z-0">
                <img
                  src={heroImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />
              </div>
            </>
          )}
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {subtitle && (
                <p className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] mb-6 ${
                  heroImage ? 'text-white/90' : 'text-gray-600'
                }`}>
                  <span className="w-8 h-px bg-current opacity-40" />
                  {subtitle}
                  <span className="w-8 h-px bg-current opacity-40" />
                </p>
              )}
              
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight ${
                heroImage ? 'text-white' : 'text-gray-900'
              }`}>
                {title}
              </h1>
              
              {description && (
                <p className={`text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto ${
                  heroImage ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {description}
                </p>
              )}
              
              {ctaText && ctaHref && (
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    asChild 
                    size="lg" 
                    className={`rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${
                      heroImage 
                        ? 'bg-white text-gray-900 hover:bg-gray-100' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    <Link href={ctaHref}>
                      {ctaText}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* Content */}
        <div className="py-20 md:py-24 lg:py-32">
          <div className="container">
            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-gray-900 prose-a:underline-offset-4 prose-strong:text-gray-900 prose-ul:my-6 prose-li:my-2">
              {children}
            </div>
          </div>
        </div>
      </main>
      
      <SiteFooter />
    </div>
  );
}


