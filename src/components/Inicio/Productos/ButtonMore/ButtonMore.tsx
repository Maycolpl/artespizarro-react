import { Button } from "@/components/Common/Button";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ButtonMore = () => {
  const navigate = useNavigate();

  const changePageProductos = () => {
    navigate("/productos");
    window.scroll(0, 0);
  };

  return (
    <div className="flex flex-[0_1_73.5rem] items-center justify-center">
      <Button
        onClick={changePageProductos}
        text="Ver más"
        className="flex-[0_1_8rem] min-h-[2.5rem] flex items-center  gap-2 justify-center  rounded-full bg-btn_third text-text_third"
      >
        <IoAddCircleOutline className="text-xl" />
      </Button>
    </div>
  );
};

export default ButtonMore;
