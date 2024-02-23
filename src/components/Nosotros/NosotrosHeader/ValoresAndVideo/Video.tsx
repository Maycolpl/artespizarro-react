import video from "./video/video-ap-2.mp4";

const Video = () => {
  return (
    <div className="max-medium-desktop:mb-[6rem] flex-[0_1_47rem]">
      <video src={video} className="rounded-3xl" autoPlay muted loop></video>
    </div>
  );
};

export default Video;
