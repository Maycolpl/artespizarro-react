import { PropsMiembros } from "./miembros";
const CardMiembros = ({ author, cargo, description, img }: PropsMiembros) => {
  return (
    <>
      <div className="flex gap-2 text-start justify-evenly">
        <div>
          <img className="w-[3rem] rounded-full h-[3rem]" src={img} alt="" />
        </div>
        <div className="flex justify-between flex-col ">
          <p className="text-[1rem] font-extrabold ">{author}</p>
          <p className="text-[1rem]">{cargo}</p>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-[0.8rem] text-text_primary">{description}</p>
      </div>
    </>
  );
};

export default CardMiembros;
