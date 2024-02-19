import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const FooterRedes = () => {
  return (
    <div className="flex  justify-start text-[0.9rem] gap-3 gilroy-semi-bold flex-col flex-[0_1_9.625rem]">
      <div>
        <p>Siguenos</p>
      </div>
      <div className="flex w-full justify-between">
        <a
          href="https://www.instagram.com/artes.pizarro"
          target="_blank"
          className="text-[1.8rem]"
        >
          <CiInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100089286133319" target="_blank" className="text-[1.8rem]">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/artespizarro" target="_blank" className="text-[1.8rem]">
          <CiLinkedin />
        </a>
      </div>
    </div>
  );
};

export default FooterRedes;
