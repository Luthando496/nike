import React,{useState} from 'react'
import {FaCartArrowDown,FaTimes} from 'react-icons/fa'
import {SiNike} from 'react-icons/si'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsCart3} from 'react-icons/bs'

const Navbar = () => {
    const [show,setShow] = useState(false)
  return (
    <nav className='w-full bg-white py-4 relative shadow-xl'>
    <div className="w-[90%] mx-auto flex justify-between">
    <SiNike  className="text-[4rem] cursor-pointer font-bold text-amber-700 tracking-[2px]" />

    <ul className="hidden gap-8 items-center md:flex">
        <li>
            <a href="#" className="text-amber-800 text-md capitalize">Home</a>
        </li>
        <li>
            <a href="#" className="text-amber-800 text-md capitalize">About</a>
        </li>
        <li>
            <a href="#" className="text-amber-800 text-md capitalize">Categories</a>
        </li>
        <li>
            <a href="#" className="text-amber-800 text-md capitalize">Contact</a>
        </li>
    </ul>

    <ul className="flex gap-2 items-center">
        <li className="px-4">
            <BsCart3 size={30} className='text-amber-600' />
        </li>


    <li className='md:hidden'>
    {show ? <button className="px-4" onClick={()=> setShow(!show)}>
        <FaTimes size={30} className='text-black' />
    </button> : <button className="px-4" onClick={()=> setShow(!show)}>
        <RxHamburgerMenu size={30} className='text-black' />
    </button>  }
    
        </li>
    </ul>

    <div className={`md:hidden z-50 absolute top-[4.5rem] left-0 w-full h-screen  duration-700 bg-white ${show ? 'translate-x-0' : '-translate-x-[100%]'}`}>
    <ul className="flex flex-col">
        <li className="pl-8  border py-4">
            <a href="#" className="text-xl text-black font-semibold capitalize">home</a>
        </li>
        <li className=" py-4 ">
            <a href="#" className="text-xl  pl-8 text-black font-semibold capitalize">Categories</a>
        </li>
        <li className="pl-8 py-4 border">
            <a href="#" className="text-xl text-black font-semibold capitalize">about</a>
        </li>
        <li className="pl-8 py-4 border-b">
            <a href="#" className="text-xl text-black font-semibold capitalize">contact</a>
        </li>
    </ul>

    </div>




    </div>
    

    </nav>
  )
}

export default Navbar