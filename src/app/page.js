'use client'
import React,{ useActionState, useEffect, useState } from 'react'
import Formsy from '@/components/Formsy'
import Mains from '@/components/Mains'
import { FaPlus } from 'react-icons/fa'
import StudentRender from '@/components/StudentRender'
import { createStudent } from '@/actions/action'
import axios from 'axios'
import Reports from '@/components/Reports'



function Home() {

  const [isVisible,setIsVisible] = useState(false)
   const [data, setData] = useState([])
   const [courseNo, setCourse] = useState(0)
   const [studentNo,setStudentNo] = useState(0)

  const [pending, formAction,message] = useActionState(createStudent)
  
  const makeVisible =()=>{
    setIsVisible(!isVisible)
  }

  useEffect(() =>{
    const fetchData = async () => {
        try {
          const resp = await axios.get('http://127.0.0.1:8080/api/v1/students/courses');
          setData(await resp.data)
          const sNo = await axios.get('http://127.0.0.1:8080/api/v1/students/count')
          setStudentNo(await sNo.data)
          const cNo = await axios.get('http://127.0.0.1:8080/api/v1/students/courses/count')
          setCourse(await cNo.data)
        } catch (error) {
          console.log(error);
        }
      };
    fetchData()
},[])  

  return (
  <div className='absolute top-[-160px]'>

  <Reports value1={studentNo} value2={courseNo}/>
  <div className='absolute top-[150px]'>
  <Mains title='students management' icon=<FaPlus/> actiony='Add Student' doAction={makeVisible} />
  </div>
  <div className='absolute z-50 top-[150px]'>
  <StudentRender/>
  </div>
 {
  isVisible 
  ?
  <div className=' w-[1400px] h-[800px] justify-center items-center absolute top-[150px] left-[300px] content-center overflow-hidden bg-black/30 bg-blend-color z-50'>
     <div className='h-[700px] w-[900px] bg-white shadow-md shadow-black flex flex-col justify-center items-center '>
      <div className='absolute top-[60px] right-[550px]'><button onClick={makeVisible} className='text-xl font-bold text-red-500 cursor-pointer'>X</button></div>
        <Formsy clicker={formAction}
        div1={!true} name1='name' label1='name' type1='text' 
        div2={!true} name2='email' type2='email' label2='email'  
        div4={!true} name4='phoneNumber' label4='phone number' type4='text'
        div5={!true}  label5='course' name5 value5
        okaybtn={!true} action='Add Student'/>
     </div>
  </div>
:
""
 }
</div>
  )
}

export default Home;