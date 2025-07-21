import React from 'react';

interface Belief {
  belief: string;
  description: string;
  scriptures: string;
}

interface BeliefListProps {
  type: 'belief_list';
  title: string;
  beliefs: Belief[];
}

export function BeliefList({ title, beliefs }: BeliefListProps) {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">{title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {beliefs.map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.belief}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-sm text-gray-500 italic">{item.scriptures}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
