import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {Carousel} from 'react-responsive-carousel'


const Product = () => {

    const images = [{url:'/assets/12d04519377768ce180b5a022aa50dc4.jpg',id:1,name:'shoe'},{url:'/assets/050b03e9b285b6a0991074e487b1c2dd.jpg',id:2,name:'shoe'},{url:'/assets/abb8d41138e2d34b20df252a6929e0e4.jpg',id:3,name:'shoe'},{url:'/assets/3faa5724c172327ccccdf9982dd27272.jpg',id:4,name:'shoe'}]
  return (
    <>
    <section className="py-24 w-full">
        <div className="w-full px-16 flex flex-col lg:flex-row gap-8">
            {/* left */}
            <div className="text-white text-[20px] w-full max-w-full mx-auto ">
            <Carousel
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
                {/* <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" /> */}
            </Carousel>
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
                    <button className="rounded-full w-full py-5 bg-black text-white text-xl hover:translate-y-2 duration-300">Add To Cart</button>
                    <button className="rounded-full w-full py-5 flex gap-6 items-center justify-center border-black border text-black/70 font-rale tracking-[4px] text-2xl hover:translate-y-2 duration-300">Wishlist <AiOutlineHeart size={30} /></button>
                </div>
            </div>
        </div>

    </section>

    </>
  )
}

export default Product