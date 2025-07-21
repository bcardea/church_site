import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export async function HeroSection() {
  const supabase = createClient();

  const { data: heroContent, error } = await supabase
    .from('hero_content')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error || !heroContent) {
    console.error('Error fetching hero content:', error?.message);
    // Render a fallback or nothing if content is not available
    return (
      <section className="relative w-full h-[45vh] bg-gray-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Lifepoint</h1>
          <p className="mt-4 text-lg">Content is being updated. Please check back soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[45vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroContent.image_url && (
          <Image
            src={heroContent.image_url}
            alt={heroContent.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="relative z-10 container h-full flex flex-col justify-end pb-16">
        <div className="max-w-3xl text-white">
          <h1 className="uppercase tracking-tight text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-md">
            {heroContent.title}
          </h1>
          {heroContent.subtitle && (
            <p className="mt-4 text-xl font-medium">{heroContent.subtitle}</p>
          )}
          <p className="text-base opacity-90">Watch the latest sermon</p>

          {heroContent.cta_text && heroContent.cta_url && (
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-white/90">
                <Link href={heroContent.cta_url}>
                  {heroContent.cta_text}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
