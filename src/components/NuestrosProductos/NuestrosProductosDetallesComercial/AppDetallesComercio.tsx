import { useParams } from "react-router-dom";
import NuestrosProductosDetallesComercial from "./NuestrosProductosDetallesComercial";
import { getProductoById } from "@/components/Inicio/DetallesProducto/hooks/getProducto";
import { dataComercialThowRow } from "@/components/routingProductos/Comercial/ComercialCards/dataComercialThowRow";
import { dataComercialThreewRow } from "@/components/routingProductos/Comercial/ComercialCards/dataComercialThreeRow";
import DetallesHeader from "@/components/Inicio/DetallesProducto/Detalles/DetallesHeader";
import DetallesDescription from "@/components/Inicio/DetallesProducto/Detalles/DetallesDescription";
import DetallesMetricaYContacto from "@/components/Inicio/DetallesProducto/Detalles/DetallesMetricaYContacto";
import ButtonWhatsApp from "@/components/ButtonWhatsApp/ButtonWhatsApp";

const AppDetallesComercio = () => {
  const { id } = useParams<{ id: string }>();
  const findRowThree = getProductoById(id, dataComercialThreewRow);
  const findRowThow = getProductoById(id, dataComercialThowRow);

  return (
    <>
      {findRowThow ? (
        <NuestrosProductosDetallesComercial>
          <DetallesHeader data={findRowThow} />
          <DetallesDescription data={findRowThow} />
          <DetallesMetricaYContacto data={findRowThow} />
          <ButtonWhatsApp />
        </NuestrosProductosDetallesComercial>
      ) : (
        <NuestrosProductosDetallesComercial>
          <DetallesHeader data={findRowThree} />
          <DetallesDescription data={findRowThree} />
          <DetallesMetricaYContacto data={findRowThree} />
          <ButtonWhatsApp />
        </NuestrosProductosDetallesComercial>
      )}
    </>
  );
};

export default AppDetallesComercio;
