import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";

const Login = () => {
    const {signInUser, setUser, signInWithGoogle, setLoading} = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)

    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        setError('')
        signInUser(email, pass)
        .then((r) => {
          setLoading(false)
          toast.success('Login successful!');
          setUser(r.user)
          navigate(location.state || '/')
        })
        .catch(error => {
          setLoading(false)
          setError(error.message)
          toast.error(error.message)
        })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((r) => {
            setLoading(false)
            toast.success('Log in successful')
            setUser(r.user)
            navigate(location.state || '/')
        })
          .catch(error => {
            setLoading(false)
            setError(error.message)
            toast.error(error.message)
        })
    }
    const handleForgetPass = () => {
      navigate('/forgatpassword', {state: {email}})
    }


  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" required className="input w-full" placeholder="Email" />

              <label className="label">Password</label>
              <div className="relative">
                <input type={show ? "password" : "text"} name="pass" required className="input w-full" placeholder="Password" />
                <p className="absolute bottom-2.5 right-4" onClick={() => setShow(!show)}>{show ? <FaEyeLowVision size={21}/> : <FaEye size={20}/>}</p>
              </div>

              <div>
                <a onClick={handleForgetPass} className="link link-hover">Forgot password?</a>
              </div>

              {error && <p className="text-red-600">{error}</p>}

              <button className="btn btn-neutral mt-4">Login</button>
              <button onClick={handleGoogleSignIn} type='button' className="btn"><FcGoogle size={30}/>Login with Google</button>

              <h2 className="font-semibold pt-3">
                  Dont’t Have An Account ?{" "}
                  <Link className="text-secondary" to={"/auth/signup"}>
                    Signup
                  </Link>
                </h2>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
