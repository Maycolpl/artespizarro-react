import { Button } from "@/components/Common/Button";
import ContactoForm from "@/components/Header/Contacto/ModalContactoForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const PortadaButtonts = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(!isOpen);
  return (
    <div className="flex mt-3 px-3 gap-8">
      {/* Habre el modal del contacto */}
      <Button
        onClick={open}
        className="flex items-center justify-center w-[10.475rem] h-[2.8125rem] bg-btn_primary rounded-3xl text-text_third gilroy-medium text-[1.1rem]"
        text="Contáctanos"
      />
      <Button
        className="flex items-center justify-center w-[11.375rem] h-[2.8125rem] bg-btn_secondary rounded-3xl text-text_four gilroy-regular font-[500] text-[1.1rem]"
        text="Ver proyectos"
      />
      {/* Modal Contacto */}
      <AnimatePresence>
        {isOpen && <ContactoForm onClick={open} />}
      </AnimatePresence>
    </div>
  );
};

export default PortadaButtonts;
