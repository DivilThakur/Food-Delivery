import React from 'react'
import { Link } from 'react-router-dom'
const DynamicBg = ({ title }) => {
    return (
        <div className=''>
            <div className='bg-hero-bg bg-[#fff5ed] min-h-[50vh] flex justify-center items-center relative'>
                <h1 className='font-Outfit font-bold text-4xl md:text-8xl text-[#492d13]' >{title}</h1>
                <div className='absolute -bottom-5'>
                    <p className='text-white font-Outfit text-lg bg-[#f29c52] px-4 py-2 rounded-full 
                    ' > <Link to="/" className='cursor-pointer hover:underline' > Home</Link> // {title}</p>
                </div>
            </div>
        </div>
    )
}

export default DynamicBg