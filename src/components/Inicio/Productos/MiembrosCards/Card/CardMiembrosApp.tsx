import CardNosotros from "./CardMiembros";
import { miembros } from "./miembros";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// swiper style
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// style
import "@/components/Inicio/Productos/MiembrosCards/css/nosotros.css";
import { useState } from "react";

interface CustomSwiper {
  activeIndex: number;
}

const CardMiembrosApp = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (swiper: CustomSwiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        scale: 0.9,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      }}
      initialSlide={1}
      pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
    >
      {miembros.map((miembros, index) => (
        <SwiperSlide
          key={index}
          className="rounded-3xl mx-2 mb-[4rem] shadow-md p-[1rem] bg-white border"
        >
          <div
            className={` transition ${
              index !== currentSlide ? "opacity-10" : ""
            }`}
          >
            <CardNosotros
              key={index}
              author={miembros.author}
              cargo={miembros.cargo}
              description={miembros.description}
              img={miembros.img}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardMiembrosApp;
