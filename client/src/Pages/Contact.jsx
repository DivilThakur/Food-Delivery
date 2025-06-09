import React, { useEffect, useState } from 'react'
import DynamicBg from '../components/DynamicBg'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const onChaneHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));

  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  useEffect(() => {
    console.log(formData);

  }, [formData])

  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("Message Sent")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    })
  }

  return (
    <div>
      <DynamicBg title={"Contact Us"} />
      <div>
        <div className='flex flex-col md:flex-row my-32 lg:px-20' >
          <div className='flex-1 p-2 flex justify-center relative ' >
            <motion.img
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={assets.map} alt="" className=' lg:h-full z-10' />
          </div>
          <motion.form onSubmit={handleSendMessage}
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex-1 flex flex-col justify-start items-start space-y-5 p-4 mt-4 sm:px-14 lg:px-0' >
            <h1 className='shadow-lg uppercase text-sm text-[#f29c52] font-Outfit font-medium px-7 py-3 rounded-full' >Contact us</h1>
            <h1 className=' text-3xl md:text-5xl xl:text-6xl text-[#492d13] font-Outfit font-semibold' >How can we help you.</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 grid-rows-5 gap-5  w-full' >
              <input required type="text" name="fullName" onChange={onChaneHandler} value={formData.fullName} placeholder='Full Name:' className='border-[1.5px] outline-[#f29c52] outline-[0.2px] text-sm font-Outfit font-normal border-[#fdf0e5] p-4 row-span-1 rounded-lg' />
              <input required type="text" name='email' onChange={onChaneHandler} value={formData.email} placeholder='Email:' className='border-[1.5px] outline-[#f29c52] outline-[0.2px] text-sm font-Outfit font-normal border-[#fdf0e5] p-4 row-span-1 rounded-lg' />
              <input required type="text" name='phone' onChange={onChaneHandler} value={formData.phone} placeholder='Phone:' className='border-[1.5px] outline-[#f29c52] outline-[0.2px] text-sm font-Outfit font-normal border-[#fdf0e5] p-4 row-span-1 rounded-lg' />
              <input required type="text" name='subject' onChange={onChaneHandler} value={formData.subject} placeholder='Subject:' className='border-[1.5px] outline-[#f29c52] outline-[0.2px] text-sm font-Outfit font-normal border-[#fdf0e5] p-4 row-span-1 rounded-lg' />
              <textarea required name="message" id="" onChange={onChaneHandler} value={formData.message} placeholder='write your message..' className=' p-2 sm:col-span-2 row-span-4 border-[1.5px] outline-[#f29c52] outline-[0.2px] text-sm font-Outfit font-normal border-[#fdf0e5]' ></textarea>
            </div>
            <button type='submit' className='text-[17px] font-medium items-center mt-10 sm:mt-4  text-white flex gap-5 bg-[#f29c52]
                    px-10 py-4 rounded-full outline-none hover:bg-[#492d13] transition-all duration-200 '>Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact