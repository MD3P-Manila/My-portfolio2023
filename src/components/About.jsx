import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 sm:flex flex-col space-y-4'>
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
                      <p className='text-2xl'>I am a highly motivated web developer with a strong passion for creating
                        outstanding websites and applications that enhance people's lives. I am 
                        dedicated to staying up-to-date with the latest technologies
                        and programming languages and I'm always eager to learn new skills and expand my knowledge base.
                      </p>
                    </div>
                  </div>
            </div>
        </div>
  )
}

export default About