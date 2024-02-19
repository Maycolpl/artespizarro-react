import EntidadDescription from "./EntidadDescription";
import EntidadText from "./EntidadText";
import EntidadesCard from "./EntidadesCard";
import { entidadesImg } from "./entidadesImg";

const Entidades = () => {
  return (
    <>
      <article className="flex px-[2rem] items-center mt-4 flex-col">
        <EntidadText />
        <div className="flex max-medium-desktop:flex-wrap max-md:flex-col  max-w-[63.5rem] justify-center items-center gap-10">
          {entidadesImg.map((entidades) => (
            <EntidadesCard key={entidades.id} data={entidades} />
          ))}
        </div>
      </article>
      <EntidadDescription />
    </>
  );
};

export default Entidades;
