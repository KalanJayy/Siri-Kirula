import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
  return (
    <motion.div 
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.6}}
    className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#400a0a] to-[#704040] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Timeless Elegance, Crafted to Perfection</h2>
            <p className='mt-3 text-gray-300'>Discover handcrafted luxury jewellery that blends tradition with modern artistry.
    From Kandyan styles to contemporary classics — made with love in Sri Lanka.</p>
            <div className='flex'>
              <img src={assets.location_icon} alt="location" className='m-2 mt-5 h-5' />
              <p className='max-w-130 text-gray-400 mt-5'>Outlets in Kiribathgoda & Pilimathalawa</p>
            </div>

            <motion.button 
              whileHover={{scale:1.05}}
              whileTap={{scale:0.95}}
            className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer hidden'>
                List Your Car    
            </motion.button>

        </div>

        <motion.img  
          initial={{opacity:0, x:50}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.4}}
        src={assets.sample} alt="Bride" className='max-h-45 ' />
    </motion.div>
  )
}

export default Banner