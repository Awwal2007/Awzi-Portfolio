import React, {useEffect, useRef, useState} from 'react'
import { Header } from '../components/Header'
import useCountUp from '../components/useCountUp';
import {toast} from 'sonner'

import logo from '../assets/my-dev-logo-icon.png'
import eatEasy from '../assets/eat-easy.png'

import { HiReply } from "react-icons/hi";
import { PiCodeBold } from "react-icons/pi";
import { IoServerSharp } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";
import AnimatedSection from '../components/AnimatedSection';
import { SkillsMarquee } from '../components/SkillsMarquee';
import { FaArrowDown, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Home = () => {
    
const statsRef = useRef();
const [statsVisible, setStatsVisible] = useState(false);
const [isLoading, setIsLoading] = useState(false)
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
})
// const [data, setData] = useState({})

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStatsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => observer.disconnect();
}, []);
const count = useCountUp(statsVisible, 100, 40);

const sendMessage = async(e)=>{
    setIsLoading(true)
    e.preventDefault()
    const baseUrl = import.meta.env.VITE_BASE_URL
    try {
        const res = await fetch(`${baseUrl}/message/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        if(!res.ok){
            toast.error('send failed')
        }else{
            const data = await res.json()
            if(data.status === 'success'){
                toast.success(data.message)
            }
            
        }
        console.log(formData);
        // console.log(res);
        
    } catch (error) {
        console.log(error);        
    } finally{
        setIsLoading(false);
    }
}

// console.log(formData);


const handleInput = (e) =>{
    const {name, value} = e.target
    setFormData(prev=>({...prev, [name]: value}))
}

return (
    <>
        <Header />

        {/* Hero */}
        <AnimatedSection>
            <section className='sm:px-10 sm:pt-50 pt-40 px-6'>
                <h1 className=' sm:text-6xl text-4xl font-bold text-center text-gray-200'>Hi, I'm Awzi</h1>
                <div className='flex justify-center mt-10'>
                    <img className='sm:w-50 w-40' src={logo} alt="Developer Logo" />
                </div>
                <div className='flex justify-center'>
                    <p className='text-center max-w-200 mt-10 text-gray-200'>I’m a full-stack web developer and designer with a strong focus on creating clean, functional, and visually engaging digital experiences. I’m committed to continually improving my skills and delivering high-quality work.</p>
                </div>
                <div className='flex justify-center mt-10 text-gray-200'>                
                    <a href="#contact" className='animate-pulse flex px-5 py-1 bg-orange-500 rounded-r-xl justify-center items-center gap-3'>
                        Hire Me
                        <HiReply />
                    </a>
                </div>
            </section>
        </AnimatedSection>

        {/* My Expertise */}
        <AnimatedSection>
            <section className='sm:px-10 sm:pt-50 pt-40 px-6'>
                <h1 className='text-4xl font-semibold text-gray-200 text-center'>My Expertise</h1>
                <p className='text-center text-xl text-gray-400 mt-5'>I’m highly skilled in each of the following areas</p>
                <div className='grid grid-cols-3 max-md:grid-cols-1 max-xm:grid-cols-2 align-center gap-8 items-center mt-10'>
                    <div className='group flex flex-col items-center transition-all ease-in-out justify-center w-full md:h-60 py-6 px-4 rounded-r-xl hover:shadow-md hover:shadow-gray-100/20 hover:scale-101 bg-black border-[0.2px] border-solid border-white/20'>
                        <PiCodeBold className='fill-orange-500 size-18 mb-5' />
                        <h3 className='text-xl font-bold mb-4 text-gray-200 group-hover:text-orange-500 text-center'>Frontend Development</h3>
                        <p className='text-center text-gray-400'>I create responsive, user-friendly interfaces using React, Next.js, and Tailwind CSS.</p>
                    </div>

                    <div className='group flex flex-col items-center transition-all ease-in-out justify-center w-full md:h-60 py-6  px-4 rounded-r-xl hover:shadow-md hover:shadow-gray-100/20 hover:scale-101 bg-black border-[0.2px] border-solid border-white/20'>
                        <FaPenNib className='fill-orange-500 size-14 mb-5' />
                        <h3 className='text-xl font-bold mb-4 text-gray-200 text-center group-hover:text-orange-500'>Figma Design</h3>
                        <p className='text-center text-gray-400'>I apply UI/UX principles to design clean, intuitive, and visually consistent experiences.</p>
                    </div>

                    <div className='group flex flex-col items-center transition-all ease-in-out justify-center w-full md:h-60 py-6 px-4 rounded-r-xl hover:shadow-md hover:shadow-gray-100/20 hover:scale-101 bg-black border-[0.2px] border-solid border-white/20'>
                        <IoServerSharp className='fill-orange-500 size-14 mb-5' />
                        <h3 className='text-xl font-bold mb-4 text-gray-200 text-center group-hover:text-orange-500'>Backend Development</h3>
                        <p className='text-center text-gray-400'>I build reliable server-side logic and work with APIs, databases, and authentication with node.js, mongodb, firebase etc.</p>
                    </div>
                    
                </div>
            </section>
        </AnimatedSection>

        {/* Expirience */}
        <AnimatedSection>
            <section ref={statsRef} className='flex gap-20 flex-wrap-reverse md:flex-nowrap justify-between bg-neutral-900 sm:px-10 sm:mt-50 mt-20 py-20 px-6'>
                <div className='flex justify-center items-center gap-10 md:gap-30 w-full'>
                    <div>
                        <div className='animate-pulse  text-orange-500 text-3xl font-bold mb-5'>7+</div>
                        <p className='text-gray-400 max-w-20'>Years of experience.</p>
                    </div>
                    <div>
                        <div className='animate-pulse  text-orange-500 text-3xl font-bold mb-5'>{count}+</div>
                        <p className='text-gray-400 max-w-20'>Satisfied Clients</p>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='text-gray-400 mb-5'>Challenging work</p>
                    <div className='text-gray-200 text-2xl font-semibold'>
                        I enjoy tackling challenges and exploring things I don’t yet know, as it helps me learn and grow more effectively.
                    </div>
                    <p></p>
                </div>
            </section>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection>
            <section id='skills' className='sm:px-10 py-8 px-6'>
                <div className='text-4xl font-semibold text-gray-200 text-center sm:mt-20 '>My Skills</div>
                <p className='text-center text-xl text-gray-400 mt-5'>Here are the skills I bring to the table</p>
                <SkillsMarquee />
            </section>
        </AnimatedSection>

        {/* Project */}
        <AnimatedSection>
            <section id='project' className='sm:px-10 sm:mt-20 py-20 px-6'>
                <div className='text-4xl font-semibold text-gray-200 text-center'>Project</div>
                <p className='text-center text-xl text-gray-400 mt-5'>Here are my previous projects</p>
                <div className='grid grid-cols-1 xm:grid-cols-3 md:grid-cols-2 gap-14 justify-center items-center mt-15'>
                    <div className='w-full flex flex-col hover:scale-105 transition-all ease-in-out'>
                        <a href="https://eat-easy-frontend.vercel.app/" target='blank' rel="noopener noreferrer">
                            <div className=' border-[0.2px] border-solid border-white/20 rounded-r-xl'>
                                <img className='' src={eatEasy} alt="product image" />
                            </div>

                            <div>
                                <div className='text-3xl font-semibold mt-4'>Ecommerce Website</div>
                                <div className='mt-4 text-gray-400'>Made with:</div>
                                <div className='flex flex-wrap gap-4 mt-4'>
                                    <span className='px-4 rounded-r-full bg-orange-500'>React Js</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Taiwind Css</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Javascript</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Taiwind Css</span>
                                    
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='w-full flex flex-col hover:scale-105 transition-all ease-in-out'>
                        <a href="https://eat-easy-frontend.vercel.app/" target='blank' rel="noopener noreferrer">
                            <div className=' border-[0.2px] border-solid border-white/20 rounded-r-xl'>
                                <img className='' src={eatEasy} alt="product image" />
                            </div>

                            <div>
                                <div className='text-3xl font-semibold mt-4'>Ecommerce Website</div>
                                <div className='mt-4 text-gray-400'>Made with:</div>
                                <div className='flex flex-wrap gap-4 mt-4'>
                                    <span className='px-4 rounded-r-full bg-orange-500'>React Js</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Taiwind Css</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Javascript</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Taiwind Css</span>
                                    
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='w-full flex flex-col hover:scale-105 transition-all ease-in-out'>
                        <a href="https://eat-easy-frontend.vercel.app/" target='blank' rel="noopener noreferrer">
                            <div className=' border-[0.2px] border-solid border-white/20 rounded-r-xl'>
                                <img className='' src={eatEasy} alt="product image" />
                            </div>

                            <div>
                                <div className='text-3xl font-semibold mt-4'>Ecommerce Website</div>
                                <div className='mt-4 text-gray-400'>Made with:</div>
                                <div className='flex flex-wrap gap-4 mt-4'>
                                    <span className='px-4 rounded-r-full bg-orange-500'>React Js</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Taiwind Css</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Javascript</span>
                                    <span className='px-4 rounded-r-full bg-orange-500'>Taiwind Css</span>
                                    
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </AnimatedSection>


        {/* Contact */}
        <AnimatedSection>
            <section id='contact' className='sm:px-10 sm:mt-20 py-20 px-6'>
                <div className='text-4xl font-semibold text-gray-200 text-center mb-20'>Contact</div>
                {/* <p className='text-center text-xl text-gray-400 mt-5'>Here are my previous projects</p> */}
                <div className='flex gap-24 justify-between items-center flex-wrap-reverse md:flex-nowrap'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <div className='text-left text-gray-400'>contact me on</div>
                        <div className='mb-14 text-3xl font-bold text-gray-200 text-center'>Social Media</div>
                        <div className='flex items-center mb-14'>
                            <FaArrowDown />
                        </div>
                        <div className='flex gap-6'>
                            <a href="https://github.com/Awwal2007" target='blank' rel="noopener noreferrer">
                                <FaGithub className='text-5xl text-gray-200 hover:text-orange-500 hover:scale-115 transition-all ease-in-out' />
                            </a>
                            <a href="https://github.com/Awwal2007" target='blank' rel="noopener noreferrer">
                                <FaInstagram className='text-5xl text-gray-200 hover:text-orange-500 hover:scale-115 transition-all ease-in-out' />
                            </a>
                            <a href="https://github.com/Awwal2007" target='blank' rel="noopener noreferrer">
                                <FaLinkedin className='text-5xl text-gray-200 hover:text-orange-500 hover:scale-115 transition-all ease-in-out' />
                            </a>
                            <a href="https://wa.me/2349037118808" target='blank' rel="noopener noreferrer">
                                <FaWhatsapp className='text-5xl text-gray-200 hover:text-orange-500 hover:scale-115 transition-all ease-in-out' />
                            </a>
                        </div>
                    </div>

                    <div className='w-full'>
                        <form onSubmit={sendMessage} action='' className='flex flex-col gap-6'>
                            <label className='flex flex-col text-gray-200' htmlFor="name">
                                Name:
                                <input name='name' onChange={handleInput} required className='border h-14  text-gray-400 px-4 py-2 rounded-r-xl' type="text" />
                            </label>
                            <label className='flex flex-col text-gray-200' htmlFor="email">
                                Email:
                                <input name='email' onChange={handleInput} required className='peer border h-14 text-gray-400 px-4 py-2 rounded-r-xl' type="email" />
                                <p className='invisible peer-required:checked::visible text-red-600'>invalid input</p>
                            </label>
                            <label className='flex flex-col text-gray-200' htmlFor="message">
                                Message:
                                <textarea name='message' onChange={handleInput} required className='border h-34 text-gray-400 px-4 py-2 rounded-r-xl' type="text" />
                            </label>
                            <div className='flex justify-center'>
                                <button disabled={isLoading} type='submit' className='animate-pulse flex px-5 py-1 cursor-pointer bg-orange-500 rounded-r-xl justify-center items-center gap-3 disabled:cursor-not-allowed'>
                                    {isLoading && (
                                        <svg 
                                            className="animate-spin h-5 w-5 text-white" 
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12" cy="12" r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>
                                    )}
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </AnimatedSection>
        
    </>
  )
}
