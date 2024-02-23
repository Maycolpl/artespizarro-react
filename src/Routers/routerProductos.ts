import {
  Comercial,
  Esculturas,
  Souvenirs,
  Tallados,
} from "@/components/routingProductos";
import { ComponentType } from "react";

export enum Paths {
  PRODUCTOSCOMERCIAL = "/productos/comercial",
  PRODUCTOSSOUVENIRS = "/productos/souvenirs",
  PRODUCTOSESCULTURAS = "/productos/esculturas",
  PRODUCTOSTALLADOS = "/productos/tallados",
}

export interface IRouteProducto {
  path: Paths;
  Componente: ComponentType;
}

export const routerPublicsProductos: IRouteProducto[] = [
  {
    Componente: Comercial,
    path: Paths.PRODUCTOSCOMERCIAL,
  },
  {
    Componente: Tallados,
    path: Paths.PRODUCTOSTALLADOS,
  },
  {
    Componente: Souvenirs,
    path: Paths.PRODUCTOSSOUVENIRS,
  },

  {
    Componente: Esculturas,
    path: Paths.PRODUCTOSESCULTURAS,
  },
];
