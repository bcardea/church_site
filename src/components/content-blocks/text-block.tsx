import React from 'react';

interface TextBlockProps {
  type: 'text_block';
  title?: string | null;
  content: string | string[];
}

export function TextBlock({ title, content }: TextBlockProps) {
  // Handle both string and array content
  const processedContent = Array.isArray(content) 
    ? content.map(line => `<p>${line}</p>`).join('')
    : content;

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">{title}</h2>
        )}
        <div 
          className="prose lg:prose-lg max-w-none text-gray-600"
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>
    </div>
  );
}
