import { ReactNode, useEffect } from "react";

type PropsProductoComerciales = {
  children?: ReactNode;
};

const NuestrosProductosDetallesComercial = ({
  children,
}: PropsProductoComerciales) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[113rem] rounded-3xl m-auto portada-bg">
      {children}
    </div>
  );
};

export default NuestrosProductosDetallesComercial;
