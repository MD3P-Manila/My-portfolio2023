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
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full stack web developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] text-2xl'>I'm a full stack web developer specializes in creating and (occasionally designing) exceptional digital experiences.
              I have a Bachelor's degree of Science in Information Technology and a graduate from Kodego Web Development Bootcamp.
              Currently, I'm focused on building responsive full-stack web applications using react and node js.
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