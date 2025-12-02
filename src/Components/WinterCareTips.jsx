import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WinterCareTips = (care) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const catCare = care?.care;
  return (
    <div className="rounded-3xl shadow-md p-6 hover:scale-101 transition-transform duration-300">
      <div className="text-center mb-4">
        <span className="text-5xl animate-bounce">❄️</span>
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center">{catCare.title}</h2>
      <p className="text-gray-500 text-[12px] text-justify">
        {catCare.description}
      </p>
    </div>
  );
};

export default WinterCareTips;
