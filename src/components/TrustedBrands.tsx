'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export default function TrustedBrands() {
  const brands = [
    { src: '/assets/img/marcas/colegio-los-robles-logo.png', alt: 'Colegio Los Robles' },
    { src: '/assets/img/marcas/colegio-sm.png', alt: 'Colegio Santa María' },
    { src: '/assets/img/marcas/swiss-medical-logo.png', alt: 'Swiss Medical' },
    { src: '/assets/img/marcas/medife.png', alt: 'Medife' },
    { src: '/assets/img/marcas/shell-box.png', alt: 'Shell' },
    { src: '/assets/img/marcas/axion-energy.jpg', alt: 'Axion Energy' },
  ];

  // Se duplican las imágenes para evitar espacios vacíos en PC
  const extendedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full py-6 bg-white">
      <Swiper
        loop={true} // Animación infinita
        autoplay={{
          delay: 0, // Desplazamiento continuo
          disableOnInteraction: false, // Sigue moviéndose después de interacción
        }}
        speed={1500} // Velocidad del desplazamiento
        spaceBetween={20} // Espaciado entre logos
        centeredSlides={false} // Evita acumulación a la izquierda
        breakpoints={{
          320: { slidesPerView: 3 }, // 3 logos en móviles pequeños
          480: { slidesPerView: 3 }, // 3 logos en móviles medianos
          768: { slidesPerView: 4 }, // 4 logos en tablets
          1024: { slidesPerView: 5 }, // 5 logos en pantallas grandes
          1280: { slidesPerView: 6 }, // 6 logos en pantallas extra grandes
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {extendedBrands.map((brand, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-[90px] sm:w-[110px] md:w-[130px] h-[90px] sm:h-[110px] md:h-[130px]">
              <Image
                src={brand.src}
                alt={brand.alt}
                fill
                sizes="(max-width: 640px) 90px, (max-width: 768px) 110px, 130px"
                className="object-contain rounded-lg ml-3"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
