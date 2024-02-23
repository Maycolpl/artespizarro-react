import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type PropsSwiperCards = {
  img1: string | undefined;
  img2: string | undefined;
  img3: string | undefined;
  title: string | undefined;
};

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperCard.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const SwiperCards: FC<PropsSwiperCards> = ({ title, img1, img2, img3 }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  mb-[2rem] max-md:min-h-[40vh] min-h-[70vh] m-auto flex justify-center"
      >
        <SwiperSlide>
          <img
            className="h-[39rem] rounded-[5rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto"
            src={img1}
            alt={title}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" h-[39rem] rounded-[5rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto"
            src={img2}
            alt={title}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className=" h-[39rem] rounded-[5rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto"
            src={img3}
            alt={title}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperCards;
