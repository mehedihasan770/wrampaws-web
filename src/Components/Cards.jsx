import { Link } from "react-router";
import rating from "../assets/icon-ratings.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Cards = (cats) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="p-5 shadow-2xl rounded-2xl space-y-3 hover:shadow-lg transform hover:scale-102 transition-transform duration-1000 ease-in-out"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          className="h-70 object-cover w-full hover:scale-105 transition-transform duration-500 ease-in-out"
          src={cats?.cats?.image}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <h1 className="font-bold">
          {" "}
          <span className="text-gray-500 font-semibold">
            {cats?.cats?.serviceName}
          </span>
        </h1>
        <div className="flex space-x-2 items-center">
          <div>
            <img src={rating} alt="" width={"18px"} />
          </div>
          <p className="font-semibold">{cats?.cats?.rating}</p>
        </div>
      </div>
      <div>
        <p className="font-bold">
          {" "}
          <span className="text-gray-500 font-semibold">
            ${cats?.cats?.price}
          </span>
        </p>
      </div>
      <div>
        <Link to={`/Details/${cats?.cats?.serviceId}`}>
          <button className="btn hover:bg-purple-700 btn-primary rounded-2xl w-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
