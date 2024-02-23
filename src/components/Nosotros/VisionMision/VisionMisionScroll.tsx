import { useEffect, useState } from "react";

const VisionMisionScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const getClassNames = () => {
    if (scrollY >= 2540) return "opacity-0";
    else if (scrollY >= 2180) return "bg-btn_primary sticky top-[4rem]";
    else if (scrollY >= 1796) return "bg-btn_third sticky top-[4rem]";
    else return "";
  };

  return (
    <div className="absolute max-md:pt-[1rem] max-md:top-0 max-xl:left-2 -left-4 bottom-0 bg-white">
      <div className="min-h-[52rem] bg-[#e1e2e4] rounded-3xl">
        <div
          className={`transition-all rounded-3xl ${getClassNames()} h-[200px] w-[10px]`}
        ></div>
      </div>
    </div>
  );
};

export default VisionMisionScroll;
