import { Link, Outlet, useLocation } from "react-router-dom";
import { subMenusProductos } from "./links-sub-menu";

const NuestroProductosSubMenu = () => {
  const location = useLocation();

  // verifica si la ruta coincide
  const isActive = (pathname: string) => location.pathname === pathname;
  //terminar el prodcutos y la boleta y continuar con el esquema del proyecto ecommerce para web ycelular
  return (
    <>
      <aside className="max-w-[75rem] m-auto border-b pb-[2rem]">
        <div className="flex max-md:gap-2 max-md:px-4 t max-sm:flex-wrap justify-center w-full gap-4 text-center items-center">
          {subMenusProductos.map((links) => (
            <Link
              key={links.to}
              to={links.to}
              className={`flex-[0_1_10rem] tansition text-link_nav gilroy-semi-bold rounded-full h-[2.7rem] flex items-center justify-center ${
                isActive(links.to) ||
                (location.pathname === "/productos" &&
                  links.to === "/productos/comercial")
                  ? "bg-btn_third text-text_third"
                  : ""
              } `}
            >
              {links.title}
            </Link>
          ))}
        </div>
      </aside>
      <Outlet />
    </>
  );
};

export default NuestroProductosSubMenu;
