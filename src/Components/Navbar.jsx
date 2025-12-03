import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import toast from "react-hot-toast";
import { MdPets } from "react-icons/md";
import { MoonLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => `${isActive ? "text-white bg-[#422AD5]" : "text-blue-700"} border-2 rounded-2xl border-[#422AD5] font-bold ml-1 px-4 py-2 hover:bg-[#422AD5] hover:text-white transition-colors duration-300`}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => `${isActive ? "text-white bg-[#422AD5]" : "text-blue-700"} border-2 rounded-2xl border-[#422AD5] font-bold ml-1 px-4 py-2 hover:bg-[#422AD5] hover:text-white transition-colors duration-300`}
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
      
      {user && <li>
        <NavLink
          className={({ isActive }) => `${isActive ? "text-white bg-[#422AD5]" : "text-blue-700"} border-2 rounded-2xl border-[#422AD5] font-bold ml-1 px-4 py-2 hover:bg-[#422AD5] hover:text-white transition-colors duration-300`}
          to={"/myprofile"}
        >
          My Profile
        </NavLink>
      </li>}
      <li>
        <NavLink
          className={({ isActive }) => `${isActive ? "text-white bg-[#422AD5]" : "text-blue-700"} border-2 rounded-2xl border-[#422AD5] font-bold ml-1 px-4 py-2 hover:bg-[#422AD5] hover:text-white transition-colors duration-300`}
          to={"/about-us"}
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="dark:bg-[#1D232A]">
      <div className="navbar bg-[#EEF2FF] dark:bg-[#1E2939] max-w-10/12 mx-auto rounded-2xl shadow-sm mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <div>
              
            </div>
            <a className="md:text-xl font-bold text-[#422AD5]"><MdPets ml-1 className="inline-block -mt-1 mr-1 md:-mt-2"/>WarmPaws</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <MoonLoader color="red" size={35} />
          ) : user ? (
            <div className="flex items-center space-x-2">
              <div className="dropdown dropdown-hover mr-2">
                {
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                }
                <ul
                  tabIndex={-1}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm"
                >
                  <li className="text-nowrap">{user?.displayName}</li>
                </ul>
              </div>
              <button onClick={handleSignOut} className="btn rounded-2xl hover:bg-purple-700 btn-primary w-14 h-9 ml-2 md:w-25 md:h-10">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to={"/auth/login"}>
                <button className="btn bg-[#422AD5] rounded-2xl text-white hover:bg-purple-700 w-14 h-9 ml-2 md:w-25 md:h-10">Login</button>
              </Link>
              <Link to={"/auth/signup"}>
                <button className="btn bg-[#422AD5] rounded-2xl text-white hover:bg-purple-700 w-14 h-9 ml-2 md:w-25 md:h-10">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
