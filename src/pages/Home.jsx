import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {FaArrowCircleLeft} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {Link} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import Card from '../components/Card';
import {useSelector} from 'react-redux'



const Home = () => {

    const [current,setCurrent] = useState(2)
    const {products,cate} = useSelector(state => state.prod)

    console.log(cate)

   
  return (
    <>

        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                axis='vertical'
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-0 md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-amber-600 z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-[50px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-amber-500 z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180 text-sm md:text-lg" />
                    </div>
                )}
            >
                <div className='h-[80vh]'>
                    <img
                        src="/assets/8ff56df7a7d0a641d31c7a0124c2213c.jpg"
                        className="aspect-[16/10] h-full md:aspect-auto object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-black absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div className='h-[80vh]'>
                    <img
                        src="/assets/6d270e6b382b6d2ada43c3fac63df494.jpg"
                        className="aspect-[16/10] h-full md:aspect-auto object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>


                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] right-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div className='h-[80vh]'>
                    <img
                        src="https://i.pinimg.com/564x/9c/35/b4/9c35b48fa52d8d8a9660db6a722f112d.jpg"
                        className="aspect-[16/10] h-full md:aspect-auto object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-black absolute bottom-[25px] md:bottom-[75px] left-0 text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>
                <div className='h-[80vh]'>
                    <img
                        src="/assets/c4901ebcb2c39a0166317e0ca06db1a1.jpg"
                        className="aspect-[16/10] h-full md:aspect-auto object-fill"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>
            </Carousel>
        </div>


        <section className="w-full mt-[9rem] mb-20">

        <div className="w-[80%] mx-auto">
            <h1 className="text-center text-black/95 text-4xl font-semibold">Cushioning for Your Miles</h1>

            <p className="text-md md:text-xl md:tracking-[2px] md:leading-relaxed mt-4 text-black text-center">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</p>

        </div>

        <div className="w-full px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 items-start gap-4 mt-12 gap-y-20">
        {products?.slice(2,8).map((product) => (
            <Card key={product.id} product={product}  />
        ))}


            
        </div>


        </section>

        <section className="w-full bg-white my-14">
        <h1 className="text-black text-5xl pl-24 pt-8">Instagram</h1>
        <p className="text-black text-xl pl-24 py-8">Follow us on @FashionFrenzy</p>

        <div className="w-[80%] mx-auto  flex h-[50vh] l">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" className="w-full h-[20rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80" alt="image" className="w-full h-[20rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" className="w-full h-[20rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1629941180894-5f9d3973d847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" className="w-full h-[20rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1611937669166-be4e0503b115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image" className="w-full h-[20rem]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1622760807800-66cf1466fc08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="image" className="w-full h-[20rem]" />
      </SwiperSlide>
    </Swiper>
   

    



        </div>

        </section>

        <section className="w-full my-10 grid grid-cols-1 lg:grid-cols-2 collections h-[80vh]">

        <div className="w-full border group border-black relative overflow-hidden  h-[50vh] lg:h-full">
            <img src={cate && cate[0]?.categories?.man} alt="man" className="w-full group-hover:scale-150 duration-300 h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-amber-400/20"></div>
            <div className="absolute top-0 left-0 inner w-[90%] h-[90%] mx-auto border-white border flex items-center justify-center">
            <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-semibold font-roboto tracking-[3px] text-black uppercase">Man</h1>

                    <button className="px-10 py-4 border uppercase border-black text-black hover:border-none hover:bg-black hover:text-white duration-500">Shop collection</button>

            </div>
            </div> 
        </div> 


        <div className="w-full relative group overflow-hidden  border border-black h-[50vh] lg:h-full">
            <img src={cate && cate[0]?.categories?.woman} alt="man" className="w-full group-hover:scale-150 duration-300 h-full object-cover " />
            <div className="absolute top-0 left-0 w-full h-full bg-amber-400/20"></div>
            <div className="absolute top-0 left-0 inner w-[90%] h-[90%] mx-auto border-white border flex items-center justify-center">
            <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-semibold font-roboto tracking-[3px] text-red-700 uppercase">Women</h1>

                    <button className="px-10 py-4 border uppercase border-black text-black hover:border-none hover:bg-sky-700 hover:text-white duration-500">Shop collection</button>

            </div>
            </div>
        </div>

        </section>
    </>
  )
}

export default Home