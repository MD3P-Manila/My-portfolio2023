import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/*container*/}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ray Andrew Manila</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Full stack web developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl'>I'm a full stack web developer with a keen eye for crafting exceptional digital
                    experiences, backed by two years of experience as an IT Supervisor and a Bachelor's degree 
                    in Information Technology. Having refined my skills through training at Kodego 
                    Web Development Bootcamp, I excel in leveraging technologies like React and 
                    Laravel 10 to build responsive full-stack web applications.
            </p>

            <div>
            <Link to="work" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Projects
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
              </button>
              </Link>
            </div>

        </div>

    </div>
  )
}

export default Home