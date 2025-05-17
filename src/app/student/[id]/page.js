"use client"

import { getStudentById} from '@/actions/action'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const SpecificStudent = () => {

    const [data,setData] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        const fetchAll = async() =>{
        const res = await getStudentById(id)
        setData(await res)
       }
       fetchAll() 
    },[id])

  return (
  
    <div>
      <div className="w-[1200px] mx-auto h-[500px] absolute top-[120px] left-[400px] "> 
        
        <div className="text-2xl font-bold capitalize mb-[30px]">
          <h4>student details</h4>
        </div>

          {
            <div>
            <h5>Name :- {data?.name}</h5>
            <p>Email :- {data?.email}</p>
            <p>Phone Number :- {data?.phoneNumber}</p>
            <p>Courses :- {data?.course?.length == 0 ? "no course" : data?.course?.map((d)=>{d?.name})}</p>
            </div>
          }

         </div>
      
        
         
        
    
    </div>
   
  )
}

export default SpecificStudent