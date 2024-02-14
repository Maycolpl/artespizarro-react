import PortadaImagen from "./Portada/PortadaImagen";
import PortadaPresentacion from "./Portada/PortadaPresentacion";

const Portada = () => {
  return (
    <section className="px-14">
      <article className="flex items-center pt-12 justify-center portada-bg min-h-[70vh] w-full  gap-4 rounded-3xl">
        <section className="flex-[0_1_37.5rem] flex items-center min-h-[65vh]">
          <PortadaPresentacion />
        </section>
        <section className="flex-[0_1_38.5rem]">
          <PortadaImagen />
        </section>
      </article>
    </section>
  );
};

export default Portada;
