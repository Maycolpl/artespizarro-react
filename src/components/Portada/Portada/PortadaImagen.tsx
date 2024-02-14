import img1 from "@/components/Portada/Portada/img/dot-l (1).webp";
import img2 from "@/components/Portada/Portada/img/dot-l.webp";
import img3 from "@/components/Portada/Portada/img/dot-m.webp";
import img8 from "@/components/Portada/Portada/img/dot-m.webp";
import img4 from "@/components/Portada/Portada/img/dot-s (1).webp";
import img5 from "@/components/Portada/Portada/img/in-woman.webp";
import img6 from "@/components/Portada/Portada/img/round_bg.webp";
import img7 from "@/components/Portada/Portada/img/dot-s.webp";

const PortadaImagen = () => {
  return (
    <div className="in-hero_right">
      <img src={img6} className="round_bg" alt="arte" />
      <img src={img1} className="inc-4" alt="arte" />
      <img src={img8} className="inc-1" alt="arte" />
      <img src={img3} className="inc-6" alt="arte" />
      <img src={img4} className="inc-5" alt="arte" />
      <img src={img2} className="inc-3" alt="arte" />
      <img src={img5} className="inh-woman" alt="arte" />
      <img src={img7} className="inc-2" alt="arte" />
    </div>
  );
};

export default PortadaImagen;
