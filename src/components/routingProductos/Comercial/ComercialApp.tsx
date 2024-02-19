import { FC } from "react";
import { ComercialCards } from "./ComercialCards";

const Comercial: FC = () => {
  return (
    <article className="flex flex-[0_1_75rem] py-[8rem]  justify-center items-center ">
      <div className="flex-[0_1_75rem]">
        <ComercialCards />
      </div>
    </article>
  );
};

export default Comercial;
