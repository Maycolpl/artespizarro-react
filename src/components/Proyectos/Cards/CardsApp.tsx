import { Cards } from ".";
import { imgs } from "./imgs";

const CardsApp = () => {
  // MAÑANA EMPEZAR CON TODA LA ESTRUCTURA DEL PROYECTO DE E-COMMERCE Y TODO LA BASE DE DATOS LOS DOCUMENTOS TODO EL AUTH EL ADMIN ROLES TODO
  return (
    <section className="px-[1rem] container flex-col flex mt-4 gap-2 justify-center mx-auto">
      <div className=" flex max-sm:flex-wrap justify-center gap-4 mb-4">
        <Cards
          img={imgs.pnp1}
          name="pnp"
          className="relative  flex-[0_1_43.34375rem] border min-h-[38.4375rem]"
        />
        <Cards
          img={imgs.gri1}
          name="gri"
          className="relative   flex-[0_1_30.5rem] border min-h-[38.4375rem]"
        />
      </div>
      <div className="flex max-sm:flex-wrap justify-center gap-4 mb-4">
        <Cards
          img={imgs.ocros2}
          name="ocros"
          className="relative flex-[0_1_24.125rem] border min-h-[18.75rem]"
        />
        <Cards
          img={imgs.agotura1}
          name="agotura"
          className="relative flex-[0_1_49.75rem] border min-h-[18.75rem]"
        />
      </div>
      <div className="flex justify-center mb-4">
        <Cards
          img={imgs.retable1}
          name="retable"
          className="relative flex-[0_1_75rem]  border min-h-[38.4375rem]"
        />
      </div>
    </section>
  );
};

export default CardsApp;
