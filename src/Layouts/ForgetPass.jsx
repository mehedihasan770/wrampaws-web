import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import toast from 'react-hot-toast';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ForgetPass = () => {
    const {passwordReset, setLoading} = use(AuthContext)
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || "");
    const handlePassForget = (e) => {
        e.preventDefault()
        passwordReset(email)
        .then(() => {
            setLoading(false)
            toast.success('password reset successful')
            setTimeout(() => {
              window.location.href = "https://mail.google.com/"
            }, 500)
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })

    }

  return (
    <div>
        <header>
            <Navbar></Navbar>
        </header>
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
        <div className="text-center lg:text-left">
          <h1 className="md:text-2xl font-bold">Reset Your Password!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handlePassForget}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="name"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input w-full"
                  placeholder="Email"
                />
                <div className="flex space-x-2">
                  <Link className="btn btn-neutral mt-4 w-[25%]" to={'/auth/login'}><button>Back</button></Link>
                  <button className="btn btn-neutral mt-4 w-[75%]">Reset Password</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
};

export default ForgetPass;
