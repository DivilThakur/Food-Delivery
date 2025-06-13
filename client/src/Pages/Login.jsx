import { X } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
    const { setShowLogin, showLogin, backendUrl, setToken } = useContext(AppContext);
    const [formType, setFormType] = useState("Log In");
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    useEffect(()=>{
        console.log(formData);

    },[formData]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        }
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name == "name" && /\d/.test(value)) {
            toast.error("invalid character")
            return;
        }

        setFormData((data) => ({ ...data, [name]: value }))
    }

    let newUrl = backendUrl;
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (formType === "Log In") {
                newUrl = backendUrl + "/api/user/login";
            } else {
                newUrl = backendUrl + "/api/user/register";
            }

            const { data } = await axios.post(newUrl, formData)

            if (data.success) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                localStorage.setItem("userName", data.user);
                setShowLogin(false)
                toast.success(data.message);
                setFormData({
                    name: "",
                    email: "",
                    password: ""
                })
            } else {
                toast.error(data.message);
                setFormData({
                    name: "",
                    email: "",
                    password: ""
                })
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className=' absolute  flex justify-center items-center max-h-screen backdrop-blur-md bg-black/85 z-30 top-0 bottom-0 left-0 right-0' >
            <motion.form onSubmit={handleFormSubmit}
                initial={{ y: "100%" }}
                animate={{ y: showLogin ? "0" : "100%" }}
                transition={{ type: "spring", stiffness: 150 }}

                className='flex flex-col bg-white min-w-[30%] relative  p-10 rounded-lg'>
                <X onClick={() => setShowLogin(false)} color='#492d13' className='absolute right-5 top-5 cursor-pointer hover:rotate-12 transition-all duration-200' />
                <div className='flex p-4 gap-2 text-lg'>
                    <p onClick={() => setFormType("Log In")} className={`text-2xl ${formType === "Log In" ? "text-[#f29c52]" : "text-[#492d13]"}  font-Outfit font-semibold cursor-pointer`} >Login</p>
                    <span className='text-2xl text-[#492d13]'> - </span>
                    <p onClick={() => setFormType("Register")} className={`text-2xl ${formType === "Register" ? "text-[#f29c52]" : "text-[#492d13]"} font-Outfit font-semibold cursor-pointer`}>Register</p>
                </div>
                <div className='flex flex-col justify-center items-center mt-5  space-y-5' >
                    {
                        formType === "Register" &&
                        <input type="text" value={formData.name} name='name' onChange={onChangeHandler} placeholder='Full name' className='border p-3 w-full text-zinc-500 rounded-full  outline-[#f29c52]' disabled={isLoading} />
                    }
                    <input type="text" value={formData.email} name='email' onChange={onChangeHandler} placeholder='Email address' className='border p-3 w-full text-zinc-500 rounded-full outline-[#f29c52]' disabled={isLoading} />
                    <input type="text" value={formData.password} name='password' onChange={onChangeHandler} placeholder='Password' className='border p-3 w-full text-zinc-500 rounded-full outline-[#f29c52] ' disabled={isLoading} />
                </div>
                <div className='mt-4 p-2'>
                    <button 
                        type='submit' 
                        disabled={isLoading}
                        className='border px-6 py-3 rounded-xl bg-[#f29c52] text-white text-lg font-Outfit font-medium 
                        hover:bg-[#492d13] transition-all duration-200 flex items-center justify-center gap-2 min-w-[100px] disabled:opacity-70 disabled:cursor-not-allowed' 
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span>Loading...</span>
                            </>
                        ) : (
                            formType === "Log In" ? "Go" : "Sign Up"
                        )}
                    </button>
                </div>

            </motion.form>
        </div>
    )
}

export default Login