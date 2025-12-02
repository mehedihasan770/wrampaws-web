import React, { useState } from "react";
import toast from "react-hot-toast";
import "animate.css";

const BookService = () => {
  const [error, setError] = useState("");
  const handleBookNow = (e) => {
    e.preventDefault();
    const name = e.target.name.value
    setError("");
    if (name.length < 5) {
      return setError("Name Min 5 characters required");
    }
    e.current.reset();
    toast.success("Book successful");
  };

  return (
    <div className=" flex items-center justify-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 p-8 shadow-2xl border rounded-2xl bg-[#EEF2FF] dark:bg-[#1E2939] border-gray-200">
        <div className="flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-gray-900 dark:text-gray-100 text-3xl font-extrabold">
                Wrampaws Services
              </h1>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                Premium Pet Care & Grooming
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-sm md:text-base text-gray-700 dark:text-gray-300">
            We provide top‑quality grooming, vet support, boarding, and premium
            care services to ensure your pets stay healthy, happy, and
            well‑treated.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-5 border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                350+
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Happy Clients
              </p>
            </div>
            <div className="p-5 border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition">
              <p className="text-xl font-bold text-gray-900 dark:text-gray-100">
                1200+
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Services Done
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 rounded-3xl shadow-inner border border-gray-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Book a Service
          </h2>

          <form onSubmit={handleBookNow} className="flex flex-col space-y-5">
            <div className="flex flex-col">
              <label className="font-medium mb-2 text-gray-900 dark:text-gray-100">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="p-4 border rounded-xl outline-none bg-transparent text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#422AD5] transition"
                placeholder="Your Name"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium mb-2 text-gray-900 dark:text-gray-100">
                Email
              </label>
              <input
                type="email"
                required
                className="p-4 border rounded-xl outline-none bg-transparent text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#422AD5] transition"
                placeholder="Your Email"
              />
            </div>
            <div>
              <p className="text-red-500">{error}</p>
            </div>
            <button
              type="submit"
              className="mt-4 py-4 bg-[#422AD5] cursor-pointer hover:bg-purple-700 rounded-2xl font-semibold shadow-lg text-white transition hover:opacity-90"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
