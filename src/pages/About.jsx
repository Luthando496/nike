import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <>
        <section className="pt-32 w-full">
            <h1 className="text-5xl text-black/70 font-play tracking-[5px] uppercase text-center">About Us</h1>
            <div className="w-[5rem]  bg-black  h-[2px] my-2 mx-auto"></div>

            <p className="py-24 w-full px-4 lg:px-24">
            We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at FASHION FRENZY, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.
            </p>
            
        </section>

        <section className="w-full pb-24">
            <div className="w-full px-8 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* left */}
            <motion.dev animate={{x:1,scale:1}} initial={{x:-300,scale:0}}  transition={{delay:1.6,type:"fade"}} className="">
                <div className="w-full lg:w-full">
                    <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className='w-full rounded-md h-[500px]'  alt="image"/>
                </div>
            </motion.dev>
            {/* right */}
            <motion.dev 
            animate={{x:1,scale:1,opacity: 1 }} 
            initial={{x:-300,scale:0,opacity: 0 }} 
            transition={{delay:1.6,type:"ease-in"}} 
            className="w-full py-14">

                <h1 className="text-black font-play text-5xl">Our Goal</h1>
                <p className="text-black/50 font-castoro text-xl tracking-[2px] pt-8">
                We are a team of athletes who are passionate about creating the world's most exciting and exciting athlete.
                </p>
                <p className="text-black/50 font-castoro text-xl pt-8 tracking-[2px]">
                With a global footprint, culture of innovation and team-first mentality, we take action to create a future of continual progress for athletes, sport and our world.
                </p>
            </motion.dev>

            </div>
        </section>
    </>
  )
}

export default About