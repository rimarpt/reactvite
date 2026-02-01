import React from 'react'
import Nav from '../component/Nav.jsx'
import Catagory from './Catagory.jsx' 
import Card from '../component/Card.jsx'
import { food_items } from '../food.js'



function Home() {
  let[catagory, setCatagory] =React.useState(food_items);
  function filter(catName){
    if(catName==="All"){
        setCatagory(food_items);
        
    }else{
        let newList= food_items.filter((item)=>(
           item.food_catagory===catName))
        setCatagory(newList);
    }
  }
  
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
              <Nav />


              <div  className='min-h-35 flex flex-wrap  bg-black items-center justify-center gap-6  '> 
                {Catagory.map((cat)=>{
                    return <div key={cat.id}  onClick={() => filter(cat.name)} className='h-20 w-35 md-w-10 bg-gray-200 rounded-lg p-2 flex flex-col item-start  justify-start text-green-600 text-lg font-bold shadow-lg hover:scale-105 hover:bg-green-100 duration-300 cursor-pointer'>

                       {cat.image}
                        {cat.name}
                    </div>
                })}
              </div>


                        <div className='w-full flex flex-wrap justify-center items-center pt-8 gap-5 px-5 bg-green'>
                        {catagory.map((item)=>(
                            <Card key={item.id} name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type}
                                
                            />
                        ))}
                        </div>
    </div>
  )
}

export default Home
