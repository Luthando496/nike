import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import {Carousel as Slider} from 'react-responsive-carousel'
import "react-multi-carousel/lib/styles.css";


const Product = () => {

    const images = [{url:'/assets/12d04519377768ce180b5a022aa50dc4.jpg',id:1,name:'shoe'},{url:'/assets/050b03e9b285b6a0991074e487b1c2dd.jpg',id:2,name:'shoe'},{url:'/assets/abb8d41138e2d34b20df252a6929e0e4.jpg',id:3,name:'shoe'},{url:'/assets/3faa5724c172327ccccdf9982dd27272.jpg',id:4,name:'shoe'}]

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

  return (
    <>
    <section className="py-24 w-full">
        <div className="w-full px-16 flex flex-col lg:flex-row gap-8">
            {/* left */}
            <div className="text-white text-[20px] w-full max-w-full mx-auto ">
            <Slider
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                // axis='vertical'
                className="w-full productCarousel"
            >
                {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img.url}
                        alt={img.name}
                        // className='w-full object-cover h-full'
                    />
                ))}
            </Slider>
            </div>

            {/* right */}
            <div className="w-full px-4 py-4 font-roboto ">
                <h1 className="text-4xl text-black/75 ">Air Jordan 1 Mid SE Craft</h1>
                <p className="py-6 text-black text-xl">Men's Shoes</p>
                <div className="flex justify-between ">
                    <p className="text-xl text-gray-700">Price : ZAR 12295</p>
                    <span className="text-xl text-green-500">32.80% off</span>
                </div>
                <p className="text-black/70 pt-2 text-md">incl. of taxes</p>
                <p className="text-black/70 pb-8 text-md">(Also includes all applicable duties)</p>

                <p className="text-xl font-rale before: text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eveniet, voluptatum rerum consectetur ratione minima nobis amet officiis ullam fuga nostrum molestias autem laborum saepe quis at ducimus consequatur eius?</p>

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