import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const FormModal = () => {
  const [select, setSelect] = useState<string>("");
  return (
    <>
      <form className="text-text_primary">
        <div className="flex flex-col items-center mb-4 gap-4">
          <input
            type="text"
            placeholder="Nombre y Apellidos"
            className="border h-[2.5rem] p-2 w-full"
          />
          <div className="flex w-full">
            <ReactFlagsSelect
            className="w-full"
              selected={select}
              onSelect={(code) => setSelect(code)}
              placeholder="Selecciona tu País"
              searchable
              searchPlaceholder="Busca tu país"
            />
            <input
              type="text"
              className="border h-[2.7rem] p-2"
              placeholder="+ Celular"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <input
            type="text"
            className="border w-full h-[2.5rem] p-2"
            placeholder="Correo Eletrónico"
          />

          <textarea
            className="w-full p-2 border min-h-[8rem]"
            placeholder="Que información necesitas"
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default FormModal;
