import { Paths } from "@/Routers/routerApp";

export type Links = {
  path: string;
  text: string;
};

export const links: Links[] = [
  {
    path: Paths.INICIO,
    text: "Inicio",
  },
  {
    path: Paths.NOSOTROS,
    text: "Nosotros",
  },
  {
    path: Paths.PRODUCTOS,
    text: "Productos",
  },
  {
    path: Paths.PROYECTOS,
    text: "Proyectos",
  },
];
