'use client';

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { useEffect, useState, useCallback } from 'react';
import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ConnectionCardData {
  id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  cta_url: string | null;
}

function ConnectCard({ image_url, title, description, cta_url }: ConnectionCardData) {
  return (
    <div className="embla__slide p-2">
      <Link href={cta_url || '#'} className="block h-full">
        <Card className="overflow-hidden border-none shadow-md h-full">
          <CardContent className="p-0 h-full">
            <div className="relative aspect-[16/9] h-full">
              {image_url && (
                <Image
                  src={image_url}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
                {description && <p className="text-white/90 text-sm">{description}</p>}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export function ConnectSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [cards, setCards] = useState<ConnectionCardData[]>([]);
  const supabase = createClient();

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from('connection_cards')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching connection cards:', error.message);
      } else {
        setCards(data || []);
      }
    };

    fetchCards();
  }, [supabase]);

  if (cards.length === 0) {
    return null; // Don't render the section if there are no cards
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover more ways to connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            There are always new ways to participate in what God is doing through our church,
            including events, tours, worship music, and so much more.
          </p>
        </div>

        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {cards.map((card) => (
                <ConnectCard key={card.id} {...card} />
              ))}
            </div>
          </div>
          <button className="embla__button embla__button--prev" onClick={scrollPrev} disabled={prevBtnDisabled}>
            <ArrowLeft className="h-5 w-5 text-white" />
          </button>
          <button className="embla__button embla__button--next" onClick={scrollNext} disabled={nextBtnDisabled}>
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
