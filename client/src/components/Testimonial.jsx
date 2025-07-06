import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonial = () => {

    const testimonials = [
        {   name: "Supun Bandara", 
            address: "Colombo, Sri Lanka", 
            image: assets.testimonial_image_1, 
            testimonial: "Absolutely stunning craftsmanship! I bought a traditional necklace set for my sister’s wedding and everyone kept asking where I got it. The details were flawless."  },
        {
            name: "Raveen Silva", 
            address: "Colombo, Sri Lanka", 
            image: assets.testimonial_image_2, 
            testimonial: "Blown away by the service and quality. Their Kandyan designs feel so authentic, yet modern. It’s the perfect blend of heritage and style"  },
            
        {   name: "Tharidu Adikari", 
            address: "Kandy, Sri Lanka", 
            image: assets.testimonial_image_2, 
            testimonial: "I’ve never felt more confident wearing jewelry. Each piece feels like it was made just for me — elegant, timeless, and truly luxurious."  },
    ];



  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#F5F7FF] pt-20 pb-30">

            <Title title="What our customers say" subtitle=""></Title>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        initial={{opacity:0, y:40}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.6, delay:index*0.2, ease:'easeOut'}}
                        viewport={{once:true, amount:0.3}}
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src="" alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mt-4  ">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon}/>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light ">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial