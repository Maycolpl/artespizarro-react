import ProyectoDetallesCards from "@/components/Proyectos/Cards/DetallesCards/ProyectoDetallesCards";
import {
  detallesCardARetablo,
  detallesCardGra,
  detallesCardAgotur,
  detallesCardOcros,
  detallesCardPnp,
  PropsDetallesCards,
} from "@/components/Proyectos/Cards/DetallesCards/detalles";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pagedetallesproyectos: FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [projectDetails, setProjectDetails] =
    useState<PropsDetallesCards | null>(null);

  const obtenerDetallesPorId = (id: string | undefined) => {
    const detallesProyectos = {
      detallesCardARetablo,
      detallesCardGra,
      detallesCardAgotur,
      detallesCardOcros,
      detallesCardPnp,
    };

    const detallesEncontrados = Object.values(detallesProyectos).find(
      (detalles) => detalles.id === id
    );

    setProjectDetails(detallesEncontrados || null);
  };

  useEffect(() => {
    obtenerDetallesPorId(id);
  }, [id]);

  return (
    <>
      <ProyectoDetallesCards data={projectDetails} />
    </>
  );
};

export default Pagedetallesproyectos;
