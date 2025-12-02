import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import rating from "../assets/icon-ratings.png";
import BookService from "../Components/BookService";
import Footer from "../Components/Footer";
import "animate.css";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [cat, setCat] = useState({});
  useEffect(() => {
    setCat(data.find((d) => d.serviceId === parseInt(id)));
  }, [data, id]);
  return (
    <div className="min-h-screen">
      <header className='sticky top-2 z-50'>
        <Navbar />
      </header>
      <section className="animate__animated animate__fadeInUp max-w-10/12 mx-auto mt-12 px-4">
        <div className="rounded-2xl mb-2 transition">
          <div className=" flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-3xl overflow-hidden">
            <div className="w-full rounded-2xl md:w-1/2 h-80 md:h-auto overflow-hidden rounded-t-3xl md:rounded-l-3xl">
              <img
                src={cat.image}
                alt="Service"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                {cat?.serviceName}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Provider
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium truncate">
                    {cat?.providerName}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Email
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium truncate">
                    {cat?.providerEmail}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-green-500 font-bold text-xl">
                  ${cat?.price}
                </p>
                <div className="flex items-center gap-2">
                  <img src={rating} alt="Rating" className="w-5 h-5" />
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    {cat?.rating}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Description
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {cat?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-10/12 mx-auto px-4">
        <BookService></BookService>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Details;
