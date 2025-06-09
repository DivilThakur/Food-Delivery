import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const MobileMenu = () => {

  const { setShowMobileMenu, showMobileMenu, setShowLogin, token } = useContext(AppContext);


  useEffect(() => {
    window.scrollTo(0,0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    }
  }, [])

  const handleShowLogin = () => {
    setShowMobileMenu(false);
    setShowLogin(true);

  }

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-30 backdrop-blur-sm bg-black/50 flex ' >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: showMobileMenu ? "0" : "100%" }}
        transition={{ type: "tween" }}
        className='bg-[#ffebd9] h-screen w-2/3 p-10 flex flex-col relative '>
        <img src={assets.logo} alt="" className='w-32' />
        <div className='mt-10 space-y-10 flex flex-col' >
          <NavLink to={"/"} className='text-xl font-Outfit font-medium text-[#492d13] '>Home</NavLink>
          <NavLink to={"/menu"} className='text-xl font-Outfit font-medium text-[#492d13] '>Menu</NavLink>
          <NavLink to={"/about"} className='text-xl font-Outfit font-medium text-[#492d13] '>About</NavLink>
          <NavLink to={"/contact"} className='text-xl font-Outfit font-medium text-[#492d13] '>Contact</NavLink>
          <NavLink to={"/orders"} className='text-xl font-Outfit font-medium text-[#492d13] '>Orders</NavLink>
        </div>
        <div className='mt-10'>
          <button className='border px-6 py-2 rounded-xl bg-[#f29c52] text-white text-lg font-Outfit font-medium 
                    hover:bg-[#492d13] transition-all duration-200 ' onClick={() => handleShowLogin()} >
            {token ? "Logout" : "Login"}
          </button>
        </div>
        <X onClick={() => setShowMobileMenu(false)} color='#492d13' className='absolute top-2 right-2 hover:rotate-12 transition-all duration-200' />
      </motion.div>
    </div>
  )
}

export default MobileMenu