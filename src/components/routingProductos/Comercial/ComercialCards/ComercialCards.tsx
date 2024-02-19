import Cards from "./Cards";
import { dataComercialFirstRow } from "./dataComercialFirstRow";
import { dataComercialThowRow } from "./dataComercialThowRow";
import { dataComercialThreewRow } from "./dataComercialThreeRow";

const ComercialCards: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-xl:px-5 gap-5 flex-col">
      <div className="flex max-lg:flex-wrap  max-xl:justify-center max-desktop-min:justify-center gap-5">
        {dataComercialFirstRow.map((producto, index) => (
          <Cards
            path={`/detalles/${producto.id}`}
            key={`${index}-card-product`}
            data={producto}
          />
        ))}
      </div>
      <div className="flex max-lg:flex-wrap max-xl:justify-center max-desktop-min:justify-center gap-5">
        {dataComercialThowRow.map((producto, index) => (
          <Cards
            path={`/detalles/comercio/${producto.id}`}
            key={`${index}-card-product`}
            data={producto}
          />
        ))}
      </div>
      <div className="flex max-lg:flex-wrap max-xl:justify-center max-desktop-min:justify-center gap-5">
        {dataComercialThreewRow.map((producto, index) => (
          <Cards
            path={`/detalles/comercio/${producto.id}`}
            key={`${index}-card-product`}
            data={producto}
          />
        ))}
      </div>
    </div>
  );
};

export default ComercialCards;
