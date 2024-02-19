import bg from "./img/portada.webp";

const PortadaImagen = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={bg} alt="arte" className="h-full rounded-full w-full" />
    </div>
  );
};

export default PortadaImagen;
