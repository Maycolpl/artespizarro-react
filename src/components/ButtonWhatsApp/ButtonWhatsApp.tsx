import { RiWhatsappFill } from "react-icons/ri";

const ButtonWhatsApp = () => {
  return (
    <>
      <a
        href="https://wa.link/ghc5yz"
        className="fixed z-20 w-[4.5rem] max-sm:right-[1rem] max-sm:bottom-[1.5rem] max-sm:h-[2.8rem] max-sm:w-[2.8rem] flex items-center justify-normal right-[3rem] bottom-[4rem] h-[4.5rem]"
        target="_blank"
      >
        <RiWhatsappFill className="h-full w-full text-green-400" />
      </a>
    </>
  );
};

export default ButtonWhatsApp;
