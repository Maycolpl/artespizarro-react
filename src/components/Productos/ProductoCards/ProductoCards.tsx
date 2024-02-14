import React from "react";
import { PropsProductos } from "./productos";
import { Button } from "@/components/Common/Button";

export type ProductoCardsProps = {
  data: PropsProductos;
};

const ProductoCards: React.FC<ProductoCardsProps> = ({ data }) => {
  const { description, img, title } = data;
  return (
    <div className="flex flex-[0_1_20rem]  flex-col ">
      <div className="flex-[0_1_14rem] border rounded-3xl overflow-hidden bg-white">
        <img
          src={img}
          alt={title}
          className="hover:scale-125  transition  h-full w-full"
        />
      </div>
      <div className="flex p-3 justify-between flex-[0_1_5rem]">
        <div className="max-w-[9.75rem]">
          <p className="gilroy-regular font-extrabold ">manto de veronica</p>
          <p className="text-[0.9rem] text-text_four">piedra de huamanga</p>
          <span className="text-[0.9rem] text-text_four">(Alabastro)</span>
        </div>
        <div className="flex items-center">
          <Button
            className="text-xl bg-btn_third text-text_third flex items-center justify-center rounded-full h-[1.8rem] w-[1.8rem] "
            text="+"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductoCards;
