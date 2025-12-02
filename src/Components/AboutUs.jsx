import { MdPets } from "react-icons/md";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="*:dark:bg-[#1E2939]">
        <header className='sticky top-2 z-50'>
                <Navbar></Navbar>
        </header>
    <div className="min-h-screen max-w-10/12 mx-auto my-10 bg-gray-50">
      <section className="bg-indigo-50 dark:bg-[#1E2939] py-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#422AD5] flex justify-center items-center gap-2">
            <MdPets className="inline-block" /> WarmPaws
          </h1>
          <p className="mt-5 text-gray-700 text-lg md:text-xl">
            Caring for your pets with love, compassion, and professional expertise.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-[#1E2939] rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At WarmPaws, our mission is to provide loving care and essential services to keep your pets healthy and happy. We strive to create a community where pets are treated as family.
          </p>
        </div>
        <div className="bg-white dark:bg-[#1E2939] rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a world where every pet receives the care they deserve. Our vision is to expand our services, educate pet owners, and promote animal welfare globally.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-5">Have a Question?</h2>
        <p className="text-gray-600 mb-5">Reach out to us and we’ll make sure your pets are in safe hands.</p>
        <Link to={'https://mail.google.com/'} className="bg-[#422AD5] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition duration-300">
          Contact Us Email
        </Link>
      </section>
    </div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  );
};

export default AboutUs;
