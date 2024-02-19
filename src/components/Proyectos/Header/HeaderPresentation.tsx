import img from "./img/wm (convert.io).webp";

const HeaderPresentation = () => {
  return (
    <>
      <div className="flex px-[2rem] max-md:px-[1rem] flex-[0_1_110rem] justify-center items-center ">
        <div className="flex-[0_1_110rem] rounded-3xl flex items-center justify-center portada-bg">
          <div className="flex-[0_1_50rem] max-xl:flex-[0_1_35rem] ">
            <img src={img} alt="arte" className="h-full w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPresentation;
