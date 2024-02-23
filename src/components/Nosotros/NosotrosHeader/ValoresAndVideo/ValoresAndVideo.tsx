import TimeLine from "./TimeLine";
import Video from "./Video";
import img2 from "./img/colaboracion.svg";
import img3 from "./img/creatividad.svg";
import img4 from "./img/cultura.svg";
const ValoresAndVideo = () => {
  return (
    <div className="flex justify-center max-md:pb-[2rem] pb-[4rem] max-medium-desktop:pl-0 pl-[3rem] container m-auto">
      <div className="flex px-[1rem] max-sm:px-[2rem] max-medium-desktop:justify-center max-medium-desktop:flex-wrap justify-between flex-[0_1_75rem]">
        <TimeLine img2={img2} img3={img3} img4={img4} />
        <Video />
      </div>
    </div>
  );
};

export default ValoresAndVideo;
