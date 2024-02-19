import { Button } from "@/components/Common/Button";
import FormModal from "../../Header/Contacto/Form";
import { DetallesProps } from "./DetallesHeader";
import DetallesTallerDimenMaterialCard from "./DetallesTallerDimenMaterialCard";

const DetallesMetricaYContacto = ({ data }: DetallesProps) => {
  const { dimensiones, taller, material } = data ?? {};
  return (
    <div className="flex flex-[0_1_75rem] max-md:flex-wrap mt-16 gap-4 justify-center my-[3rem]">
      <div className="flex items-start flex-[0_1_35rem] max-md:flex-[0_1_100%] max-md:justify-center min-h-[40vh]">
        <div className="min-h-[20rem]  rounded-2xl shadow-md p-6  text-text_primary border flex-[0_1_30rem]">
          <div className="text-xl gilroy-semi-bold">
            <p className="text-xl gilroy-semi-bold">Detalles del Producto</p>
          </div>
          <div className="flex w-full flex-wrap min-h-[10rem] gap-8 mt-8 text-[1.1rem]">
            <DetallesTallerDimenMaterialCard taller={taller} title="Taller" />
            <DetallesTallerDimenMaterialCard
              taller={material}
              title="Material"
            />
            <DetallesTallerDimenMaterialCard
              taller={dimensiones}
              title="Dimensiones"
            />
          </div>
        </div>
      </div>
      <div className="max-lg:flex-[0_1_30rem] flex-[0_1_40rem]">
        <FormModal />
        <div className="mt-8 flex w-full justify-end ">
          <Button
            className="bg-btn_primary h-[2.5rem] max-md:flex-[0_1_100%] text-text_third gilroy-medium rounded-full textx flex-[0_1_15rem]"
            text="Contactar"
          />
        </div>
      </div>
    </div>
  );
};

export default DetallesMetricaYContacto;
