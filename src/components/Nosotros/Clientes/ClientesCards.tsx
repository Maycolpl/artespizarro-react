import { FC } from "react";

type PropsClienteCards = {
  img: string;
  alt: string;
};

const ClientesCards: FC<PropsClienteCards> = ({ img, alt }) => {
  return (
    <>
      <div className="flex-[0_1_9.6875rem] max-sm:flex-[0_1_6rem] max-sm:min-h-[6rem] max-xl:flex-[0_1_7rem] max-xl:min-h-[7rem] flex items-center justify-center rounded-full bg-white min-h-[9.6875rem]">
        <img
          src={img}
          alt={alt}
          className=" w-[6rem] p-2 h-[6rem] object-contain"
        />
      </div>
    </>
  );
};

export default ClientesCards;
