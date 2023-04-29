import React,{useState} from 'react'
import {FaCartArrowDown,FaTimes,FaHamburger, FaAndroid} from 'react-icons/fa'

const Navbar = () => {
    const [show,setShow] = useState(false)
  return (
    <nav className='w-full bg-white py-4 relative shadow-xl'>
    <div className="w-[90%] mx-auto flex justify-between">
    <h1 className="text-4xl font-light text-sky-700 tracking-[2px]">NIKE</h1>

    <ul className="hidden gap-8 items-center md:flex">
        <li>
            <a href="#" className="text-sky-800 text-md capitalize">Home</a>
        </li>
        <li>
            <a href="#" className="text-sky-800 text-md capitalize">About</a>
        </li>
        <li>
            <a href="#" className="text-sky-800 text-md capitalize">Categories</a>
        </li>
        <li>
            <a href="#" className="text-sky-800 text-md capitalize">Contact</a>
        </li>
    </ul>

    <ul className="flex gap-2 items-center">
        <li className="px-4">
            <FaCartArrowDown size={30} className='text-black' />
        </li>


    <li className='md:hidden'>
    {show ? <button className="px-4" onClick={()=> setShow(!show)}>
        <FaTimes size={30} className='text-black' />
    </button> : <button className="px-4" onClick={()=> setShow(!show)}>
        <FaAndroid size={30} className='text-black' />
    </button>  }
    
        </li>
    </ul>

    <div className={`md:hidden absolute top-[3.5rem] left-0 w-full h-screen  duration-700 bg-white ${show ? 'translate-x-0' : '-translate-x-[100%]'}`}>
    <ul className="flex flex-col">
        <li className="pl-8  border py-4">
            <a href="#" className="text-xl text-black font-semibold capitalize">home</a>
        </li>
        <li className=" py-4 ">
            <a href="#" className="text-xl  pl-8 text-black font-semibold capitalize">Categories</a>
            {/* <ul className="w-full mt-8 flex bg-black flex-col">
                <li className="pl-8  border py-4">
                    <a href="#" className="text-xl text-white font-semibold capitalize">Men</a>
                 </li>
                 <li className="pl-8  border py-4">
                    <a href="#" className="text-xl text-white font-semibold capitalize">Women</a>
                 </li>
                 <li className="pl-8  border py-4">
                    <a href="#" className="text-xl text-white font-semibold capitalize">Sneakers</a>
                 </li>
            </ul> */}
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