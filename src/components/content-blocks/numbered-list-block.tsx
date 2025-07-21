import React from 'react';

interface NumberedListProps {
  type: 'numbered_list';
  title: string;
  items: string[];
}

export function NumberedListBlock({ title, items }: NumberedListProps) {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{title}</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
