import { useEffect } from "react";
import { getProductoById } from "../hooks/getProducto";
import DetallesDescription from "./DetallesDescription";
import DetallesHeader from "./DetallesHeader";
import DetallesMetricaYContacto from "./DetallesMetricaYContacto";
import ButtonWhatsApp from "@/components/ButtonWhatsApp/ButtonWhatsApp";
import { productos } from "../../Productos/ProductoCards/productos";

type PropsDetalles = {
  id: string | undefined;
};

const Detalles: React.FC<PropsDetalles> = ({ id }) => {
  const findProducto = getProductoById(id, productos);

  useEffect(() => {
    // Hacer que el scroll aparezca arriba cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[113rem]  px-[2rem] rounded-3xl m-auto portada-bg 5">
      <DetallesHeader data={findProducto} />
      <DetallesDescription data={findProducto} />
      <DetallesMetricaYContacto data={findProducto} />
      <ButtonWhatsApp />
    </div>
  );
};

export default Detalles;
