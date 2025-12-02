import Navbar from '../Components/Navbar';
import HeroSwiper from '../Components/HeroSwiper';
import { useLoaderData } from 'react-router';
import Cards from '../Components/Cards';
import WinterCareTips from '../Components/WinterCareTips';
import MeetOurExpert from '../Components/MeetOurExpert';
import { useEffect, useState } from 'react';
import Reviews from '../Components/Reviews';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';
import { useLoading } from '../Components/LoadingHok';
import FooterTopSection from '../Components/FooterTopSection';

const HomeLayout = () => {
    const {lod} = useLoading()
    const data = useLoaderData()
    const [winterCare, setWinterCare] = useState([])
    useEffect(() => {
        fetch('/WinterCare.json')
        .then(r => r.json())
        .then(d => setWinterCare(d))
    }, [])

    if(lod){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <header className='sticky top-2 z-50'>
                <Navbar></Navbar>
            </header>
            <div className='px-3 max-w-10/12 mx-auto md:px-0'>
                <HeroSwiper></HeroSwiper>
            </div>
            <main className='max-w-10/12 mx-auto'>
                <h1 className='text-center font-bold md:text-3xl my-10'>Popular Winter Care Services</h1>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        data?.slice(0, 4).map(cats => <Cards key={cats.serviceId} cats={cats} ></Cards>)
                    }
                </section>
                
                <section className='space-x-10'>
                    <section className='flex-1 w-full'>
                        <h1 className='text-center text-3xl font-bold my-10'>Winter Care Tips for Pet</h1>
                        <div className='grid lg:grid-cols-3 gap-2 md:gap-5'>
                            {
                                winterCare.map(care => <WinterCareTips key={care.id} care={care}></WinterCareTips>)
                            }
                        </div>
                    </section>
                    <div className=' border-gray-300 border-b-2 mt-10 mb-5'></div>
                    <section className='flex-1'>
                        <h1 className='text-center text-3xl font-bold mb-5'>Meet Our Expert Vets</h1>
                        <div>
                            <MeetOurExpert></MeetOurExpert>
                        </div>
                    </section>
                </section>
                <div className=' border-gray-300 border-b-2 mt-10 mb-5'></div>
                <section>
                    <Reviews></Reviews>
                </section>
                <section>
                    <FooterTopSection></FooterTopSection>
                </section>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;