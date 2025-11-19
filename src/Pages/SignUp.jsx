import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";

const SignUp = () => {
    const {signUpUser, updateUserPro, setUser, signInWithGoogle, setLoading} = use(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)

    const handleSignIn = (e) => {
        e.preventDefault()
        const displayName = e.target.name.value;
        const photoURL = e.target.pURL.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const strongPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(displayName.length < 5){
          return setError('Name Min 5 characters required')
        }
        if(!strongPass.test(pass)){
            setError('Weak password! Use 6+ chars with A-Z & a-z.')
            return
        }
        setError('')
        signUpUser(email, pass)
        .then((r) => {
          updateUserPro({displayName, photoURL})
          .then(() => {
            setLoading(false)
            toast.success('Sign up successful')
            setUser(r.user)
            navigate('/')
          })
          .catch(error => {
            setLoading(false)
            setError(error.message)
            toast.error(error.message)
          })
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
            toast.success('Sigin up successful')
            setUser(r.user)
            navigate('/')
        })
          .catch(error => {
            setLoading(false)
            setError(error.message)
            toast.error(error.message)
        })
      }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Signup now!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">

              <label className="label">Name</label>
              <input type="text" name="name" className="input w-full" required placeholder="Name" />

              <label className="label">Photo URL</label>
              <input type="text" name="pURL" className="input w-full" required placeholder="Photo URL" />

              <label className="label">Email</label>
              <input type="email" name="email" className="input w-full" required placeholder="Email" />

              <label className="label">Password</label>
              <div className="relative">
                <input type={show ? "password" : "text"} name="pass" className="input w-full" required placeholder="Password" />
                <p className="absolute bottom-2.5 right-4" onClick={() => setShow(!show)}>{show ? <FaEyeLowVision size={21}/> : <FaEye size={20}/>}</p>
              </div>

              {error && <p className="text-red-600">{error}</p>}

                <button className="btn btn-neutral mt-3">Signup</button>
                <button onClick={handleGoogleSignIn} type='button' className="btn"><FcGoogle size={30}/>Login with Google</button>

              <h2 className="font-semibold pt-3">
                  Already Have An Account ?{" "}
                  <Link className="text-secondary" to={"/auth/login"}>Login</Link>
              </h2>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;