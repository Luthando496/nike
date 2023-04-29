import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {FaArrowCircleLeft} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

const data = ['https://images.unsplash.com/photo-1629941180894-5f9d3973d847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80','https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80']


const Home = () => {

    const [current,setCurrent] = useState(2)

   
  return (
    <>
        <section className="w-full mt-[9rem] mb-20">

        <div className="w-[80%] mx-auto">
            <h1 className="text-center text-black/95 text-4xl font-semibold">Cushioning for Your Miles</h1>

            <p className="text-md md:text-xl md:tracking-[2px] md:leading-relaxed mt-4 text-black text-center">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</p>

        </div>

        <div className="w-full px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 items-start gap-4 mt-12 gap-y-20">
            {/* card */}
            <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer mt-0">
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
            </div>
            {/*  */}
            <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </div>
            {/*  */}
            <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer mt-0">
                <div className="img w-full h-[386px]">
                    <img src="/assets/47c2a92432e8b6f0fd916f4604b74f8a.jpg" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </div>
            {/*  */}
              {/* card */}
              <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer">
                <div className="img w-full h-[386px]">
                    <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </div>
            {/*  */}
            <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer">
                <div className="img w-full h-[386px]">
                    <img src="/assets/12d04519377768ce180b5a022aa50dc4.jpg" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </div>
            {/*  */}
            <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer">
                <div className="img w-full h-[386px]">
                    <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="image-store" className="w-full h-full object-cover" />
                </div>
                <div className="body  pl-6 mt-8">
                <h2 className="text-semibold text-black text-xl">Jordan Stay Loyal 2</h2>
                <div className="flex justify-between mt-4">
                    <span className="text-xl font-bold text-gray-400">R2 000.00</span>
                    <span className="text-xl font-bold text-green-300">48.8% off</span>
                </div>
                </div>
            </div>
            {/*  */}

            
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

        <section className="w-full grid grid-cols-1 lg:grid-cols-2 collections h-[80vh]">

        <div className="w-full border group border-black relative overflow-hidden  h-[50vh] lg:h-full">
            <img src="/assets/b21944ad342970d3b1ffd5bed39f4dc6.jpg" alt="man" className="w-full group-hover:scale-150 duration-300 h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-amber-400/20"></div>
            <div className="absolute top-0 left-0 inner w-[90%] h-[90%] mx-auto border-white border flex items-center justify-center">
            <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-semibold font-roboto tracking-[3px] text-black uppercase">man</h1>

                    <button className="px-10 py-4 border uppercase border-black text-black hover:border-none hover:bg-black hover:text-white duration-500">Shop collection</button>

            </div>
            </div>
        </div>


        <div className="w-full relative group overflow-hidden  border border-black h-[50vh] lg:h-full">
            <img src="/assets/c4901ebcb2c39a0166317e0ca06db1a1.jpg" alt="man" className="w-full group-hover:scale-150 duration-300 h-full object-cover " />
            <div className="absolute top-0 left-0 w-full h-full bg-amber-400/20"></div>
            <div className="absolute top-0 left-0 inner w-[90%] h-[90%] mx-auto border-white border flex items-center justify-center">
            <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-semibold font-roboto tracking-[3px] text-red-700 uppercase">woman</h1>

                    <button className="px-10 py-4 border uppercase border-black text-black hover:border-none hover:bg-sky-700 hover:text-white duration-500">Shop collection</button>

            </div>
            </div>
        </div>

        </section>
    </>
  )
}

export default Home