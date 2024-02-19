import { NavLink } from "react-router-dom";
import { Links } from "./Links";

type PropsNavbarLinks = {
  data: Links;
  className?: string;
  onClick?: () => void;
};

const NavbarLinks = ({ data, className, onClick }: PropsNavbarLinks) => {
  const { path, text } = data;
  return (
    <>
      <NavLink onClick={onClick} className={className} to={path}>
        {text}
      </NavLink>
    </>
  );
};

export default NavbarLinks;
