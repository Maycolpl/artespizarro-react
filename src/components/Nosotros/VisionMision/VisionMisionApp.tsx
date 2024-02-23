import CardVisionMision from "./CardVisionMision";
import VisionMisionScroll from "./VisionMisionScroll";
import mision from "./img/mision.webp";
import vision from "./img/vision.webp";
const VisionMisionApp = () => {
  return (
    <article className="w-full m-auto max-md:pb-[3rem]  pb-[6.5rem] bg-white flex  justify-center">
      <div className="container relative flex-wrap flex-[0_1_77rem]  bg-white flex justify-center">
        <VisionMisionScroll />
        <CardVisionMision
          alt="mision"
          nosotros="Somos una empresa dedicada a la escultura y tallado"
          text="Artes Pizarro se dedicada a la producción de artesanías hechas a mano. Nuestra misión es ofrecer productos únicos y de calidad que reflejen la cultura y la tradición de nuestra región. Estamos comprometidos a promover el arte y la artesanía local."
          title="¿CUÁL ES NUESTRA MISIÓN?"
          url={mision}
        />
        <CardVisionMision
          alt="vision"
          nosotros="Nuestra dirección como empresa"
          text="Es ser líder en la producción de artesanías de alta calidad reconocida por su excelencia y fortalecer nuestra identidad mediante nuestros trabajos."
          title="¿CUÁL ES NUESTRA VISIÓN?"
          url={vision}
        />
      </div>
    </article>
  );
};

export default VisionMisionApp;
