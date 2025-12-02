import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { MdMarkEmailUnread, MdPets } from "react-icons/md";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='shadow-[0_-4px_10px_rgba(0,0,0,0.1)] mt-5 py-10'>
        <div className='max-w-10/12 mx-auto border-2 border-gray-300 bg-[#EEF2FF] dark:bg-[#1E2939] rounded-3xl p-8 shadow-md'>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <div className="flex items-center">
                        <MdPets className="md:text-2xl text-[20px] font-bold text-[#422AD5]"/>
                        <a className="md:text-2xl text-[20px] font-bold text-[#422AD5]">WarmPaws</a>
                    </div>
                    <p className='max-w-96 mt-5 mb-5 text-gray-400'>Trusted Wrampaws services—pet care, grooming, nutrition & more. Safe, professional, and loving support for your pets. Contact us anytime.</p>
                    <div className='flex space-x-3 items-center'>
                        <Link to={'https://www.linkedin.com/in/mehedihasantrbd'} href="" className='text-gray-600'><FaLinkedin size={25}/></Link>
                        <Link to={'https://github.com/mehedihasan770'} href="" className='text-gray-600'><FaGithub size={25}/></Link>
                    </div>
                </div>
                    <div>
                        <h1 className='font-bold md:mt-0 mt-4'>Contact Information</h1>
                        <ul className='text-gray-400 space-y-2 mt-5'>
                            <li><p className='hover:underline' href=""><FaPhone color='gray' className='inline-block mr-1'/>+880 1712345678</p></li>
                            <li><p className='hover:underline' href=""><MdMarkEmailUnread className='inline-block mr-1'/>support@gmail.com</p></li>
                            <li><p className='hover:underline' href=""><MdMarkEmailUnread className='inline-block mr-1'/>home_hero@gmail.com</p></li>
                        </ul>
                    </div>
            </div>
            <div className='border-t-2 border-gray-300 mt-5'>
                <div className='mt-4 text-gray-400 flex justify-between lg:flex-row flex-col-reverse'>
                    <h1>© 2025 Warm Paws. All rights reserved.</h1>
                    <div className='flex'>
                        <p className='underline mr-4'>Privacy Policy</p>
                        <p className='underline'>Terms of Service</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;