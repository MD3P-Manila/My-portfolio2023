import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
             <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-5xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                  </div>
                  </div>
                  <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                      <p>Hi. Im Andrew, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                      <p className='text-2xl'>I'm a full stack web developer with a keen eye for crafting exceptional digital
                    experiences, backed by two years of experience as an IT Supervisor and a Bachelor's degree 
                    in Information Technology. Having refined my skills through training at Kodego 
                    Web Development Bootcamp, I excel in leveraging technologies like React and 
                    Laravel 10 to build responsive full-stack web applications. Passionate about pushing the 
                    boundaries of web development and dedicated to delivering top-notch solutions, I am eager 
                    to tackle new challenges and contribute to innovative projects.
                      </p>
                    </div>
                  </div>
            </div>
        </div>
  )
}

export default About