import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import toast from "react-hot-toast";
import logo from "../assets/Copilot_20251023_102940.png";
import { MoonLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold" : "font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold" : "font-bold"
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-700 font-bold" : "font-bold"
          }
          to={"/myprofile"}
        >
          My Profile
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
    <div>
      <div className="navbar bg-base-100 shadow-sm lg:px-20">
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
              <img className="w-20 h-20" src={logo} alt="" />
            </div>
            <a className="text-xl -ml-3 font-bold">WarmPaws</a>
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
              <button onClick={handleSignOut} className="btn btn-primary w-14 h-9 ml-2 md:w-25 md:h-10">
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to={"/auth/login"}>
                <button className="btn btn-secondary w-14 h-9 ml-2 md:w-25 md:h-10">Login</button>
              </Link>
              <Link to={"/auth/signup"}>
                <button className="btn btn-secondary w-14 h-9 ml-2 md:w-25 md:h-10">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
