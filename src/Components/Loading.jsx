import React from 'react';
import { MoonLoader } from "react-spinners";
import Navbar from './Navbar';
import Footer from './Footer';

const Loading = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <div className="flex justify-center items-center h-screen">
                <MoonLoader color="#36d7b7" size={60} />
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Loading;