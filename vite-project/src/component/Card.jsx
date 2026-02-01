import React from 'react'
import image1 from '../assets/image1.avif'
import { PiLeafBold } from "react-icons/pi";
import { GiChickenLeg } from "react-icons/gi";
import { food_items } from '../food';

const Card = ({name, image, id,price, type}) => {
  return (
  
        <div className='h-[320px] w-[280px] bg-white p-3 rounded-lg hover:border-2 border-green-500  cursor-pointer '>
                <div className='w-full h-[60%]  bg-gray-500 rounded-lg shadow-lg overflow-hidden '>
                    <img src={image} alt="" className='object-cover'  />
                </div  >
                
                <div className='text-black text-bold font-extrabold text-lg mt-2'>
                      {name}
                   
                </div>
                <div className='text-green-600 font-semibold flex flex-wrap items-center justify-between '>
                   <div>{price}</div> 
                   <div className='flex flex-wrap text-sm'>{type?.toLowerCase() === "veg" ? <PiLeafBold /> : <GiChickenLeg />}
                   <span>{type}</span></div>
                </div>       
                <button className='bg-green-400 w-full p-2 rounded-2xl hover:scale-105 hover:bg-green-600 duration-300 cursor-pointer'>Add to Cart</button>
        </div>

  )
}

export default Card

