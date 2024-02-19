import { PropsProductos } from "@/components/Inicio/Productos/ProductoCards/productos";

import { imgThowRow } from "./img";
import { imgsDetalles } from "./imgsDetalles";
import { textDetallesComercials } from "./textDetallesComercial";
export const dataComercialThowRow: PropsProductos[] = [
  {
    id: "6",
    description: "Piedra de huamanga(Alabastro)",
    img: imgThowRow.img7,
    title: "Retablo Ayacuchano",
    descriptioDetalle: textDetallesComercials.descriptionDetalle1,
    descriptioDetalle2: textDetallesComercials.descriptionDetalle2,
    taller: "Artes Pizarro",
    dimensiones: "28cm x 16.5cm x 7cm",
    material: "P. de Huamanaga (Alabastro)",
    imgDetalle1: imgsDetalles.retablo2,
    imgDetalle2: imgsDetalles.retablo3,
  },
  {
    id: "7",
    description: "Piedra de Huamanaga(Alabastro)",
    imgDetalle1: imgsDetalles.pnp1,
    imgDetalle2: imgsDetalles.pnp2,
    descriptioDetalle: textDetallesComercials.descriptionEscudoPnp,
    img: imgThowRow.img6,
    title: "Escudo de la PNP",
    dimensiones: "13cm x 11cm x 4.5cm aprox.",
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
  },
  {
    id: "8",
    description: "Piedra de huamanga(Alabastro)",
    img: imgThowRow.img2,
    imgDetalle1: imgThowRow.img2,
    imgDetalle2: imgThowRow.img2,
    title: "Quemador Eclipse",
 
    dimensiones: "14cm x 14.5cm x 11cm",
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
  },
  {
    id: "9",
    description: "Piedra de huamanga(Alabastro)",
    img: imgThowRow.img3,
    imgDetalle1: imgThowRow.img3,
    imgDetalle2: imgThowRow.img3,
    title: "Quemador Eclipse",
    dimensiones: `21cm x 20cm x 13cm`,
  
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
  },
  {
    id: "10",

    dimensiones: "7.7cm x 10.5cm x 3.5",
    material: "P. de Huamanaga (Alabastro)",
    taller: "Artes Pizarro",
    img: imgThowRow.img4,
    imgDetalle1: imgThowRow.img4,
    imgDetalle2: imgThowRow.img4,
    description: "Piedra de huamanga(Alabastro)",
    title: "Quemador Eclipse",
  },
];
