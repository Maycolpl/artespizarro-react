
const FormModal = () => {
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
            <select className="w-full h-[2.5rem] p-2 text-sm  border">
              <option value={""}>Escoge el País</option>
              <option value="US">Perú</option>
            </select>
            <input
              type="text"
              className="border h-[2.5rem] p-2"
              placeholder="Celular"
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
