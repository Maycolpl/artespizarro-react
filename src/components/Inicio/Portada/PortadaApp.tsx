import PortadaImagen from "./Portada/PortadaImagen";
import PortadaPresentacion from "./Portada/PortadaPresentacion";

const Portada = () => {
  return (
    <section className="px-14 max-md:px-[2rem] max-sm:px-[1rem]">
      <article className="flex max-lg:flex-wrap items-center pt-12 justify-center portada-bg min-h-[70vh] w-full  gap-4 rounded-3xl">
        <section className="flex-[0_1_37.5rem] max-lg:items-start max-md:flex-[0_1_25.9375rem] max-lg:text-center max-md:text-start max-lg:min-h-[30vh] flex items-center min-h-[65vh]">
          <PortadaPresentacion />
        </section>
        <section className="flex-[0_1_44.5rem] max-sm:h-[15rem] max-sm:px-2 max-lg:flex-[0_1_35rem] max-medium-desktop:h-[28rem] max-md:h-[20rem] max-md:flex-[0_1_24rem]  max-lg:h-[26.5rem] max-lg:-order-1 ">
          <PortadaImagen />
        </section>
      </article>
    </section>
  );
};

export default Portada;
