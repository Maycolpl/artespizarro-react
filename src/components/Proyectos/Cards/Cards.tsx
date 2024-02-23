import { Link } from "react-router-dom";

type PropsCards = {
  className: string;
  img: string;
  name: string;
  path: string;
  title: string;
  subTitle: string;
};

const Cards = ({ className, img, name, path, subTitle, title }: PropsCards) => {
  return (
    <>
      <div
        className={
          className +
          ` max-lg:min-h-[25rem] max-medium-desktop:min-h-[15rem] max-sm:flex-[0_1_100%] rounded-3xl overflow-hidden`
        }
      >
        <img
          className="h-full rounded-2xl w-full object-cover absolute"
          src={img}
          alt={name}
        />
        <div className="absolute flex items-end h-full w-full">
          <Link
            to={path}
            className="flex justify-end p-8 transition-all hover:scale-95 z-50 flex-col h-full flex-1"
          >
            <p className="text-text_third gilroy-black text-xl">{title}</p>
            <p className="text-text_third">{subTitle}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
