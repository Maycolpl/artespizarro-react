import Contacto from "../Contacto/Contacto";
import { links } from "./Links";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <div className="flex flex-[0_1_50rem]  justify-between items-center">
      <div className="flex-[0_1_36rem] flex items-center justify-end gap-3">
        {links.map((links, index) => (
          <NavbarLinks
            className="text-link_navtext-center text-link_nav transition flex-[0_1_6.5rem] text-[1.1rem] font-[400]"
            key={index}
            data={links}
          />
        ))}
      </div>
      <Contacto />
    </div>
  );
};

export default Navbar;
