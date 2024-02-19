import { imgs } from "./imgs";

export type PropsMiembros = {
  img: string;
  author: string;
  cargo: string;
  description: string;
};

export const miembros: PropsMiembros[] = [
  {
    author: "Benjamín Pizarro Lozano",
    cargo: "Representante legal de Artes Pizarro",
    description:
      "Como representante de Artes Pizarro, nuestra empresa se ha especializado en la creación de objetos originales y elaborados a mano, producto de la habilidad y el esfuerzo en cada una de nuestras piezas. Como líder, me enorgullece      dirigir un equipo altamente calificado y apasionado por la artesanía, dando vida a cada una de nuestras piezas artesanales",
    img: imgs.BPL,
  },
  {
    author: "Bertina Loayza Lozano",
    cargo: "Responsable del Policromado",
    description:
      "Como responsable de policromado y ventas en Artes Pizarro, mi trabajo consiste en supervisar y gestionar el proceso de policromado, garantizar la excelencia de cada artículo y dirigir la estrategia de ventas para promover el  crecimiento y fortalecer la posición de la compañía en el mercado, cumpliendo con los objetivos establecidos",
    img: imgs.BLL,
  },
  {
    author: "Benjamín Pizarro Lozano",
    cargo: "Representante legal de Artes Pizarro",
    description:
      "Como el encargado del diseño y aplicación de tecnología en Artes Pizarro. Mi rol en la empresa es asegurar que los       procesos de producción estén actualizados y optimizados mediante el uso de tecnologías. Aplico herramientas y       sistemas para mejorar la eficiencia y calidad de nuestros productos artesanales.",
    img: imgs.MPL,
  },
  {
    author: "Roxana Pizarro Loayza",
    cargo: "Responsable del Policromado y Ventas",
    description:
      "Permíteme presentarme, como soporte en Policromado en Artes Pizarro.       Mi función es supervisar y dirigir el proceso de Policromado, asegurando la calidad en cada pieza y       cumpliendo las expectativas del cliente. Con mi experiencia y conocimiento en la técnica, trabajaré para producir piezas artesanales únicas y de alta calidad.",
    img: imgs.RPL,
  },
];
