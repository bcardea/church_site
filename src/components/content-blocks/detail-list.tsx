import React from 'react';

interface DetailItem {
  term: string;
  description: string;
}

interface DetailListProps {
  type: 'detail_list';
  title: string;
  items: DetailItem[];
}

export function DetailList({ title, items }: DetailListProps) {
  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{title}</h2>
        <dl className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <span className="absolute left-0 top-1 h-5 w-5 text-indigo-600">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                {item.term}
              </dt>
              <dd className="inline ml-2 text-gray-600">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
