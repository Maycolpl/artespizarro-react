import logo from "@/components/Header/Logo/img/artes-pizarro.webp";
const Logo = () => {
  return (
    <div className="flex-[0_1_23.5rem]">
      <a href="/inicio">
        <img src={logo} alt="Pizarro" />
      </a>
    </div>
  );
};

export default Logo;
