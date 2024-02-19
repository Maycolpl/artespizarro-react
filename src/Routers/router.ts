import { Pagedetallescomercio } from "@/pages/Page-detalles-comercio";
import { Pagesdetalles } from "@/pages/Pages-detalles";
import { Pageinicio } from "@/pages/page-inicio";
import { Pagenosotros } from "@/pages/page-nosotros";
import { Pageproducto } from "@/pages/page-producto";
import { Pageproyectos } from "@/pages/page-proyectos";
import { ComponentType } from "react";

export enum Paths {
  INICIO = "/",
  NOSOTROS = "/nosotros",
  PRODUCTOS = "/productos",
  PROYECTOS = "/proyectos",
  PRODUCTOSDETALLES = "/detalles/:id",
  PRODUCTOSDETALLESCOMERCIO = "/detalles/comercio/:id",
}

export interface IRoute {
  path: Paths;
  Componente: ComponentType;
}

export const routerPublics: IRoute[] = [
  {
    Componente: Pagedetallescomercio,
    path: Paths.PRODUCTOSDETALLESCOMERCIO,
  },
  {
    Componente: Pageinicio,
    path: Paths.INICIO,
  },
  {
    Componente: Pagenosotros,
    path: Paths.NOSOTROS,
  },
  {
    Componente: Pageproducto,
    path: Paths.PRODUCTOS,
  },
  {
    Componente: Pageproyectos,
    path: Paths.PROYECTOS,
  },
  {
    Componente: Pagesdetalles,
    path: Paths.PRODUCTOSDETALLES,
  },
];
