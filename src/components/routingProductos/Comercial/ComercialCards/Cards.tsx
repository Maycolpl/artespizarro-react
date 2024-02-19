import { PropsProductos } from "@/components/Inicio/Productos/ProductoCards/productos";
import { Link } from "react-router-dom";

type ProductoCardsProps = {
  data: PropsProductos;
  path: string;
};

const Cards = ({ data, path }: ProductoCardsProps) => {
  const { title, description, img } = data;
  return (
    <>
      <div className="flex flex-[0_1_14.0625rem] max-xl:flex-[0_1_13rem] min-h-[18.125rem] flex-wrap">
        <div className="flex-[0_1_18rem]  flex flex-wrap items-center justify-center w-full  bg-white">
          <Link
            to={`${path}`}
            className="h-full hover:shadow-none transition shadow-lg rounded-xl flex flex-wrap w-full gap-3 p-4 items-center justify-center"
          >
            <div className="flex w-full justify-center">
              <img
                src={img}
                alt={title}
                className="p-2 object-contain h-[10rem] w-[10rem]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-text_primary gilroy-semi-bold">{title}</p>
              <p className="text-[0.9rem] text-text_four">{description}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
