'use client'

import { redirect } from 'next/navigation'
import React, {useActionState, useEffect, useState } from 'react'
import {deleteStudentById, getAllStudents,getStudentById,getAllCourses, updateStudent} from '../actions/action.js'
import Link from 'next/link.js'



const StudentRender = () => {
     const [sdata, setSData] = useState([])
     const [cdata, setCData] = useState([])
     const [edtData,setEdtData] = useState({})
     const [isVisible,setIsVisible] = useState(true)
     
     const [message,formAction,isPending] = useActionState(updateStudent,null)

     useEffect(() =>{
           const fetchCourse = async () => {
               try {
                const res = await getAllCourses()
                console.log(await res.data)
                setCData(await res.data)
               } catch (error) {
                 console.log(error);
               }
             };
           fetchCourse()
       },[]) 

        useEffect(() =>{
            const fetchStudent = async () => {
                try {
                  const resp = await getAllStudents();
                  console.log(await resp.data)
                  setSData(await resp.data);
                } catch (error) {
                  console.log(error);
                }
              };
            fetchStudent()
        },[])   
        
        const makeVisible =async (id) =>{
              if(id){
                setIsVisible(!isVisible)
              }
              const resp = await getStudentById(id); 
                setEdtData(await resp)
                console.log(edtData)
        }
   
  return (
    <div>
          <div className="w-[1200px] mx-auto h-[500px] absolute top-[420px] left-[400px] z-30">
        
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                NAME
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                EMAIL
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                           
                        </tr>
                    </thead>
                    {
                        sdata === ''
                        ?
                            <h4 className="text-center w-[300px] h-[300px] font-bold capitalize text-xl flex justisfy-center items-center">
                                Pls No Data
                            </h4>
                        :
                        sdata?.map((sd,index) => (
                            <tbody className="bg-white divide-y divide-gray-200" key={index}>
                        <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                       
                                    </div>
                                    <div className="ml-4">
                                        <Link href={`/student/${sd.id}`} className="text-sm font-medium text-gray-900">{sd.id}</Link>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{sd.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{sd.email}</div>
                            </td>
                          
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-3">
                            
                                <button onClick={()=>{
                                    makeVisible(`${sd.id}`)
                                }}  className="text-green-600 hover:text-green-900 cursor-pointer">Edit</button>
                               
                                <button onClick={()=>{ 
                                    deleteStudentById(`${sd.id}`) 
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
                <div className=' w-[1400px] h-[900px] justify-center items-center absolute top-[160px] left-[300px] content-center overflow-hidden bg-black/30 bg-blend-color z-40'>
                            <div className='h-[700px] w-[900px] bg-white shadow-md shadow-black flex flex-col justify-center items-center '>
                                  <div className='absolute top-[60px] right-[550px]'><button onClick={makeVisible} className='text-xl font-bold text-red-500 cursor-pointer'>X</button></div>
                                  
                                  <div className='absolute top-[120px] font-bold text-2xl pb-[20px]'><h4>Edit Student</h4></div>
                                   <form className='flex flex-col  gap-4 p-4  rounded-lg shadow-2xl mt-[20px]' action={formAction}>
          <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          >
          <label className='text-black text-sm font-bold capitalize'>
            ID
          </label>
          <input
           placeholder={edtData?.id}
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
            Name
          </label>
          <input
           placeholder={edtData?.name}
            type='text'
            name='name'
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          
        >
          <label className='text-black text-sm font-bold capitalize'>
            Email
          </label>
          <input
           placeholder={edtData?.email}
            type='text'
            name='email'
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          
        >
          <label className='text-black text-sm font-bold capitalize'>
           Phone Number
          </label>
          <input
            type='text'
            placeholder={edtData?.phoneNumber}
            name='phoneNumber'
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div className = "flex h-[20px] w-[400px] justisfy-center mt-3 text-black text-md gap-3 items-center">
          <label className='text-black text-sm font-bold capitalize'>
            Choose A Course
          </label>
              <select name='course' className='border-2 border-black rounded-md p-2 text-black text-md font-bold flex-1 w-[400px]'>
                {cdata.map((cd,index)=>(
                <option value={cd.name} key={index} className="text-black">
              {`${cd.name}`}</option>))}
              </select>
        </div>
        
        <div
          className='flex justify-start mt-4 cursor-pointer'
         
        >
          <button
            className='capitalize cursor-pointer md:w-[400px] bg-blue-700 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out disable:bg-yellow-200'
            type='submit'
           
          >
            {!isPending ? 'Editing Student' : 'loading........'}
          </button>
        </div>
      </form>
                                    
                                 </div>
                                 </div>
            }
           
    </div>
  )
}

export default StudentRender