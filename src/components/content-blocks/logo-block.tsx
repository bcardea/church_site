import React from 'react';
import Image from 'next/image';

interface LogoBlockProps {
  type: 'logo_block';
  imageUrl: string;
  altText: string;
}

export function LogoBlock({ imageUrl, altText }: LogoBlockProps) {
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 flex justify-center">
        <Image
          src={imageUrl}
          alt={altText}
          width={300}
          height={150}
          className="h-auto w-auto max-w-xs"
          priority
        />
      </div>
    </div>
  );
}
