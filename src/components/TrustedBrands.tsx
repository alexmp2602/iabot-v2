'use client';

import Image from 'next/image';

export default function TrustedBrands() {
  const brands = [
    {
      src: '/assets/img/marcas/colegio-los-robles-logo.png',
      alt: 'Colegio Los Robles',
    },
    { src: '/assets/img/marcas/colegio-sm.png', alt: 'Colegio Santa María' },
    { src: '/assets/img/marcas/swiss-medical-logo.png', alt: 'Swiss Medical' },
    { src: '/assets/img/marcas/medife.png', alt: 'Medife' },
    { src: '/assets/img/marcas/shell-box.png', alt: 'Shell' },
    { src: '/assets/img/marcas/axion-energy.jpg', alt: 'Axion Energy' },
  ];

  return (
    <div className="overflow-hidden w-full py-6 bg-white">
      <div className="relative flex w-full whitespace-nowrap">
        <div className="flex items-center justify-center space-x-6 animate-marquee">
          {Array(4)
            .fill(brands)
            .flatMap((arr) => arr)
            .map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-6"
                aria-hidden={index >= brands.length}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={120}
                  priority={false}
                  className="object-contain rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
