import React, { useState } from 'react'
import logo from '../assets/my-dev-logo.png'
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import useMediaQuery from './MediaQuery';

export const Header = () => {
    const [navOpen, setIsNavOpen] = useState(false);
    // const [navToggle, setNavToggle] = useState(false);
    const isTablet = useMediaQuery("(max-width: 1000px)")

return (
    <header className='fixed w-full z-1000'>
        <nav className='flex z-1000 m-auto justify-between relative rounded-r-full items-center sm:px-10 px-4 py-4 sm:mx-8 my-2 mx-4 sm:mt-6 mt-3 h-auto bg-white/2 text-black backdrop-blur-lg border-[0.1px] border-white/20'>
            <div>
                <Link to='/'>
                    <img className='w-26' src={logo} alt="website logo" />
                </Link>
            </div>
            <ul className={navOpen && isTablet ? 'flex z-10000 flex-row gap-12 max-md:block w-full absolute top-16 left-0 rounded-r-full  p-2 font-semibold backdrop-blur-lg border-[0.1px] bg-white/2 border-white/30' : 'flex gap-8 max-md:hidden z-10000  font-semibold'}>
                <li className=' text-gray-200 hover:text-orange-500'><a href="#project">Projects</a></li>
                <li className=' text-gray-200 hover:text-orange-500'><a href="#skills">Skills</a></li>
                <li className='text-gray-200 hover:text-orange-500'><a href='#contact' to="">Contact</a></li>
            </ul>
            {navOpen ? <RxCross2 className='hidden max-md:block stroke-1 stroke-orange-500 size-8' onClick={()=> {navOpen ? setIsNavOpen(false) : setIsNavOpen(true)}} />
                :
                <MdMenu className='hidden max-md:block fill-orange-500 size-8' onClick={()=> {navOpen ? setIsNavOpen(false) : setIsNavOpen(true)}}/>
            }
        </nav>
    </header>
)
}
