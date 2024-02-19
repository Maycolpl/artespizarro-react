type PropsDetallesTaller = {
  taller: string | undefined;
  title: string | undefined;
};

const DetallesTallerDimenMaterialCard = ({
  taller,
  title,
}: PropsDetallesTaller) => {
  return (
    <>
      <div className="flex flex-[0_1_25rem] justify-between">
        <p>{title}</p>
        <div className="flex gap-4 flex-[0_1_16rem] justify-end">
          <span>|</span>
          <p className="flex-[0_1_11rem]">{taller}</p>
        </div>
      </div>
    </>
  );
};

export default DetallesTallerDimenMaterialCard;
