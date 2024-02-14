import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className="w-full flex pt-[3.125rem] pb-[2.1875rem] justify-center ">
      <div className="flex flex-[0_1_75.875rem] justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
