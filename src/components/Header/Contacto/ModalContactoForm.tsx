import Modal from "@/components/Common/Modal/Modal";
import img from "@/components/Header/Contacto/img/mdc.webp";
import { IoClose } from "react-icons/io5";
type PropsContactForm = {
  onClick: () => void;
};

const ModalContactoForm = ({ onClick }: PropsContactForm) => {
  return (
    <Modal>
      <div className="flex flex-[0_1_78.625rem] py-4 min-h-[64vh] relative">
        <div onClick={onClick} className="absolute right-8 top-12">
          <IoClose className="text-3xl" />
        </div>
        <div className="mr-5 h-full rounded-2xl shadow-lg border">
          <img src={img} alt="arte" className="rounded-2xl w-full h-full" />
        </div>
        <div className=" flex-[0_1_58rem] border shadow-lg rounded-2xl py-14 px-12">
          <div>
            <h1 className="text-6xl text-text_primary mb-2 gilroy-black">
              Hola
            </h1>
            <p className="text-3xl mb-2 gilroy-semi-bold">
              ¿Te gustaría solicitar una escultura personalizada?
            </p>
            <p className="mb-4 text-text_four text-[1rem]">
              Solicita información para pedidos al por mayor, reporta un
              problema o solicita la ayuda que necesites.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContactoForm;
