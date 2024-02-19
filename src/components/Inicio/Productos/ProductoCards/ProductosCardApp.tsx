import { ProductoCards } from ".";
import { productos } from "./productos";

const ProductosCardApp = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-[2rem] bg-background_productos">
        <div className="flex-[0_1_78rem] py-[4rem] max-medium-desktop:flex-wrap px-[2rem] max-medium-desktop:justify-center  justify-between items-start gap-4 flex ">
          {productos.map((producto, index) => (
            <ProductoCards key={`${index}-card-product`} data={producto} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductosCardApp;
