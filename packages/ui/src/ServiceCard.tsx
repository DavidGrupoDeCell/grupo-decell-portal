// Arquivo: packages/ui/src/ServiceCard.tsx

import React from 'react';

// Definimos quais "informações" nosso cartão irá receber
export interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">
        Saiba mais →
      </a>
    </div>
  );
}