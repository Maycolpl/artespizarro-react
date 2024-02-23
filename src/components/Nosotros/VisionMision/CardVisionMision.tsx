type PropsCardVisionMision = {
  url: string;
  alt: string;
  title: string;
  text: string;
  nosotros: string;
};
const CardVisionMision = ({
  alt,
  url,
  text,
  title,
  nosotros,
}: PropsCardVisionMision) => {
  return (
    <>
      <div className="flex pl-[2rem] max-md:pt-[3rem] max-md:flex-wrap max-xl:pl-[3rem] relative justify-evenly pt-[6.5rem] flex-[0_1_77rem]">
        <div className="flex flex-col max-md:flex-[0_1_25rem] flex-[0_1_44rem]">
          <div className="flex gap-4 mb-[2rem] flex-col">
            <p className="text-[1.6rem] max-xl:text-[1.3rem] max-md:text-[1.1rem] text-text_secondary gilroy-semi-bold">
              {title}
            </p>
            <h3 className="text-text_primary max-medium-desktop:text-3xl max-md:text-2xl max-xl:text-4xl text-5xl gilroy-semi-bold">{nosotros}</h3>
          </div>
          <div className="text-[1.1rem] max-w-[36.4375rem]">
            <p className="text-text_primary">{text}</p>
          </div>
        </div>
        <div className="max-md:mb-[1rem] flex max-md:-order-1 max-md:justify-start justify-center flex-[0_1_25rem]">
          <img src={url} alt={alt} className="h-[23rem] w-[12rem] max-md:h-[14rem] max-md:w-[8rem]" />
        </div>
      </div>
    </>
  );
};

export default CardVisionMision;
