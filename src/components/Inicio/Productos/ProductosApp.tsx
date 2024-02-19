import ButtonMore from "./ButtonMore/ButtonMore";
import CardMiembrosApp from "./MiembrosCards/Card/CardMiembrosApp";
import ProductosCardApp from "./ProductoCards/ProductosCardApp";
import { ProductoTextDestacado } from "./ProductoTextDestacado";
import TitleMiembros from "./TitleMiembros/TitleMiembros";

const ProductosApp = () => {
  return (
    <>
      <ProductoTextDestacado />
      <article className="bg-background_productos relative overflow-x-hidden">
        <ProductosCardApp />
        <ButtonMore />
        <TitleMiembros />
        <div className="w-full absolute max-medium-desktop:bottom-[0rem] bottom-[2rem]">
          <div className="max-w-[70rem]  m-auto ">
            <CardMiembrosApp />
          </div>
        </div>
        {/* bg-blanco del miembro equipos */}
        <div className="m-auto max-medium-desktop:min-h-[14rem] bg-white min-h-[16rem]"></div>
      </article>
    </>
  );
};

export default ProductosApp;
