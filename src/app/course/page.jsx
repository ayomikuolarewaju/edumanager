'use client'
import React,{ useActionState, useState } from 'react'
import Mains from '@/components/Mains'
import { FaPlus } from 'react-icons/fa'
import { createCourse } from '@/actions/action'
import Render from '@/components/Render'



function page() {

   const [isVisible,setIsVisible] = useState(false)

   const [message, formAction,isPending] = useActionState(createCourse)
  
    const makeVisible =()=>{
      setIsVisible(!isVisible)
    }

  return(

    <div className='absolute top-[-160px]'>
 
  <Mains title='manage course' icon=<FaPlus/> actiony='Add Course' doAction={makeVisible}  />
  <Render/>
 {
  isVisible 
  ?
  <div className=' w-[1400px] h-[800px] justify-center items-center absolute top-[150px] left-[300px] content-center overflow-hidden bg-black/30 bg-blend-color z-40'>
     <div className='h-[700px] w-[900px] bg-white shadow-md shadow-black flex flex-col justify-center items-center '>
      <div className='absolute top-[60px] right-[550px]'><button onClick={makeVisible} className='text-xl font-bold text-red-500 cursor-pointer'>X</button></div>

       <form className='flex flex-col  gap-4 p-4  rounded-lg shadow-2xl' action={formAction}>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          
        >
          <label className='text-black text-sm font-bold capitalize'>
            Course
          </label>
          <input
           placeholder='Course Name'
            type='text'
            name='name'
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          
        >
          <label className='text-black text-sm font-bold capitalize'>
           Course Description
          </label>
          <input
            type='text'
            placeholder='Course Description'
            name='description'
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        
        <div
          className='flex justify-start mt-4 cursor-pointer'
         
        >
          <button
            className='capitalize cursor-pointer md:w-[400px] bg-blue-700 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out disable:bg-yellow-200'
            type='submit'
           
          >
            {!isPending ? 'Add Course' : 'loading........'}
          </button>
        </div>
      </form>
     </div>
  </div> 
:
""
 }
</div>

  )
}

export default page