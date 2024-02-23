import { routerPublics } from "@/Routers/routerApp";
import { routerPublicsProductos } from "@/Routers/routerProductos";
import { Pageproducto } from "@/pages/page-producto";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRouter: FC = () => {
  return (
    <>
      <Routes>
        {routerPublics.map(({ Componente, path }) => (
          <Route key={path} path={path} element={<Componente />} />
        ))}
        <Route path="/productos" element={<Pageproducto />}>
          {/* Redirrecionamos a productos/comercial */}
          <Route path="/productos" element={<Navigate to="comercial" replace />} />
          {routerPublicsProductos.map(({ Componente, path }) => (
            <Route key={path} path={path} element={<Componente />} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
