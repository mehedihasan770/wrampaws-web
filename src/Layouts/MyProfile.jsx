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
            <header>
                <Navbar></Navbar>
            </header>
            <main className='max-w-screen flex justify-center items-center mt-10 min-h-screen'>
                <div className='bg-fuchsia-100 p-20 rounded-lg flex justify-center items-center flex-col'>
                    <div>
                        <img className='rounded-full w-40 h-40' src={user?.photoURL} alt=""/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-center text-purple-800 py-2'>{user?.displayName}</h1>
                        <h1 className='text-lg font-bold text-center text-gray-600'>{user?.email}</h1>
                    </div>
                    <div className='w-full'>
                        <Link to={'/ProfileUpdate'}><button className='animate__animated animate__fadeInUp btn btn-primary mt-3 w-full'>Update Profile</button></Link>
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