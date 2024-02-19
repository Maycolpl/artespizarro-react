import React from "react";
import { Entidades } from "./entidadesImg";

type PropsEntidadesCard = {
  data: Entidades;
};

const EntidadesCard: React.FC<PropsEntidadesCard> = ({ data }) => {
  const { id, img, link } = data;
  return (
    <div className="flex-[0_1_11rem] max-md:flex-[0_1_2rem] " key={id}>
      <a href={link} target="_blank">
        <img
          src={img}
          alt="arte"
          className="grayscale opacity-[.5] h-[3rem]  w-full object-cover"
        />
      </a>
    </div>
  );
};

export default EntidadesCard;
