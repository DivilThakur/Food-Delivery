import React from 'react'
import { blog } from '../assets/assets'
import { motion } from 'framer-motion'

const NewsArticles = () => {
    return (
        <div className='bg-gradient-to-b from-[#fff5ed] to-white pt-28 min-h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='bg-white px-4 py-1 md:px-8 md:py-3 rounded-full text-sm font-Outfit font-medium
                     uppercase text-[#f29c52] shadow-lg'>
                    Latest blog post
                </h1>
                <h1 className=' text-2xl lg:text-6xl font-Outfit font-bold my-4 text-[#492d13]'>
                    Latest News & Article
                </h1>
            </div>
            <div className='flex flex-col md:flex-row lg:my-20 items-center justify-center p-5 lg:mx-28 gap-10'>
                {
                    blog.map((item,i)=>(
                        <motion.div key={i}
                            initial={{opacity:0,scaleX:i%2==0? 0 :"" }}
                            whileInView={{opacity:1,scaleX:1}}
                            
                            transition={{duration:0.6,delay: i*0.3}}
                            viewport={{once:true,amount:0.6}}
                        className='bg-gradient-to-t from-[#f8e1cd] to-[#fff5ed] rounded-lg p-4  space-y-7 '>
                            <img src={item.img} alt="" className='rounded-lg border-none w-full' />
                            <div className='space-y-3 w-3/4'>
                                <span className='text-[#f29c52] font-Outfit font-semibold'>{item.date}</span>
                                <p className='text-[#492d13] text-2xl font-semibold '>{item.heading}</p>
                            </div>
                            <button className='text-[#492d13] text-lg font-Outfit font-semibold border-2 border-[#f29c52] px-6 py-3
                                hover:bg-[#f29c52] hover:text-white transition-all duration-200 delay-75 
                            '>
                                Read More
                            </button>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewsArticles