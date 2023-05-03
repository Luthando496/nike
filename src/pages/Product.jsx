import React,{ useState,useEffect} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {Link,useParams} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import {Carousel as Slider} from 'react-responsive-carousel'
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../store/actions/productActions';



const Product = () => {

    const dispatch = useDispatch()
    const {product} = useSelector(state=>state.prod)

    const [products, setProducts] = useState(null)
    const id = useParams().id


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    
      useEffect(()=>{
        dispatch(getDetails(id))
      },[id,dispatch])
    

  return (
    <>
    <section className="py-24 w-full">
        <div className="w-full px-16 flex flex-col lg:flex-row gap-8">
            {/* left */}
            <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Slider
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {product?.images?.map((img,index) => (
                    <img
                        key={index}
                        src={img?.url}
                        alt={'image-name'}
                    />
                ))}

            </Slider>
        </div>

            {/* right */}
            <div className="w-full px-4 py-4 font-roboto ">
                <h1 className="text-4xl text-black/75 ">{product?.title}</h1>
                <p className="py-6 text-black uppercase text-xl">{product?.category}</p>
                <div className="flex justify-between ">
                    <p className="text-xl text-gray-700">Price : ZAR {product?.price}</p>
                    <span className="text-xl text-green-500">{product?.percent}% off</span>
                </div>
                <p className="text-black/70 pt-2 text-md">incl. of taxes</p>
                <p className="text-black/70 pb-8 text-md">(Also includes all applicable duties)</p>

                <p className="text-xl font-rale before: text-black">{product?.description}</p>

                <div className="w-full space-y-6 pt-10">
                    <button className="rounded-full w-full py-5 bg-black hover:bg-green-500 hover:text-black text-white text-xl hover:translate-y-2 duration-300">Add To Cart</button>
                    {/* <button className="rounded-full w-full py-5 flex gap-6 items-center justify-center border-black border text-black/70 font-rale tracking-[4px] text-2xl hover:translate-y-2 duration-300">Wishlist <AiOutlineHeart size={30} /></button> */}
                </div>
            </div>
        </div>

    </section>


    <div className="pb-16 w-full">
        <div className="w-[80%] mx-auto">
            <h1 className="text-black text-4xl font-rail">You Might Also Like</h1>


            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
                className='w-full mt-16'
            >
                <Link  to='/product' className="card w-full mr-8 hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
                 </Link>

            <Link  to='/product' className="card w-full mr-8 hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src="/assets/10d9f76ca3facb51cde862d0277dfca1.jpg" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </Link>

            <Link  to='/product' className="card w-full hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src="/assets/986d4a588002df92a8501c151ccb737a.jpg" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </Link>

            <Link  to='/product' className="card w-full hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src="/assets/5558952c93aa69d36cb336870b0a41a9.jpg" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </Link>

            </Carousel>
        </div>

    </div>

    </>
  )
}

export default Product