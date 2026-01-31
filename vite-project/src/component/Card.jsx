import React from 'react'
import image1 from '../assets/image1.avif'
import { PiLeafBold } from "react-icons/pi";

const Card = () => {
  return (
  
        <div className='h-[320px] w-[280px] bg-white p-5 rounded-lg '>
                <div className='w-[100%] h-[60%]  bg-gray-500 rounded-lg shadow-lg overflow-hidden '>
                    <img src={image1} alt="" className='object-cover'  />
                </div  >
                
                <div className='text-black text-bold text-lg mt-3'>
                    Pancake
                   
                </div>
                <div className='text-green-600 font-semibold flex items-center justify-between mt-2'>
                   <div>299 Rs</div> 
                   <div><PiLeafBold /> <span>veg</span></div>
                </div>      
                
        </div>

  )
}

export default Card

