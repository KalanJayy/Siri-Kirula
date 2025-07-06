import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Footer = () => {
  return (
    <motion.div 
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6}} 
    
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
            <motion.div 
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6, delay:0.2}} 
            
            className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor'>
                <div>
                    <motion.img 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.5, delay:0.3}} 
                    src={assets.sirikirulalogo} alt="logo" className='h-8 md:h-9' />
                    <motion.p 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.5, delay:0.4}} 
                    className='max-w-80 mt-3'>
                        At Siri Kirula Private Limited, we craft more than just jewellery — we preserve tradition, celebrate beauty, and deliver timeless elegance. Specializing in both traditional Kandyan and modern luxury designs, our collections are a tribute to Sri Lanka’s rich heritage and evolving style.
Whether you're celebrating a milestone or gifting a memory, <br />Siri Kirula ensures every gem tells a story — your story.
                    </motion.p>
                    <motion.div 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.5, delay:0.5}} 
                    className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} alt="" className='w-5 h-5' /></a>
                        <a href="#"><img src={assets.instagram_logo} alt="" className='w-5 h-5' /></a>
                        <a href="#"><img src={assets.twitter_logo} alt="" className='w-5 h-5' /></a>
                        <a href="#"><img src={assets.gmail_logo} alt="" className='w-5 h-5' /></a>
                     
                    </motion.div>
                </div>
                <motion.div 
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.6, delay:0.4}} 
                className='  w-1/2 gap-8'>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of services</a></li>
                        <li><a href="#">Privacy Police</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </motion.div>
                
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">+94 77 7777 777</a></li>
                        <li><a href="#">test@test.com</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        
                    </ul>
                </div> 
            </motion.div>

            <motion.div 
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.6, delay:0.6}} 
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a> </li>
                    <li> | </li>
                    <li><a href="#">Terms</a></li>
                    <li> | </li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </motion.div>
        </motion.div>
  )
}

export default Footer