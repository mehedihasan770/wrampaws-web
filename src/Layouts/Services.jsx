import { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useLoaderData } from 'react-router';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';
import { useLoading } from '../Components/LoadingHok';
import Loading from '../Components/Loading';

const Services = () => {
    const data = useLoaderData();
    const { lod } = useLoading();
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState("asc");
    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        const sorted = [...data].sort((a, b) => {
            return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
        });
        setSortedData(sorted);
    };
    if (lod) {
        return <Loading />;
    }
    return (
        <div>
            <header className='sticky top-2 z-50'>
                <Navbar />
            </header>
            <main className='max-w-10/12 mx-auto'>
                <h1 className='text-center font-bold md:text-3xl my-10'>All Winter Care Services</h1>
                <div className='text-center mb-5'>
                    <select value={sortOrder} onChange={handleSortChange} className="select select-accent">
                        <option value="asc">Ascending By Rating</option>
                        <option value="desc">Descending By Rating</option>
                    </select>
                </div>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {sortedData.map(cats => <Cards key={cats.serviceId} cats={cats} />)}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};
export default Services;