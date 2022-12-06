import React from 'react'
import { FaGithub} from "react-icons/fa";
import {BsMailbox} from "react-icons/bs"
import {BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const Links=[
   
          {
            id:1,
            child:(
              <>Github<FaGithub size={30}/></>
            ),
            href:"https://github.com/Aditi-source-alt",
          
          },
          {
            id:2,
            child:(
              <>Mail<BsMailbox size={30}/></>
            ),
            href:"mailto:thakuraditi045@gmail.com",
           
          },
          {
            id:3,
            child:(
              <>Resume<BsFillPersonLinesFill size={30}/></>
            ),
            href:"/resume.pdf",
            style: 'rounded-br-md',
            download:true,
          }
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
           <ul>
            {Links.map(({id,child,href,style,download}) => (
 <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px]  hover:rounded-md duration-300 + " " + style'}>
 <a href={href} className='flex justify-between items-center w-full text-white'
 download={download}
 target="_blank"
 rel='noreferrer'
 
 >
  {child}
   </a>
   </li>
            )

            )}
           
           </ul>
    </div>
  )
}

export default SocialLinks
