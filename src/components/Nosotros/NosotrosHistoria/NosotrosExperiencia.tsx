import img from "./imgs/image 5.svg";
import women from "./imgs/women.webp";

const NosotrosExperiencia = () => {
  return (
    <section className="w-full bg-btn_third rounded-tr-xl rounded-tl-xl max-md:min-h-[12rem] min-h-[15.625rem]">
      <div className="container flex justify-center min-h-[15.625rem] max-md:min-h-[12rem] relative items-center m-auto">
        <div className="flex max-medium-desktop:justify-center gap-8 flex-[0_1_75rem] max-md:px-[2rem] ">
          <div className="max-md:hidden">
            <img src={img} alt="arte" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-4 justify-between">
            <div className="max-w-[26rem]">
              <p className="text-2xl max-md:text-xl text-text_third gilroy-semi-bold">
                Benjamin Pizarro
              </p>
              <p className="text-[1.1rem] max-md:text-[1rem] text-text_transparent">
                Artista | Escultor | Artesano Ayacuchano
              </p>
            </div>
            <div className="max-w-[26.9375rem]">
              <p className="text-[1.55rem] max-md:text-[1.26rem] text-text_third gilroy-black">
                {" "}
                <span className="text-text_five">+40 años</span> de experiencia
                en el rubro de tallado y escultura
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-[4rem] max-xl:right-[0rem] max-lg:max-w-[23rem] max-medium-desktop:hidden max-w-[30rem]">
          <img src={women} alt="women" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default NosotrosExperiencia;
