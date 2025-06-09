import React from 'react'
import { assets } from '../assets/assets'
import { Flex } from '@radix-ui/themes/dist/cjs/index.js'
import { MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Heading = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-[#fff5ed] bg-hero-bg'>
            <Flex className=' bg-center xl:h-[90vh] flex flex-col sm:flex-row '>
                <Flex className=' flex flex-col gap-3 items-start p-10 sm:ms-20 xl:ms-48 justify-center flex-1  relative'>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className=' text-xl lg:text-3xl font-Outfit font-medium text-[#f29c52]'>Get 80% discount</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='  text-6xl sm:text-7xl md:text-[90px] lg:text-[140px] leading-none font-Outfit font-bold text-[#492d13] '> Order In, Enjoy Fresh
                    </motion.h1>
                    <motion.button
                        initial={{opacity:0 , y:100}}
                        animate={{ opacity: 1, y:0}}
                        transition={{ duration: 0.7  }}
                        whileHover={{background:'#492d13'}}
                        onClick={()=>navigate("/menu")}
                        className='text-[17px] font-medium items-center mt-10 sm:mt-4  text-white flex gap-5 bg-[#f29c52]
                      px-10 py-4 rounded-full '>Shop now <MoveRight color='white' size={25} />
                    </motion.button>
                    <motion.img
                        initial={{rotate:360,opacity:0.5}}
                        animate={{rotate:0,opacity:1}}
                        transition={{ duration: 0.6, delay:0.2 }}
                     src={assets.hero_wave} alt="" className='absolute -right-5 xl:right-5 z-0 hidden lg:block' />
                </Flex>
                <div className='flex-1 flex items-center justify-start'>
                    <motion.img
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        src={assets.hero_image} className='p-5  lg:h-[70%] aspect-square' alt="" />
                </div>
            </Flex>
        </div>
    )
}

export default Heading