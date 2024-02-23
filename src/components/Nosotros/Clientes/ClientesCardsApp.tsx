import ClientesCards from "./ClientesCards";
import { logosArrayFirstRow, logosArraySecondRow } from "./filasImgs";

const ClientesCardsApp = () => {
  return (
    <>
      <div className="flex mb-[2rem] mt-[4.5rem] max-lg:justify-center max-md:px-[1rem] max-sm:flex-wrap  max-lg:gap-6 justify-evenly ontainer max-w-[70rem] m-auto ">
        {logosArrayFirstRow.map((logo, index) => (
          <ClientesCards key={index} img={logo} alt="arte" />
        ))}
      </div>
      <div className="flex mt-[2.5rem] px-[1rem] max-lg:justify-center max-lg:gap-6 max-md:flex-wrap   justify-between ontainer max-w-[80rem] m-auto ">
        {logosArraySecondRow.map((logo, index) => (
          <ClientesCards key={index} img={logo} alt="arte" />
        ))}
      </div>
    </>
  );
};

export default ClientesCardsApp;
