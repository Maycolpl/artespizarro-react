type PropsTimeLine = {
  img3: string;
  img4: string;
  img2: string;
};

const TimeLine = ({ img2, img3, img4 }: PropsTimeLine) => {
  return (
    <>
      <ol className="relative max-md:pl-0  flex-[0_1_24rem] max-medium-desktop:order-1 pl-[3rem] border-s border-gray-400">
        <li className="mb-16 max-sm:mb-7 ms-10">
          <span className="absolute flex items-center max-sm:w-10 max-sm:h-10 justify-center w-20 h-20  bg-white rounded-full -left-10 max-sm:-left-5 ring-8 ring-white">
            <img src={img3} alt="arte" className="h-full w-full rounded-full" />
          </span>

          <h3 className="flex max-sm:ml-[0rem] max-md:ml-[3rem] items-center mb-1 text-lg font-semibold">
            Creatividad
          </h3>
          <p className="max-md:ml-[3rem] max-sm:ml-[0rem]">
            Nos permite desarrollar nuevas ideas ayudandonos a encontrar
            soluciones innovadoras para realizar productos y servicios únicos.
          </p>
        </li>
        <li className="mb-16 max-sm:mb-7 ms-10">
          <span className="absolute flex items-center max-sm:w-10 max-sm:h-10 justify-center w-20 h-20 bg-white rounded-full -left-10 max-sm:-left-5 ring-8 ring-white">
            <img src={img4} alt="arte" className="h-full w-full rounded-full" />
          </span>
          <h3 className="max-sm:ml-[0rem] max-md:ml-[3rem] mb-1 text-lg font-semibold">
            Colaboración
          </h3>

          <p className="max-md:ml-[3rem] max-sm:ml-[0rem]">
            Ayuda a lograr objetivos comunes en la producción juntando a
            trabajadores creativos, diseñadores y artesanos.
          </p>
        </li>
        <li className="ms-10">
          <span className="absolute flex items-center max-sm:bottom-0 max-sm:w-10 max-sm:h-10 justify-center w-20 h-20 bg-white rounded-full -left-10 max-sm:-left-5 ring-8 ring-white ">
            <img src={img2} alt="arte" className="h-full w-full rounded-full" />
          </span>
          <h3 className="max-sm:ml-[0rem] max-md:ml-[3rem] mb-1 text-lg font-semibold ">
            Cultura
          </h3>

          <p className="max-md:ml-[3rem] max-sm:ml-[0rem]">
            Nuestra cultura nos distingue y ayudan a dar forma a nuestra
            identidad.
          </p>
        </li>
      </ol>
    </>
  );
};

export default TimeLine;
