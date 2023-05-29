import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/hi.png';
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className= 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/* menu */}

            <ul className='hidden md:flex'>
                <li className='text-orange-300 hover:scale-110 duration-500'>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='text-orange-300 hover:scale-110 duration-500'>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='text-orange-300 hover:scale-110 duration-500'>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='text-orange-300 hover:scale-110 duration-500'>
                <Link to="work" smooth={true} duration={500}>
                Projects
                </Link>
                </li>
                <li className='text-orange-300 hover:scale-110 duration-500'>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
            

        {/* hamburger */}

        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link> 
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>  
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Projects
                </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>


        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.facebook.com/profile.php?id=100092542480793" target="_blank" rel="noopener noreferrer">
                    Facebook <FaFacebook size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/ray-andrew-manila-2126b4275" target="_blank" rel="noopener noreferrer">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://github.com/MD3P-Manila" target="_blank" rel="noopener noreferrer">
                    Github <FaGithub size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://manilarayandrew@gmail.com/" target="_blank" rel="noopener noreferrer">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://drive.google.com/drive/folders/1LFn0lbfixHnwHnH9dVTCJWIVEjadyYao?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar