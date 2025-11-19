import React, { useEffect } from 'react';
import rating from '../assets/icon-ratings.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
const reviews = [
  {
    id: 1,
    name: "Olivia Bennett",
    comment: "I adopted my Labrador, Max, through this platform and the experience was absolutely heartwarming. The adoption process was smooth, the staff were incredibly supportive, and Max has brought so much joy into our home. I appreciated the detailed pet profiles and the follow-up care tips. It felt like the team genuinely cared about matching pets with the right families.",
    rating: 5
  },
  {
    id: 2,
    name: "Arif Chowdhury",
    comment: "Finding my Persian cat, Luna, was a dream come true. The site made it easy to browse by breed, age, and temperament. What impressed me most was the transparency — I knew her medical history, vaccination status, and even her favorite toys before meeting her. She’s now the queen of our house, and I’m grateful for how easy and safe the process was.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Zhang",
    comment: "As a first-time dog owner, I was nervous about caring for my Beagle, Toby. But this app provided everything — from training guides to health checklists. The vaccination reminders and nutrition tips helped me stay on track. I especially loved the community forum where I could ask questions and get advice from other pet parents. It’s more than an app — it’s a support system.",
    rating: 5
  },
  {
    id: 4,
    name: "Junaid Rahman",
    comment: "I booked grooming services for my Shih Tzu, Coco, and was blown away by the professionalism. The groomer arrived on time, handled Coco with care, and even gave me tips for maintaining her coat between sessions. The booking system was easy to use, and I received updates throughout the process. Coco looked adorable and smelled amazing afterward!",
    rating: 4
  },
  {
    id: 5,
    name: "Emily Davis",
    comment: "The training resources for cats are surprisingly effective. I used the step-by-step videos to help my kitten, Milo, learn litter box habits and basic commands. The app’s gentle approach and positive reinforcement techniques made the process enjoyable for both of us. I never thought training a cat could be this fun and rewarding!",
    rating: 4
  },
  {
    id: 6,
    name: "Mohammad Fahim",
    comment: "This platform helped me connect with a local vet for my German Shepherd, Rocky, when he had a sudden allergy issue. The emergency contact feature and instant appointment booking saved me hours of stress. I also love the pet journal feature where I can log Rocky’s health updates and milestones. It’s a must-have for any responsible pet owner.",
    rating: 5
  }
];


    return (
    <div>
        <h1 className='text-center text-3xl font-bold mb-5'>All reviews</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-10 gap-5'>
            {
                reviews.map(review => (
                    <div key={review?.id} className='p-10 bg-blue-50 rounded-lg' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[18px] font-semibold'>{review?.name}</h1>
                            <div className='flex space-x-2 items-center'>
                                <div>
                                    <img src={rating} alt="" width={'18px'}/>
                                </div>
                                <h1 className='text-[18px] font-semibold'>{review?.rating}</h1>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-400 mt-4 text-justify'>{review?.comment}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    );
};

export default Reviews;