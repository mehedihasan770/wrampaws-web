import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import rating from "../assets/icon-ratings.png";
import BookService from "../Components/BookService";
import Footer from "../Components/Footer";
import 'animate.css';

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [cat, setCat] = useState({});
  useEffect(() => {
    setCat(data.find((d) => d.serviceId === parseInt(id)));
  }, [data, id]);
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <Navbar />
      </header>
      <section className="animate__animated animate__fadeInUp max-w-6xl mx-auto mt-12 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-indigo-50 p-6 rounded-xl shadow-md">
          <div className="w-full md:w-1/2 h-72 rounded-xl overflow-hidden">
            <img
            className="w-full h-full object-cover rounded-xl"
              src={cat.image}
              alt="Service"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">
              Service Name:
              <span className="text-gray-600 font-semibold">
                {cat?.serviceName}
              </span>
            </h2>
            <p className="text-lg font-medium text-gray-800">
              Provider Name:
              <span className="text-gray-600">{cat?.providerName}</span>
            </p>
            <p className="text-lg font-medium text-gray-800">
              Provider Email:
              <span className="text-gray-600">{cat?.providerEmail}</span>
            </p>
            <p className="text-lg font-medium text-gray-800">
              Price:
              <span className="text-green-500 font-semibold">
                ${cat?.price}
              </span>
            </p>
            <div className="flex items-center gap-2">
              <img src={rating} alt="Rating" className="w-5 h-5" />
              <p className="text-gray-700 font-semibold">{cat?.rating}</p>
            </div>
            <p className="text-md font-medium text-gray-800">
              Description:
              <span className="text-gray-600">{cat?.description}</span>
            </p>
          </div>
        </div>
        <div className="border-b-2 border-gray-400 mt-5 mb-4"></div>
      </section>
      <section className="max-w-6xl mx-auto px-4">
        <BookService></BookService>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Details;
