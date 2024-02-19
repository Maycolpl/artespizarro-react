import logo from "@/components/Footer/img/f-logo (convert.io).webp";
import FooteLinks from "./FooteLinks";
import FooterEnlaces from "./FooterEnlaces";
import FooterContacto from "./FooterContacto";
import FooterRedes from "./FooterRedes";

const Footer = () => {
  return (
    <footer className="flex mt-[5rem] text-text_third py-5 px-4 items-center gap-4 flex-col justify-center min-h-[44.8vh] bg-btn_third">
      <div className="w-full flex max-medium-desktop:flex-wrap justify-center items-center min-h-[8.9975rem]">
        <div className="flex max-medium-desktop:my-[3rem] items-center justify-center flex-[0_1_25.625rem]">
          <a href="/inicio">
            <img src={logo} className="h-full w-full" alt="artes-pizarro" />
          </a>
        </div>
        <div className="flex max-desktop-min:flex-wrap max-medium-desktop:gap-8 justify-between flex-[0_1_51.25rem]">
          <FooteLinks />
          <FooterEnlaces />
          <FooterContacto />
          <FooterRedes />
        </div>
      </div>
      <div className="w-full gap-8 flex max-medium-desktop:flex-wrap max-medium-desktop:mt-[2rem]  justify-center items-end min-h-[7.5rem]">
        <div className="flex-[0_1_25.625rem]">
          <p className="text-white/50 text-[0.8rem] text-center">
            Ubícanos en: Asc. Los Artesanos Mz. A Lt. 01, Ayacucho - Perú
          </p>
        </div>

        <div className="flex-[0_1_51.25rem] text-end max-medium-desktop:text-center">
          <p className="text-white/50 text-[0.8rem]">
            Copyright © Artes Pizarro 2023 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
