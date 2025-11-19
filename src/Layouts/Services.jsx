import React from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData } from 'react-router';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import { useLoading } from '../Components/LoadingHok';
import Loading from '../Components/Loading';

const Services = () => {
    const data = useLoaderData()
    const {lod} = useLoading()
    if(lod){
        return <Loading></Loading>
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
                <main className='max-w-11/12 mx-auto'>
                    <h1 className='text-center font-bold md:text-3xl mt-10'>All Winter Care Services</h1>
                    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            data.map(cats => <Cards key={cats.serviceId} cats={cats} ></Cards>)
                        }
                    </section>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
        </div>
    );
};

export default Services;