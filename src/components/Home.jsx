import React from 'react'
import Profile from "../Assets/profile.png";
import { Link } from "react-scroll";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ' >
           <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Front-end Developer</h2>
            <p className='text-gray-500 py-4 max-w-md'>
              I am a fresher and i'm just passionate about to building and designing software.
              Currently i'm working with React.js .I would love to bring work on web applications
              like React, Tailwind, Node, Material Ui etc.
            </p>
            <div>
              <Link  to="portfolio" smooth duration ={500}className='group text-white ahead w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 to-gray-800 cursor-pointer'>
                portfolio 
                <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1 "/></span>
    

              </Link>
              </div>
            </div>
            <div>
                 <img src={Profile} alt="my profile" className='opacity-20 rounded-md hover:bg-gradient-to-b from-black to-gray cursor-pointer hover:scale-110 duration-300 hover:opacity-50'/>
            </div>
           </div>
    </div>
  );
};

export default Home
