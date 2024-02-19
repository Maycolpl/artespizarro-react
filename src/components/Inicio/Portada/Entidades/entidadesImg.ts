import DIR from "@/components/Inicio/Portada/Entidades/img/logo_DIR.webp";
import GRA from "@/components/Inicio/Portada/Entidades/img/logo_GRA.webp";
import MH from "@/components/Inicio/Portada/Entidades/img/logo_MH.webp";
import PRO from "@/components/Inicio/Portada/Entidades/img/logo_PRO.webp";
import PROM from "@/components/Inicio/Portada/Entidades/img/logo_PROM.webp";

export type Entidades = {
  link: string;
  id: string;
  img: string;
};

export const entidadesImg: Entidades[] = [
  {
    link: "https://www.facebook.com/gobiernoregionalayacucho/",
    id: "1",
    img: GRA,
  },
  {
    link: "https://institucional.promperu.gob.pe/ppInst.aspx",
    id: "2",
    img: PROM,
  },
  {
    link: "https://munihuamanga.gob.pe/",
    id: "3",
    img: MH,
  },
  {
    link: "https://dirceturayacucho.pe/",
    id: "4",
    img: DIR,
  },
  {
    link: "https://www.facebook.com/minproduccion/",
    id: "5",
    img: PRO,
  },
];
