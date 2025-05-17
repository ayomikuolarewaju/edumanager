'use client'
import React,{ useActionState, useEffect, useState } from 'react'
import { createStudent,getAllCourses,getAllStudents } from '@/actions/action'
import Reports from '@/components/Reports'



function Home() {

  const [isVisible,setIsVisible] = useState(false)
   const [datas, setData] = useState([])
   const [courseNo, setCourse] = useState(0)
   const [studentNo,setStudentNo] = useState(0)

  const [message, formAction,isPending] = useActionState(createStudent)
  
  const makeVisible =()=>{
    setIsVisible(!isVisible)
  }

    
  
    useEffect(() =>{
      const fetchData = async () => {
          try {
           const res = await getAllCourses()
           setData(res.data)
          } catch (error) {
            console.log(error);
          }
        };
      fetchData()
  },[])   

  useEffect(() =>{
    const fetchData = async () => {
        try {
          const resp = await getAllCourses() ;
          setData(await resp.data)
          const sNo = await getAllStudents();
          setStudentNo(await sNo.data.length)
          const cNo = await resp.data.length
          setCourse(cNo)
        } catch (error) {
          console.log(error);
        }
      };
    fetchData()
},[])  

  return (
  <div className='absolute top-[-160px]'>

  <Reports value1={studentNo} link1={`/student`} value2={courseNo} link2={`/course`}/>

</div>
  )
}

export default Home;