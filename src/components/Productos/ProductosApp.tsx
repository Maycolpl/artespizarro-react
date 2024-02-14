import { ProductoCards } from "./ProductoCards";
import { productos } from "./ProductoCards/productos";
import { ProductoTextDestacado } from "./ProductoTextDestacado";

const ProductosApp = () => {
  return (
    <>
      <ProductoTextDestacado />
      <div className="w-full flex justify-center mt-[4rem] bg-background_productos">
        <div className="max-w-[80rem] py-[4rem]  justify-between items-start gap-10 flex ">
          {productos.map((producto) => (
            <ProductoCards key={producto.id} data={producto} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductosApp;
