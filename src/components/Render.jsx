'use client'


import { redirect } from 'next/navigation'
import React, {useActionState, useEffect, useState } from 'react'
import {deleteById, getAllCourses, getCourseById, updateCourse} from '../actions/action.js'
import Link from 'next/link.js'


const Render = () => {
     const [data, setData] = useState([])
     const [edtData,setEdtData] = useState({})
     const [isVisible,setIsVisible] = useState(true)
     const [message,formAction,isPending] = useActionState(updateCourse,null)

        useEffect(() =>{
            const fetchData = async () => {
                try {
                  const resp = await getAllCourses();
                  setData(await resp.data);
                } catch (error) {
                  console.log(error);
                }
              };
            fetchData()
        },[])   
        
        const makeVisible =async (id) =>{
              if(id){
                setIsVisible(!isVisible)
                console.log(id)
              }
              const resp = await getCourseById(id);
                setEdtData(await resp)
                console.log(edtData)
        }
   
  return (
    <div>
          <div className="w-[1200px] mx-auto h-[500px] absolute top-[420px] left-[400px] z-30 ">
        
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                COURSE
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Commencement DATE
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                           
                        </tr>
                    </thead>
                    {
                        data === ''
                        ?
                            <h4 className="text-center w-[300px] h-[300px] font-bold capitalize text-xl flex justisfy-center items-center">
                                Pls No Data
                            </h4>
                        :
                        data?.map((d,index) => (
                            <tbody className="bg-white divide-y divide-gray-200" key={index}>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                       
                                    </div>
                                    <div className="ml-4">
                                        <Link href={`/course/${d.id}`} className="text-sm font-medium text-gray-900">{d.id}</Link>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{d.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{d.description}</div>
                            </td>
                          
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-3">
                            
                                <button onClick={()=>{
                                    makeVisible(`${d.id}`)
                                
                                }}  className="text-green-600 hover:text-green-900 cursor-pointer">Edit</button>
                               
                                <button onClick={async()=>{ 
                                    await deleteById(`${d.id}`)
                                    redirect('/')}
                                    } className="text-red-600 hover:text-red-800 cursor-pointer">
                                Delete
                                </button>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                        ))                                    
                    }
                </table>
            </div>
            </div>
            </div>

            {
                isVisible ? ""
                :
                <div className=' w-[1400px] h-[800px] justify-center items-center absolute top-[160px] left-[300px] content-center overflow-hidden bg-black/30 bg-blend-color z-40'>
                            <div className='h-[700px] w-[900px] bg-white shadow-md shadow-black flex flex-col justify-center items-center '>
                                  <div className='absolute top-[60px] right-[550px]'><button onClick={makeVisible} className='text-xl font-bold text-red-500 cursor-pointer'>X</button></div>
                                  <div className='absolute top-[120px] font-bold text-2xl'><h4>Edit Course</h4></div>
                                    
        <form className='flex flex-col  gap-4 p-4  rounded-lg shadow-2xl' action={formAction}>
            <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          
        >
          <label className='text-black text-sm font-bold capitalize'>
            Course
          </label>
          <input
           placeholder='Course Id'
            type='text'
            name='id'
            value={edtData?.id}
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          
        >
          <label className='text-black text-sm font-bold capitalize'>
            Course
          </label>
          <input
           
            type='text'
            name='name'
            placeholder={edtData?.name}
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
           
            name='description'
            placeholder={edtData?.description}
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
            {!isPending ? 'Edit Course' : 'loading........'}
          </button>
        </div>
      </form>
                                 </div>
                                 </div>
            }
           
    </div>
  )
}

export default Render