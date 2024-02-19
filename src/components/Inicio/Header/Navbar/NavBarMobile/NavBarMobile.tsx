import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../Logo/Logo";
import Mobile from "./Mobile";
import { AnimatePresence } from "framer-motion";

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeState = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex lg:hidden  justify-between w-full items-center">
        <Logo />
        <RxHamburgerMenu
          className="text-[3rem] text-text_secondary"
          onClick={changeState}
        />
      </div>
      <AnimatePresence>
        {isOpen && <Mobile onclick={changeState} />}
      </AnimatePresence>
    </>
  );
};

export default NavBarMobile;
