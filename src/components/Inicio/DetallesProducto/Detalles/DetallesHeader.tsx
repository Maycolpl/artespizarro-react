import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//
import { PropsProductos } from "../../Productos/ProductoCards/productos";

export type DetallesProps = {
  data?: PropsProductos | undefined;
};

const DetallesHeader: React.FC<DetallesProps> = ({ data }) => {
  const { img, imgDetalle1, title, imgDetalle2 } = data ?? {};
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-md:min-h-[40vh] min-h-[50vh] m-auto flex justify-center"
      >
        <SwiperSlide>
          <img className="h-[29rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto" src={img} alt={title} />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img className="h-[29rem] max-sm:h-[23rem] p-8 m-auto" src={imgDetalle1} alt={title} />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img className="h-[29rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto" src={img} alt={title} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[29rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto" src={imgDetalle2} alt={title} />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img className="h-[29rem] max-sm:h-[23rem] max-sm:object-cover p-8 m-auto" src={img} alt={title} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DetallesHeader;
