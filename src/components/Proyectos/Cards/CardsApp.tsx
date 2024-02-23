import { Cards } from ".";
import {
  cardDataGra,
  cardDataOcros,
  cardDataPnp,
  cardDataAgotur,
  cardDataRetablo,
} from "./DetallesCards/detalles";
import { imgs } from "./imgs";

const CardsApp = () => {
  return (
    <section className="px-[1rem] pb-[3rem] container flex-col flex mt-4 gap-2 justify-center mx-auto">
      <div className=" flex max-sm:flex-wrap justify-center gap-4 mb-4">
        <Cards
          path="/proyectos/1"
          subTitle={cardDataPnp.title}
          title={cardDataPnp.subTitle}
          img={imgs.pnp1}
          name="pnp"
          className="relative  flex-[0_1_43.34375rem] border min-h-[38.4375rem]"
        />
        <Cards
          path="/proyectos/2"
          subTitle={cardDataGra.subTitle}
          title={cardDataGra.title}
          img={imgs.gri1}
          name="gri"
          className="relative flex-[0_1_30.5rem] border min-h-[38.4375rem]"
        />
      </div>
      <div className="flex max-sm:flex-wrap justify-center gap-4 mb-4">
        <Cards
          path="/proyectos/3"
          subTitle={cardDataOcros.subTitle}
          title={cardDataOcros.title}
          img={imgs.ocros2}
          name="ocros"
          className="relative flex-[0_1_24.125rem] border min-h-[18.75rem]"
        />
        <Cards
          img={imgs.agotura1}
          path="/proyectos/4"
          subTitle={cardDataAgotur.subTitle}
          title={cardDataAgotur.title}
          name="agotura"
          className="relative flex-[0_1_49.75rem] border min-h-[18.75rem]"
        />
      </div>
      <div className="flex justify-center mb-4">
        <Cards
          path="/proyectos/5"
          subTitle={cardDataRetablo.subTitle}
          title={cardDataRetablo.title}
          img={imgs.retable1}
          name="retable"
          className="relative flex-[0_1_75rem]  border min-h-[38.4375rem]"
        />
      </div>
    </section>
  );
};

export default CardsApp;
