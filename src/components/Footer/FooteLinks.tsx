import { Link } from "react-router-dom";
import { links } from "../Inicio/Header/Navbar/Links";

const FooteLinks = () => {
  return (
    <div className="flex max-md:flex-[0_1_100%] justify-center text-[0.9rem] gap-3 gilroy-semi-bold flex-col flex-[0_1_9.625rem]">
      {links.map((links, index) => (
        <Link key={index} to={links.path}>
          {links.text}
        </Link>
      ))}
    </div>
  );
};

export default FooteLinks;
