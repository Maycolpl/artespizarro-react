const NosotrosHeader = () => {
  return (
    <>
      <article className="container flex justify-center max-lg:px-[2rem] m-auto pt-[4rem] max-medium-desktop:pt-[3rem] mb-[5rem]">
        <div className="max-sm:text-start flex flex-[0_1_75rem] max-medium-desktop:flex-wrap max-medium-desktop:justify-center max-medium-desktop:text-center justify-between">
          <div className="flex flex-col gap-4 flex-[0_1_39.375rem]">
            <h1 className="text-text_primary max-sm:text-[1.7rem] max-xl:text-4xl max-medium-desktop:text-5xl text-6xl gilroy-black">
              Nosotros nos caracterizamos por...
            </h1>
            <span className="text-text_secondary max-medium-desktop:mb-4 gilroy-semi-bold">
              Valores de Marca
            </span>
          </div>
          <div className="flex flex-[0_1_31.25rem] items-center gilroy-medium text-[1.06rem] text-right">
            <p className="text-text_primary">
              Como empresa con más de 40 años de experiencia en la producción de
              productos artesanales para nuestros clientes, nos esforzamos por
              dejar que los{" "}
              <span className="gilroy-black">valores de nuestra marca</span>{" "}
              prevalezcan para ofrecer productos aún mejores al usuario final.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default NosotrosHeader;
