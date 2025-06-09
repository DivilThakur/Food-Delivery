import React from 'react'
import { assets, chef, food_list } from '../assets/assets'
import { motion } from 'framer-motion'

const Experts = () => {
    return (
        <div className='bg-gradient-to-b min-h-screen from-[#fff5ed] to-white py-10 lg:pt-24 relative'>
            <img src={assets.absolute1} alt="" className='absolute -top-12 -left-7 lg:top-20 lg:left-0  z-0' />
            <img src={assets.absolute2} alt="" className='absolute  bottom-0 right-0 z-0' />
            <div
                className='flex flex-col justify-center items-center lg:space-y-10  lg:pt-20'>
                <h1 className='font-Outfit font-semibold tracking-wide text-[#f29c52] bg-white
              px-7 py-3 rounded-full text-sm shadow-lg uppercase
            '>Team members</h1>
                <p className='font-Outfit font-bold text-2xl sm:text-4xl md:text-5xl text-[#492d13]'>Our Expert Chef</p>
            </div>
            <div className='grid grid-cols-2 z-10 sm:grid-cols-3 lg:grid-cols-4 p-10 gap-10 xl:mx-40 sm:mt-5 lg:mt-20'>
                {chef.map((item,i) => (
                    <motion.div key={i}
                    initial={{scaleX:0,opacity:0}}
                    whileInView={{scaleX:1,opacity:1}}
                    transition={{duration:0.5,delay:i*0.2}}
                    viewport={{once:true}}
                    className='bg-white flex flex-col p-4 rounded-lg'
                    >
                        <img src={item.img} alt=""
                            className='' />
                        <div
                            className='flex flex-col justify-center items-center mt-4  ' >
                            <h1 className='text-[#492d13] font-Outfit font-semibold  sm:text-xl text-center'>{item.name}</h1>
                            <h1 className='text-[#f29c52] text-xs sm:text-lg font-Outfit font-medium'>{item.position}</h1>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Experts