import React from 'react';

interface QuoteBlockProps {
  type: 'quote_block';
  content: string;
  attribution?: string | null;
}

export function QuoteBlock({ content, attribution }: QuoteBlockProps) {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
          <div className="stylistic-quote-mark" aria-hidden="true">&ldquo;</div>
          <p className="mb-4">{content}</p>
        </blockquote>
        {attribution && (
          <cite className="mt-4 block text-right text-gray-600">- {attribution}</cite>
        )}
      </div>
    </div>
  );
}
