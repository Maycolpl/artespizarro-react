import { NavLink } from "react-router-dom";
import { Links } from "./Links";

type PropsNavbarLinks = {
  data: Links;
  className?: string;
};

const NavbarLinks = ({ data, className }: PropsNavbarLinks) => {
  const { id, path, text } = data;
  return (
    <>
      <NavLink className={className} key={id} to={path}>
        {text}
      </NavLink>
    </>
  );
};

export default NavbarLinks;
