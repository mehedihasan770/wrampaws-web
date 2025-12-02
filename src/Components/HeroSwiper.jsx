import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const HeroSwiper = () => {
  const slides = [
    {
      title: "Premium Pet Care",
      desc: "Top-quality grooming and wellness care for your pets. Safe, clean and handled with love.",
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600",
    },
    {
      title: "Comfort Grooming Space",
      desc: "Top-quality grooming and wellness care for your pets. Safe, clean and handled with love.",
      img: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1600",
    },
    {
      title: "Premium Pet Spa & Wash",
      desc: "Top-quality grooming and wellness care for your pets. Safe, clean and handled with love.",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600",
    },
  ];

  return (
    <div className="w-full mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[420px] md:h-[600px] flex items-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
              <div className="relative p-6 md:p-20 max-w-xl text-white animate-fadeInUp">
                <h1 className="text-2xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-xl mt-3 mb-6 opacity-90 drop-shadow">
                  {slide.desc}
                </p>
                <p className="hidden md:block text-lg opacity-80 mb-5">Professional & Reliable Pet Services</p>
                <Link to={'/services'} className="px-4 py-2 cursor-pointer md:px-7 md:py-3 bg-[#422AD5] hover:bg-purple-700 rounded-xl text-white font-semibold text-sm md:text-lg shadow-xl transition transform hover:scale-105">
                  Book Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default HeroSwiper;