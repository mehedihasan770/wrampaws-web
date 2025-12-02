import React, { use } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../AuthContext/AuthContext';
import { Link } from 'react-router';
import Footer from '../Components/Footer';
import 'animate.css';
import { useLoading } from '../Components/LoadingHok';
import Loading from '../Components/Loading';

const MyProfile = () => {
    const {user} = use(AuthContext)
    const {lod} = useLoading()
    if(lod){
        return <Loading></Loading>
    }
    return (
        <div>
            <header className='sticky top-2 z-50'>
                <Navbar></Navbar>
            </header>
            <main className="max-w-screen flex justify-center items-center mt-10 min-h-[88vh]">
        <div className="shadow-lg rounded-3xl max-w-2xl mx-auto p-6 flex gap-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src={user?.photoURL}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{user?.displayName}</h2>
            <p className="text-gray-600 mb-2">{user?.email}</p>
            <Link to={'/ProfileUpdate'} className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-purple-700">
              Edit Profile
            </Link>
          </div>
        </div>
      </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyProfile;