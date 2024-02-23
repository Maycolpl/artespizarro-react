import { Button } from "@/components/Common/Button";
import { useState } from "react";
import ContactoForm from "./ModalContactoForm";
import { AnimatePresence } from "framer-motion";

const Contacto = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <>
      <div className="flex-[0_1_10rem]">
        <Button
          onClick={open}
          className="flex items-center justify-center w-[8.375rem] h-[2.6125rem] bg-btn_primary rounded-3xl text-text_third gilroy-medium text-[0.9rem]"
          text="Contáctanos"
        />
      </div>
      {/* Modal Contacto */}
      <AnimatePresence>
        {isOpen && <ContactoForm onClick={open} />}
      </AnimatePresence>
    </>
  );
};

export default Contacto;
