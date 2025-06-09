import React from 'react'
import DynamicBg from '../components/DynamicBg'
import Features from '../components/Features'
import AboutHead from '../components/AboutHead'
import Experts from '../components/Experts'
import { AnimatedTestimonials } from '../components/ui/Animated-Testimonials'
import { testimonials } from '../assets/assets'

const About = () => {
  return (
    <>
      <DynamicBg title={"About Us"} />
      <AboutHead />
      <Features />
      <Experts />
      <div className='' >
        <div className='flex flex-col justify-center items-center space-y-7'>
          <h1 className='font-Outfit font-semibold tracking-wide text-[#f29c52] bg-white px-7 py-3 rounded-full text-sm shadow-lg uppercase
          '>Team members</h1>
          <p className='font-Outfit font-bold text-2xl sm:text-4xl md:text-5xl text-[#492d13]'>Our Expert Chef</p>
        </div>
        <div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </>
  )
}

export default About