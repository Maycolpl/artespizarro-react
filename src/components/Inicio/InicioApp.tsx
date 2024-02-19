import ButtonWhatsApp from "../ButtonWhatsApp/ButtonWhatsApp";
import { Entidades } from "./Portada/Entidades";
import Portada from "./Portada/PortadaApp";
import ProductosApp from "./Productos/ProductosApp";

const InicioApp = () => {
  return (
    <>
      <Portada />
      <Entidades />
      <ProductosApp />
      {/* Whatssap */}
      <ButtonWhatsApp />
    </>
  );
};

export default InicioApp;
