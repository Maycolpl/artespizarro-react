import { m } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { links } from "../Links";
import NavbarLinks from "../NavbarLinks";

type PropsMobile = {
  onclick: () => void;
};
const Mobile = ({ onclick }: PropsMobile) => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed flex inset-0 z-[100]"
      >
        <div className="relative pt-[6rem] pl-[3rem] flex-[0_1_20rem] bg-white">
          <div
            onClick={onclick}
            className="absolute text-3xl text-[#C60B6F] right-5 top-5"
          >
            <IoMdClose />
          </div>
          <div className="flex gap-5 flex-col">
            {links.map((link, index) => (
              <NavbarLinks
                key={`mobile-${index}`}
                onClick={onclick}
                data={link}
                className=""
              />
            ))}
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Mobile;
