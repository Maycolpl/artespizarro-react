type PropsCards = {
  className: string;
  img: string;
  name: string;
};

const Cards = ({ className, img, name }: PropsCards) => {
  return (
    <>
      <div className={className +` max-lg:min-h-[25rem] max-medium-desktop:min-h-[15rem] max-sm:flex-[0_1_100%] rounded-3xl overflow-hidden`}>
        <img
          className="h-full rounded-2xl transition-all hover:scale-105 w-full object-cover absolute 	"
          src={img}
          alt={name}
        />
      </div>
    </>
  );
};

export default Cards;
