import EntidadDescription from "./EntidadDescription";
import EntidadText from "./EntidadText";
import EntidadesCard from "./EntidadesCard";
import { entidadesImg } from "./entidadesImg";

const Entidades = () => {
  return (
    <>
      <article className="flex items-center mt-4 flex-col">
        <EntidadText />
        <div className="flex max-w-[63.5rem] justify-center items-center gap-10">
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
