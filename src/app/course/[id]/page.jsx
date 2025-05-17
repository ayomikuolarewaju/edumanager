"use client"

import { getCourseById} from '@/actions/action'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const SpecificCourse = () => {

    const [data,setData] = useState({})
    const {id} = useParams()
    
    useEffect(()=>{
        const fetchAll = async() =>{
        const res = await getCourseById(id)
        setData(await res)
       }
       fetchAll() 
    },[id])

  return (
  
    <div>
      <div className="w-[1200px] mx-auto h-[500px] absolute top-[120px] left-[400px] "> 
        
        <div className="text-2xl font-bold capitalize mb-[30px]">
          <h4>course details</h4>
        </div>

          {
            <div className='capitalize'>
            <h5>Course Name :- {data?.name}</h5>
            <p>Course Description :- {data?.description}</p>
            
            </div>
          }

         </div>
      
    </div>
   
  )
}

export default SpecificCourse