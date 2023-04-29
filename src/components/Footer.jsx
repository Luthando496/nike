import React from 'react'
import {FaFacebook,FaTwitter,FaYoutube,FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='w-full bg-black px-10 pt-12'>
    <div className="grid lg:grid-cols-7 gap-14">
    {/* 1 */}
    <div className="col-span-1 w-full">
    <ul className="flex flex-col gap-3">
        <li className="">
            <h2 className="text-white uppercase text-[14px] font-semibold">Find A Store</h2>
        </li>
        <li className="">
            <h2 className="text-white uppercase text-[14px] font-semibold">become a partner</h2>
        </li>
        <li className="">
            <h2 className="text-white uppercase text-[14px] font-semibold">sign up for email</h2>
        </li>
        <li className="">
            <h2 className="text-white uppercase text-[14px] font-semibold">send us feedback</h2>
        </li>
        <li className="">
            <h2 className="text-white uppercase text-[14px] font-semibold">student discount</h2>
        </li>
    </ul>

    </div>

    {/* 2 */}
    <div className="col-span-1 w-full">
    <ul className="flex flex-col gap-3">
        <li className="">
            <h2 className="text-white uppercase text-md font-semibold">get help</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Order Status</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Delivery</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Returns</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Payment Options</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Contact Us</h2>
        </li>
    </ul>

    </div>

    {/* 3 */}
    <div className="col-span-1 w-full">
    <ul className="flex flex-col gap-3">
        <li className="">
            <h2 className="text-white uppercase text-md font-semibold">About nike</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">News</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Careers</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Investors</h2>
        </li>
        <li className="">
            <h2 className="text-gray-400/80 capitalize text-sm font-semibold">Sustainability</h2>
        </li>
    </ul>

    </div>

    {/* 4 */}
    <div className="col-span-4 w-full flex justify-start lg:justify-end gap-8">
    <FaFacebook size={50} className='text-white hover:text-amber-300 duration-300' />
    <FaTwitter size={50} className='text-white hover:text-amber-300 duration-300' />
    <FaGithub size={50} className='text-white hover:text-amber-300 duration-300' />
    <FaYoutube size={50} className='text-white hover:text-amber-300 duration-300' />
    

    </div>

    </div>
    <div className="flex flex-col gap-6 lg:flex-row justify-between mt-8 pb-4">
        <span className="text-white">© 2023 Nike, Inc. All Rights Reserved</span>
        <ul className="flex gap-10">
            <li>
                <span className="text-white">Guides</span>
            </li>
            <li>
                <span className="text-white">Terms of Sale</span>
            </li>
            <li>
                <span className="text-white">Terms of Use</span>
            </li>
            <li>
                <span className="text-white">Privacy Policy</span>
            </li>
        </ul>
    </div>

    </footer>
  )
}

export default Footer