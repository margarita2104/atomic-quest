import HeroImg1 from "../../assets/images/hero-img-1.png";
import HeroImg2 from "../../assets/images/hero-img-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <section className="w-full overflow-hidden mb-14">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0} 
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover" 
            src={HeroImg1}
            alt="Декоративная иллюстрация"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-auto object-cover"  // Responsive image styling
            src={HeroImg2}
            alt="Декоративная иллюстрация"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
