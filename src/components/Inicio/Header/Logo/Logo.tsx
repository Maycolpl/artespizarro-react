import logo from "@/components/Inicio/Header/Logo/img/artes-pizarro.webp";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex-[0_1_23.5rem]">
      <Link to="/inicio">
        <img
          src={logo}
          alt="Pizarro"
          className="h-[3rem] w-[14rem] max-sm:h-[2.8rem] max-sm:w-[12rem]"
        />
      </Link>
    </div>
  );
};

export default Logo;
