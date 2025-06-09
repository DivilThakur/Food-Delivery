import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const AboutHead = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return (
        <div className=' my-20 xl:mx-32'>
            <div className='flex flex-col md:flex-row ' >
                <div className='flex-1 p-2 flex justify-center relative ' >
                    <motion.img
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        src={assets.aboutimg3} alt="" className=' md:h-[60%] lg:h-full z-10' />
                </div>
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}

                    className='flex-1 flex flex-col justify-center items-start space-y-5 p-4 mt-4' >
                    <h1 className='shadow-lg uppercase text-sm text-[#f29c52] font-Outfit font-medium px-7 py-3 rounded-full' >About us</h1>
                    <h1 className=' text-3xl md:text-5xl xl:text-6xl text-[#492d13] font-Outfit font-semibold' >We provide 100% halal bakery product.</h1>
                    <div className='flex flex-col space-y-10 mt-4'>
                        <p className='text-zinc-400 leading-loose' >Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Erat velit scelerisque in dictum. Sit amet est placerat in.</p>
                        <p className='text-zinc-400 leading-loose'>Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio.</p>
                    </div>
                    <button onClick={() => navigate("/contact")} className='text-[17px] font-medium items-center mt-10 sm:mt-4  text-white flex gap-5 bg-[#f29c52]
                    px-10 py-4 rounded-full '>Contact Us <MoveRight color='white' size={25} />
                    </button>
                </motion.div>
            </div>
            <div className='flex flex-col gap-10 p-4 md:flex-row xl:gap-20 mt-20 xl:mx-32'>
                <motion.div
                    initial={{ scaleX: 0.5, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='bg-[#fff5ed] p-8 rounded-lg'>
                    <h1 className='text-3xl font-Outfit font-bold text-[#492d13] '>Our Mission</h1>
                    <p className='text-zinc-500 font-Outfit font-normal leading-relaxed mt-3' >Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat.</p>
                </motion.div>
                <motion.div
                    initial={{ scaleX: 0.5, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className='bg-[#fff5ed] p-8 rounded-lg'>
                    <h1 className='text-3xl font-Outfit font-bold text-[#492d13] '>Our Vision</h1>
                    <p className='text-zinc-500 font-Outfit font-normal leading-relaxed mt-3' >Netus et malesuada fames ac turpis. Rhoncus urna neque viverra justo nec ultrices. Donec enim diam vulputate ut pharetra sit amet aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Bibendum enim facilisis gravida neque convallis a cras semper auctor. Congue eu consequat ac felis donec et odio. Cursus turpis massa tincidunt dui ut ornare lectus sit. Facilisi cras fermentum odio eu feugiat.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutHead