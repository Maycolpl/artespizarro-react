import { FC, PropsWithChildren } from "react";

import { Header } from "../Inicio/Header";
import Footer from "../Footer/FooterApp";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
