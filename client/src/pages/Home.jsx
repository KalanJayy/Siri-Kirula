import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <FeaturedSection></FeaturedSection>
        <Banner></Banner>
        <Testimonial></Testimonial>
        <Newsletter></Newsletter>
    </div>
  )
}

export default Home