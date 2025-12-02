import React from "react";
import { Link } from "react-router";

const FooterTopSection = () => {
  return (
    <section className="bg-[#F9FAFB] dark:bg-[#1E2939] my-10 rounded-2xl py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=400&q=80"
            alt="Team"
            className="rounded-3xl shadow-2xl w-full h-64 object-cover mb-4 md:mb-0"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Have a Question</h2>
          <p className="mb-6 text-gray-500">
            Experienced vets and staff dedicated to making pets happy and
            healthy.
          </p>
          <Link to={'/about-us'} className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-purple-700 transition-colors duration-300">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterTopSection;
