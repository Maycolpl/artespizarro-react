import { FC, useEffect } from "react";
import { PropsDetallesCards } from "./detalles";
import SwiperCards from "./SwiperCard/ProyectoSwiperCards";

export type PropsDetalles = {
  data: PropsDetallesCards | null;
};

const ProyectoDetallesCards: FC<PropsDetalles> = ({ data }) => {
  const { img1, img2, img3, texto, title, texto2, texto3, texto4, texto5 } =
    data ?? {};

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="min-h-screen container mx-auto">
      <SwiperCards img1={img1} img2={img2} img3={img3} title={title} />
      <div className="container flex justify-center m-auto">
        <div className="flex-[0_1_75rem] max-md:px-[2rem]">
          <h1 className="text-[2.5rem] max-md:text-[2rem] max-sm:text-2xl gilroy-black mb-6">{title}</h1>
          <p className="mb-5 text-[1rem] text-text_primary">{texto}</p>
          <p className="mb-5 text-[1rem] text-text_primary">{texto2}</p>
          <p className="mb-5 text-[1rem] text-text_primary">{texto3}</p>
          <p className="mb-5 text-[1rem] text-text_primary">{texto4}</p>
          <p className="mb-5 text-[1rem] text-text_primary">{texto5}</p>
        </div>
      </div>
    </div>
  );
};

export default ProyectoDetallesCards;
