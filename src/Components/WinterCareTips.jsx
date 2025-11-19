import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WinterCareTips = (care) => {
    useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
    const catCare = care?.care
    return (
        <div className="shadow-xl p-5 rounded-br-2xl rounded-tl-2xl bg-purple-100"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h1 className="text-[18px] font-semibold text-indigo-600">{catCare.title}{catCare.icon}</h1>
            <p className="text-gray-500">{catCare.description}</p>
        </div>
    );
};

export default WinterCareTips;