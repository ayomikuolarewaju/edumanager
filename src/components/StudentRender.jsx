'use client'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React, {useActionState, useEffect, useState } from 'react'
import Formsy from './Formsy'
import {updateStudent} from '../actions/action.js'

const StudentRender = () => {
     const [data, setData] = useState([])
     const [edtData,setEdtData] = useState({})
     const [isVisible,setIsVisible] = useState(true)
     
     const [pending,formAction,message] = useActionState(updateStudent,null)

        useEffect(() =>{
            const fetchData = async () => {
                try {
                  const resp = await axios.get('http://127.0.0.1:8080/api/v1/students/all');
                  setData(await resp.data);
                } catch (error) {
                  console.error(error.message);
                }
              };
            fetchData()
        },[])   
        
        const makeVisible =async (id) =>{
              if(id){
                setIsVisible(!isVisible)
              }
              const resp = await axios.get(`http://127.0.0.1:8080/api/v1/students/student/${id}`); 
              console.log(await resp.data)
                setEdtData(await resp.data)
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
                                        <div className="text-sm font-medium text-gray-900">{d.id}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{d.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{d.email}</div>
                            </td>
                          
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex space-x-3">
                            
                                <button onClick={()=>{
                                    makeVisible(d.id)
                                
                                }}  className="text-green-600 hover:text-green-900 cursor-pointer">Edit</button>
                               
                                <button onClick={()=>{ 
                                    axios.delete(`http://127.0.0.1:8080/api/v1/students/delete/${d.id}`) 
                                    redirect('/course')}
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
                                  <div className='absolute top-[120px] font-bold text-2xl'><h4>Edit Student</h4></div>
                                    <Formsy clicker={formAction}
                                       div1={!true} name1='name' label1='name' type1='text' value1={edtData.name}
                                       div2={!true} name2='email' type2='email' label2='email'  value2={edtData.email}
                                       div3={!true} name3='phoneNumber' label3='phone number' type3='text'value3={edtData.phoneNumber}
                                       div4={!true} name4='id' label4='id' type4='text' value4={edtData.id} 
                                      
                                       okaybtn={!true} action='Edit Sudent'/>
                                 </div>
                                 </div>
            }
           
    </div>
  )
}

export default StudentRender