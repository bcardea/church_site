// src/components/content-blocks/image-gallery-block.tsx

import Image from 'next/image';

interface ImageGalleryBlockProps {
  images: { src: string; alt: string }[];
}

export function ImageGalleryBlock({ images }: ImageGalleryBlockProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={400}
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
