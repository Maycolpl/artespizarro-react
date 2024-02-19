import { cardsImgs } from "./imgs";
import { imgsDetalles } from "../../DetallesProducto/imgsDetalles";
import { textDetalle } from "./productoCardDescription";

export type PropsProductos = {
  id: string;
  title: string;
  description: string;
  img: string;
  descriptioDetalle?: string;
  descriptioDetalle2?: string;
  taller?: string;
  material?: string;
  dimensiones?: string;
  imgDetalle1?: string;
  imgDetalle2?: string;
};

export const productos: PropsProductos[] = [
  {
    id: "1",
    description: "Piedra de huamanga(Alabastro)",
    img: cardsImgs.mv,
    title: "Manto de Verónica",
    descriptioDetalle: textDetalle.mantoDescription1,
    descriptioDetalle2: textDetalle.mantoDescription2,
    taller: "Artes Pizarro",
    dimensiones: "15cm x 14cm x 4cm",
    material: "P. de Huamanaga (Alabastro)",
    imgDetalle1: imgsDetalles.mv2,
    imgDetalle2: imgsDetalles.mv2,
  },
  {
    id: "2",
    description: "Piedra de huamanga(Alabastro)",
    imgDetalle1: imgsDetalles.sf2,
    imgDetalle2: imgsDetalles.sf4,
    descriptioDetalle: textDetalle.sagradaDescription1,
    descriptioDetalle2: textDetalle.sagradaDescription2,
    img: cardsImgs.sf1,
    title: "Sagrada Familia",
    dimensiones: "13cm x 11cm x 4.5cm aprox.",
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
  },
  {
    id: "3",
    description: "Piedra de huamanga(Alabastro)",
    img: cardsImgs.chullo,
    imgDetalle1: imgsDetalles.chullo2,
    imgDetalle2: imgsDetalles.chullo3,
    title: "Chullo con Border Dorado",
    descriptioDetalle: textDetalle.chulloDescription1,
    descriptioDetalle2: textDetalle.chulloDescription2,
    dimensiones: "14cm x 14.5cm x 11cm",
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
  },
  {
    id: "4",
    description: "Piedra de huamanga(Alabastro)",
    img: cardsImgs.capillaGrande,
    imgDetalle1: imgsDetalles.cap1,
    imgDetalle2: imgsDetalles.cap3,
    title: "Pesebre con Nacimiento",
    dimensiones: `21cm x 20cm x 13cm`,
    descriptioDetalle: textDetalle.pesebreDescription1,
    descriptioDetalle2: textDetalle.pesebreDescription2,
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
  },
  {
    id: "5",
    descriptioDetalle: textDetalle.pesebreNacimientoDescription1,
    descriptioDetalle2: textDetalle.pesebreNacimientoDescription2,
    dimensiones: "7.7cm x 10.5cm x 3.5",
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
    img: cardsImgs.nacHoja,
    imgDetalle1: imgsDetalles.nacHoja3,
    imgDetalle2: imgsDetalles.nacHoja4,
    description: "Piedra de huamanga(Alabastro)",
    title: "Nacimiento en hoja",
  },
];
