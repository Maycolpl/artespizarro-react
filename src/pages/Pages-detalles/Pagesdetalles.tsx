import { Detalles } from "@/components/Inicio/DetallesProducto/Detalles";
import { FC } from "react";
import { useParams } from "react-router-dom";

const Pagesdetalles: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <Detalles id={id} />
    </>
  );
};

export default Pagesdetalles;
