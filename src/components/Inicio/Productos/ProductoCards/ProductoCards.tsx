import React from "react";
import { Link } from "react-router-dom";
import { PropsProductos } from "./productos";

export type ProductoCardsProps = {
  data: PropsProductos;
};

const ProductoCards: React.FC<ProductoCardsProps> = ({ data }) => {
  const { description, img, title, id } = data;

  return (
    <div className="flex flex-[0_1_24rem] max-medium-desktop:flex-[0_1_18rem] gap-8 max-medium-desktop:gap-4 flex-wrap ">
      <div className="flex-[0_1_18rem] flex items-center justify-center w-full border rounded-3xl overflow-hidden bg-white">
        <Link
          to={`/detalles/${id}`}
          className="h-full w-full flex items-center justify-center"
        >
          <img
            src={img}
            alt={title}
            className="hover:scale-105 transition p-2 h-[12rem] w-[12rem]"
          />
        </Link>
      </div>
      <div className="flex px-2 justify-between flex-[0_1_20rem]">
        <div className="flex-[0_1_12rem]">
          <p className="text-text_primary gilroy-semi-bold text-[1rem] mb-2">
            {title}
          </p>
          <p className="text-[0.9rem] text-text_four">
            {description.slice(0, 17)}
          </p>
          <span className="text-[0.9rem] text-text_four">
            {description.slice(18, 29)}
          </span>
        </div>
        <div className="flex items-center">
          <Link
            className="text-xl bg-btn_third text-text_third flex items-center justify-center rounded-full h-[1.6rem] w-[1.6rem] "
            to={`/detalles/${id}`}
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductoCards;
