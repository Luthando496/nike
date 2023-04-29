import React from 'react'

const Home = () => {
  return (
    <>
        <section className="w-full mt-[9rem] mb-8">

        <div className="w-[80%] mx-auto">
            <h1 className="text-center text-black/95 text-4xl font-semibold">Cushioning for Your Miles</h1>

            <p className="text-md md:text-xl md:tracking-[2px] md:leading-relaxed mt-4 text-black text-center">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</p>

        </div>

        <div className="w-full px-8 md:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-4 space-y-8 mt-12">
            {/* card */}
            <div className="card w-full hover:-translate-y-8 duration-300 cursor-pointer">
                <div className="img w-full h-[386px]">
                    <img src="/assets/dior.jpg" alt="image-store" className="w-full h-full object-cover" />
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
                    <img src="/assets/986d4a588002df92a8501c151ccb737a.jpg" alt="image-store" className="w-full h-full object-cover" />
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
                    <img src="/assets/10d9f76ca3facb51cde862d0277dfca1.jpg" alt="image-store" className="w-full h-full object-cover" />
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
                    <img src="/assets/e7192eeda79568aa5812b387e3efb70a.jpg" alt="image-store" className="w-full h-full object-cover" />
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

        <section className="w-full grid grid-cols-1 lg:grid-cols-2 collections h-screen">

        <div className="w-full border border-black relative h-[50vh] lg:h-full">
            <img src="/assets/b21944ad342970d3b1ffd5bed39f4dc6.jpg" alt="man" className="w-full object-cover h-full" />
            <div className="absolute top-0 left-0 w-full h-full bg-amber-400/20"></div>
            <div className="absolute top-0 left-0 inner w-[90%] h-[90%] mx-auto border-black border flex items-center justify-center">
            <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-semibold text-black uppercase">man</h1>

                    <button className="px-10 py-4 border uppercase border-black text-black hover:border-none hover:bg-black hover:text-white duration-500">Shop collection</button>

            </div>
            </div>
        </div>


        <div className="w-full relative border border-black h-[50vh] lg:h-full">
            <img src="/assets/c4901ebcb2c39a0166317e0ca06db1a1.jpg" alt="man" className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-amber-400/20"></div>
            <div className="absolute top-0 left-0 inner w-[90%] h-[90%] mx-auto border-black border flex items-center justify-center">
            <div className="space-y-8 text-center">
                    <h1 className="text-4xl font-semibold text-black uppercase">woman</h1>

                    <button className="px-10 py-4 border uppercase border-black text-black hover:border-none hover:bg-black hover:text-white duration-500">Shop collection</button>

            </div>
            </div>
        </div>

        </section>

        </section>

    </>
  )
}

export default Home