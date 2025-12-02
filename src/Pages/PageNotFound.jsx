import { Link } from 'react-router';
import pagenotefound from '../assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AppsNotFound = () => {
    return (
        <div>
            <header className='sticky top-2 z-50'>
                <Navbar></Navbar>
            </header>
        <div className="min-h-screen flex justify-center items-center text-center">
            <div className='space-y-5'>
                <div>
                    <img className='w-[200px] md:w-[300px] lg:w-[400px] mx-auto' src={pagenotefound} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl md:text-5xl font-semibold'>Oops, page not found!</h1>
                </div>
                <div>
                    <p className='text-gray-500'>The page you are looking for is not available.</p>
                </div>
                <div className="w-fit mx-auto">
                    <Link to={'/'}><button className='btn w-45 p-6 border-0 rounded-2xl bg-[#422AD5] hover:bg-purple-700 font-semibold text-white text-[17px]'>Go Back!</button></Link>
                </div>
            </div>
        </div>
        <footer>
            <Footer></Footer>
        </footer>
        </div>
    );
};

export default AppsNotFound;