import { DetallesProps } from "./DetallesHeader";

const DetallesDescription = ({ data }: DetallesProps) => {
  if (data) {
    const { title, descriptioDetalle, descriptioDetalle2 } = data;
    return (
      <div className="text-text_primary max-w-[75rem] mt-[4rem]  m-auto flex gap-10 flex-col">
        <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl gilroy-black">{title}</h1>
        <p>{descriptioDetalle}</p>
        <p>{descriptioDetalle2}</p>
      </div>
    );
  }
};

export default DetallesDescription;
