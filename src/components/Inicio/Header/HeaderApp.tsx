import Logo from "./Logo/Logo";
import NavBarMobile from "./Navbar/NavBarMobile/NavBarMobile";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="w-full px-[3rem] max-sm:px-[2rem]  flex pt-[3.125rem] pb-[2.1875rem] justify-center ">
      <div className="flex max-lg:hidden flex-[0_1_75.875rem] justify-between">
        <Logo />
        <Navbar />
      </div>
      <NavBarMobile />
    </header>
  );
};

export default Header;
