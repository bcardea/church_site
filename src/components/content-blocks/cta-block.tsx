import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface CtaBlockProps {
  title: string;
  content: string;
  button_text: string;
  button_href: string;
}

export function CtaBlock({ title, content, button_text, button_href }: CtaBlockProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div
          className="max-w-2xl mx-auto text-muted-foreground mb-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Button asChild size="lg">
          <Link href={button_href} target="_blank" rel="noopener noreferrer">
            {button_text}
          </Link>
        </Button>
      </div>
    </section>
  );
}
