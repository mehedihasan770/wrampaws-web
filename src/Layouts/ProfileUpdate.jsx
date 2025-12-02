import React, { use, useState } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../AuthContext/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import Footer from '../Components/Footer';

const ProfileUpdate = () => {
    const {updateUserPro, setLoading} = use(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleUpdateProfile = (e) => {
      e.preventDefault()
      const displayName = e.target.name.value;
      const photoURL = e.target.Photo.value;
      setError('')
      if(displayName.length < 5){
        return setError('Name Min 5 characters required')
      }
      updateUserPro({displayName, photoURL})
      .then(() => {
        setLoading(false)
        navigate('/myprofile')
        toast.success('Update successful')
      })
      .catch(error => {
        setLoading(false)
        toast.error(error.message)
      })
    }
     return (
    <div>
        <header className='sticky top-2 z-50'>
          <Navbar></Navbar>
        </header>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
      <div className="text-center lg:text-left">
        <h1 className="md:text-2xl font-bold">Update Your Profile!</h1>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="name" required className="input w-full" placeholder="New Name" />
              <label className="label">Photo URL</label>
              <input type="text" name="Photo" required className="input w-full" placeholder="New Photo URL" />
              {error && <p className="text-red-600">{error}</p>}
              <button className="btn bg-blue-600 text-white rounded-2xl mt-4 hover:bg-purple-700">Update Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
  );
};

export default ProfileUpdate;