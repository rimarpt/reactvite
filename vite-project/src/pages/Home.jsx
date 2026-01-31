import React from 'react'
import Nav from '../component/Nav.jsx'
import Catagory from './Catagory.jsx' 
import Card from '../component/Card.jsx'

function Home() {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
              <div className='min-h-35 flex flex-wrap  bg-white items-center justify-center gap-6  '> 
                {Catagory.map((cat)=>(
                    <div key={cat.id} className='h-15 w-35 md-w-10 bg-gray-200 rounded-lg flex flex-wrap item-center  justify-center text-green-600 text-lg shadow-lg hover:scale-105 hover:bg-green-100 duration-300 cursor-pointer'>
                        <div className='flex items-center justify-center text-3xl '>{cat.image}</div>   
                        <h3 className='flex items-center justify-center text-md font-semibold '>{cat.name}</h3>
                    </div>

                ))}
              </div>
            <div className='px-5 bg-green'>
            <Card/>
            </div>
    </div>
  )
}

export default Home
