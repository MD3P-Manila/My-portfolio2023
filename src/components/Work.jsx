import React from 'react'
import Psbc from '../assets/psbc.jpg'
import Mpower from '../assets/mpower.png'
import Clone from '../assets/clone.png'
import Cdms from '../assets/cdms.png'
import Todo from '../assets/todoapp.png'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my recent projects</p>
            </div>

        {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                
                <div 
                style= {{ backgroundImage: `url(${Psbc})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover*/}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Completed Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://iampsbc.com/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div 
                style= {{ backgroundImage: `url(${Mpower})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover*/}

                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Completed Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://manilapower.net/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>

                        </div>
                    </div>
                </div>

                <div 
                style= {{ backgroundImage: `url(${Clone})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-400 tracking-wider'>
                        Deployment in Progress
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}

                        </div>
                    </div>
                </div>

                <div 
                style= {{ backgroundImage: `url(${Cdms})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-400 tracking-wider'>
                        Deployment in Progress
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}

                        </div>
                    </div>
                </div>

                <div 
                style= {{ backgroundImage: `url(${Todo})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover*/}

                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-yellow-400 tracking-wider'>
                        Deployment in Progress
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>*/}

                        </div>
                    </div>
                </div>
                
            </div>  
        </div>
    </div>
  )
}

export default Work