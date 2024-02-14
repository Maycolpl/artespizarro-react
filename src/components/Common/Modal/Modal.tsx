import { m } from "framer-motion";
import { ReactNode } from "react";

type PropsModal = {
  children: ReactNode;
};

const Modal = ({ children }: PropsModal) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-50 inset-0 flex items-center justify-center bg-white"
    >
      {children}
    </m.div>
  );
};

export default Modal;
