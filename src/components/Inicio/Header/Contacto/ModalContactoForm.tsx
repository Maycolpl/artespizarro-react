import Modal from "@/components/Common/Modal/Modal";
import img from "@/components/Inicio/Header/Contacto/img/mdc.webp";
import { IoClose } from "react-icons/io5";
import FormModal from "./Form";
import { Button } from "@/components/Common/Button";
type PropsContactForm = {
  onClick: () => void;
};

const ModalContactoForm = ({ onClick }: PropsContactForm) => {
  return (
    <Modal>
      <div className="flex max-[926px]:px-[1rem] flex-[0_1_78.625rem] py-4 min-h-[64vh] relative">
        <div onClick={onClick} className="absolute right-6 top-10">
          <IoClose className="text-4xl" />
        </div>
        <div className="mr-5 max-medium-desktop:hidden rounded-2xl shadow-lg flex-[0_1_20rem] relative border">
          <img
            src={img}
            alt="arte"
            className="rounded-2xl top-0 object-cover absolute h-full w-full "
          />
        </div>
        <div className="flex-[0_1_58rem] border max-md:p-4 shadow-lg rounded-2xl py-8 px-8">
          <div>
            <h1 className="text-6xl max-[926px]:text-4xl text-text_primary mb-4 gilroy-black">
              Hola
            </h1>
            <p className="text-3xl max-[926px]:text-xl text-text_primary mb-4 gilroy-semi-bold">
              ¿Te gustaría solicitar una escultura personalizada?
            </p>
            <p className="mb-4 text-text_four text-[1rem]">
              Solicita información para pedidos al por mayor, reporta un
              problema o solicita la ayuda que necesites.
            </p>
          </div>
          <div>
            <FormModal />
          </div>
          <div className="mt-8 flex w-full justify-end ">
            <Button
              onClick={onClick}
              className="bg-btn_primary h-[2.5rem] max-md:flex-[0_1_100%] text-text_third gilroy-medium rounded-full textx flex-[0_1_15rem]"
              text="Contactar"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContactoForm;
