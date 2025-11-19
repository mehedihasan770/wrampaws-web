import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog2.jpg'
import dog3 from '../assets/dog3.jpg'
import dog4 from '../assets/cate.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MeetOurExpert = () => {
    useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);
    return (
    <div className='grid md:grid-cols-2 gap-5'>
        <div className='shadow-2xl p-5 bg-blue-50 rounded-xl'data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div>
                <img className='rounded-xl' src={dog1} alt="" />
            </div>
            <div className='text-gray-500 mt-3'>
                <h2><span className='font-bold text-black'>Name:</span> Dr. Rumi Akter</h2>
                <h2><span className='font-bold text-black'>Experience:</span> 8+ years</h2>
                <p>Specializes in canine nutrition, dermatological care, and seasonal allergy management. Known for crafting personalized diet plans for dogs with sensitive stomachs and skin conditions.</p>
            </div>
            <button className='btn btn-primary mt-2'>Meet Now</button>
        </div>
        <div className='shadow-2xl p-5 bg-blue-50 rounded-xl'data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div>
                <img className='rounded-xl' src={dog2} alt="" />
            </div>
            <div className='text-gray-500 mt-3'>
                <h2><span className='font-bold text-black'>Name:</span> Dr. Tanvir Hasan</h2>
                <h2><span className='font-bold text-black'>Experience:</span> 10+ years</h2>
                <p>Expert in exotic pet surgery and post-operative rehabilitation. Has handled complex procedures for reptiles, birds, and small mammals with a focus on minimizing trauma and ensuring fast recovery.</p>
            </div>
            <button className='btn btn-primary mt-2'>Meet Now</button>
        </div>
        <div className='shadow-2xl p-5 bg-blue-50 rounded-xl'data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div>
                <img className='rounded-xl' src={dog3} alt="" />
            </div>
            <div className='text-gray-500 mt-3'>
                <h2><span className='font-bold text-black'>Name:</span> Dr. Shaila Rahman</h2>
                <h2><span className='font-bold text-black'>Experience:</span> 6+ years</h2>
                <p>Focused on feline behavioral therapy, grooming techniques, and stress reduction strategies. Helps cat owners understand mood patterns and build stronger emotional bonds with their pets.</p>
            </div>
            <button className='btn btn-primary mt-2'>Meet Now</button>
        </div>
        <div className='shadow-2xl p-5 bg-blue-50 rounded-xl'data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div>
                <img className='rounded-xl' src={dog4} alt="" />
            </div>
            <div className='text-gray-500 mt-3'>
                <h2><span className='font-bold text-black'>Name:</span> Dr. Rumi Akter</h2>
                <h2><span className='font-bold text-black'>Experience:</span> 3+ years</h2>
                <p>Veterinary emergency specialist with deep experience in trauma response, vaccination protocols, and infectious disease control. Leads community outreach programs for pet health awareness in rural areas.</p>
            </div>
            <button className='btn btn-primary mt-2'>Meet Now</button>
        </div>
    </div>
    );
};

export default MeetOurExpert;