import { Button } from "@/components/Common/Button";
import ContactoForm from "@/components/Inicio/Header/Contacto/ModalContactoForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortadaButtonts = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(!isOpen);
  return (
    <div className="flex mt-3 max-sm:items-center  max-sm:flex-col max-lg:justify-center px-3 max-sm:gap-4 gap-8">
      {/* Habre el modal del contacto */}
      <Button
        onClick={open}
        className="flex items-center justify-center  max-sm:w-[12rem] max-sm:h-[2.4rem] w-[10.475rem] h-[2.8125rem] bg-btn_primary rounded-3xl text-text_third gilroy-medium max-sm:text-[1rem]  text-[1.1rem]"
        text="Contáctanos"
      />
      <Button
        className="flex items-center justify-center max-sm:w-[12rem] max-sm:h-[2.4rem]  w-[11.375rem] h-[2.8125rem] bg-btn_secondary rounded-3xl text-text_four gilroy-regular  max-sm:text-[1rem] font-[500] text-[1.1rem]"
        text="Ver proyectos"
        onClick={() => navigate("/proyectos")}
      />
      {/* Modal Contacto */}
      <AnimatePresence>
        {isOpen && <ContactoForm onClick={open} />}
      </AnimatePresence>
    </div>
  );
};

export default PortadaButtonts;
