import React,{ useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import {Carousel as Slider} from 'react-responsive-carousel'
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../store/actions/productActions';
import Card from '../components/Card';
import SecondCard from '../components/SecondCard';
import { addToCart } from '../store/actions/cartActions';



const Product = () => {

    const dispatch = useDispatch()
    const {product} = useSelector(state=>state.prod)
    const {products} = useSelector(state => state.prod)
    const id = useParams().id
    const filteredProducts = products?.filter(pro => pro.category === product?.category)

    const Cart = (product) => {
        dispatch(addToCart(product))
    }


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
            <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto">
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
                    <button onClick={() =>Cart(product)} className="rounded-full w-full py-5 bg-black hover:bg-green-500 hover:text-black text-white text-xl hover:translate-y-2 duration-300">Add To Cart</button>
                    {/* <button className="rounded-full w-full py-5 flex gap-6 items-center justify-center border-black border text-black/70 font-rale tracking-[4px] text-2xl hover:translate-y-2 duration-300">Wishlist <AiOutlineHeart size={30} /></button> */}
                </div>
            </div>
        </div>

    </section>


    <section className="pb-16 w-full">
        <div className="w-[80%] mx-auto">
            <h1 className="text-black text-4xl font-rail">You Might Also Like</h1>


            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[10px]"
                className='w-full mt-16'
            >
        {filteredProducts?.map(product =>(
            <SecondCard key={product.id} product={product} />
        ) )}


            </Carousel>
        </div>

    </section>

    </>
  )
}

export default Product