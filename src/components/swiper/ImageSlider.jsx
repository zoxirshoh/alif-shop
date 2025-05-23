import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ImageSlider.css"

// Rasm URL'lari (namunaviy linklar)
const images = [
  "https://s3.fortifai.uz/shop/catalog/carousel/294/1744973342-Novinka_infinix_uz_1600╤Е491.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/295/1746018044-Kondicioner 1600x491 UZ.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/215/1716885789-main_1600x491_uz.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/250/1730379481-bosch_web_1600x491_UZ.jpg",
  "https://s3.fortifai.uz/shop/catalog/carousel/292/1744378496-noutbuki-web-banner_1600х491_uz.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/291/1744378311-Сайт главная 1600х491.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/300/1747292360-w20_instrumenti_uz_1600%D1%85491.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/268/1737111160-sokany_uz_1600х491.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/216/1744870646-byd_1600╤Е491_uz.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/296/1747739669-Leto%201600x491%20UZ.png",
];

const ImageSlider = () => {
  return (
    <div className="swiper">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="swiper-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
