import React from 'react'
import { promo } from '../assets/assets'
import { motion } from 'framer-motion'

const Features = () => {
    return (
        <div>
            <div className='bg-[#f29c52] grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 py-16  justify-center items-center '>
                {
                    promo.map((item, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='text-white flex flex-col sm:flex-row mx-5 xl:mx-20 justify-center items-start sm:items-center gap-3'>
                            <motion.div
                                initial={{ opacity: 0.8, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: 0.2 * i }}
                                className='border-none rounded-full outline-2 outline-dashed  p-2'>
                                <img src={item.img} alt="" className='border sm:w-36 p-2 rounded-full bg-white' />
                            </motion.div>

                            <div className='space-y-3'>
                                <h1 className='font-Outfit font-semibold text-2xl'>{item.heading}</h1>
                                <p className='font-Outfit font-medium text-lg '>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Features