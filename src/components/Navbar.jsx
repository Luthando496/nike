import React,{useState} from 'react'
import {FaCartArrowDown,FaTimes} from 'react-icons/fa'
import {SiNike} from 'react-icons/si'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {BsCart3} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'





const Navbar = () => {
    const [show,setShow] = useState(false);
    const [cate,setCate]= useState(false);
    const navigate = useNavigate();
    const [cart,setCart]= useState(false);
    const {products} = useSelector(state => state.cart);

    const ClickAbout=()=>{
        navigate('/about')
        setShow(!show)
    }
    const ClickHome=()=>{
        navigate('/')
        setShow(!show)
    }

  return (
    <nav className='w-full bg-white py-4 relative shadow-xl'>
    <div className="w-[90%] mx-auto flex justify-between">

    <Link to='/'>
    <SiNike  className="text-[4rem] cursor-pointer font-bold text-amber-700 tracking-[2px]" />
    </Link>

    <ul className="hidden gap-12 items-center md:flex">
        <li>
            <Link to="/" className="text-amber-800 text-xl capitalize">Home</Link>
        </li>
        <li>
            <Link to="/about" className="text-amber-800 text-xl capitalize">About</Link>
        </li>
        <li className='relative cate cursor-pointer'  onClick={()=> setCate(!cate)}>
            <span className="text-amber-800 text-xl capitalize flex items-center gap-6">Categories
             <IoIosArrowDown size={20} className='self-end' /></span>

           {cate && <ul className="w-[300px] z-50 cate-show bg-black shadow-2xl rounded-xl absolute top-7 flex flex-col">
            <li className='hover:bg-white group px-2 rounded-lg text-center py-5 duration-300'>
                <Link to="/category/man" className="group-hover:text-black duration-500  text-white text-md text-xl  tracking-[2px]   capitalize">Men</Link>
            </li>
            <li className='hover:bg-white group px-2 rounded-lg text-center py-5 duration-300'>
                <Link to="/category/women" className="group-hover:text-black  duration-500  text-white text-xl  tracking-[2px] text-md  capitalize">Women</Link>
            </li>
            <li className='hover:bg-white group px-2 rounded-lg text-center py-5 duration-300'>
                <Link to="/category/sneakers" className="group-hover:text-black duration-500  text-white text-xl  tracking-[2px] text-md  capitalize">Sneakers</Link>
            </li>

            </ul>}
        </li>
    </ul>

    <ul className="flex gap-2 items-center">
        <li className="px-4 relative cursor-pointer" onClick={() => setCart(!cart)} >
            <BsCart3 size={30} className='text-amber-600' />
            <span className="absolute -bottom-[10px] bg-red-500 rounded-full -right-1 text-white  px-2 py-1">{products?.length}</span>

            {cart && <div className="absolute z-50 top-14 border -left-[12rem] space-y-2 bg-white border-black p-2 ">

            {/* card */}
            {products?.map((product,index) => (
            <div key={index} className="grid border-b border-red-900  grid-cols-3 gap-2 items-center pb-6">
            <div className="img w-full">
                <img src={product.image} alt={product.title} className="w-full h-[5rem]" />
            </div>
            <div className="">
                <h3 className="text-sm text-center text-black">{product.title}</h3>
            </div>
            <button className="">
                X
            </button>
            </div>
            ))}

            <Link to='/cart'  className="w-full block text-center py-4 hover:bg-white hover:border-black hover:border duration-500 hover:text-black bg-black text-white uppercase text-md font-rail">Proceed To Checkout</Link>

            </div>}
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
        <li onClink={()=> setShow(!show)} className="pl-8  border py-4">
        <button onClick={ClickHome}  className="text-xl text-black font-semibold capitalize">home</button>
        </li>
        {/* <li className=" py-4 ">
            <a href="#" className="text-xl  pl-8 text-black font-semibold capitalize">Categories</a>
        </li> */}
        <li onClink={()=> setShow(!show)} className="pl-8 py-4 border">
            <button onClick={ClickAbout}  className="text-xl text-black font-semibold capitalize">about</button>
        </li>
    </ul>

    </div>




    </div>
    

    </nav>
  )
}

export default Navbar