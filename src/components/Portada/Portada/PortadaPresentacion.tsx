import PortadaButtonts from "./PortadaButtonts";

const PortadaPresentacion = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-6xl mb-4  gilroy-black text-text_primary px-4">
        <h1 className="max-w-[41.9375rem]">
          La artesanía es la
          <span className="text-text_secondary"> esencia</span> de nuestra
          identidad
        </h1>
      </div>
      <div className="my-3 px-4 max-w-[25.9375rem] text-[1.1rem]">
        <p>
          Somos una{" "}
          <span className="text-text_primary gilroy-semi-bold">
            empresa Ayacuchana
          </span>{" "}
          dedicada al tallado y escultura con más de{" "}
          <span className="text-text_primary gilroy-semi-bold">
            40 años de experiencia.
          </span>
        </p>
      </div>
      <PortadaButtonts />
    </div>
  );
};

export default PortadaPresentacion;
