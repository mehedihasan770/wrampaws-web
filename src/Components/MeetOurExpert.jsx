import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const vets = [
  {
    name: "Dr. Rumi Akter",
    experience: "8+ years experience",
    specialization: "Canine nutrition & dermatology expert.",
    emoji: "🩺",
  },
  {
    name: "Dr. Arif Hossain",
    experience: "10+ years experience",
    specialization: "Surgical specialist & emergency care.",
    emoji: "🔬",
  },
  {
    name: "Dr. Nusrat Jahan",
    experience: "7+ years experience",
    specialization: "Feline behavior & nutrition expert.",
    emoji: "🐱",
  },
  {
    name: "Dr. Tanvir Alam",
    experience: "12+ years experience",
    specialization: "Exotic pets & avian care specialist.",
    emoji: "🦜",
  },
];

const MeetOurExpert = () => {
    useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);
    return (
    <div className='grid md:grid-cols-2 gap-5'>
        {vets.map((vet, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-center"
        >
          <div className="text-5xl mb-4">{vet.emoji}</div>
          <h2 className="text-2xl font-bold mb-2">{vet.name}</h2>
          <p className="text-gray-700 mb-2">{vet.experience}</p>
          <p className="text-gray-600 mb-4 text-sm">{vet.specialization}</p>
          
        </div>
      ))}
    </div>
    );
};

export default MeetOurExpert;