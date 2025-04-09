'use client'
import React,{ useActionState, useState } from 'react'
import Formsy from '@/components/Formsy'
import Mains from '@/components/Mains'
import { FaPlus } from 'react-icons/fa'
import { createCourse } from '@/actions/action'
import Render from '@/components/Render'



function page() {

   const [isVisible,setIsVisible] = useState(false)

   const [pending, formAction,message] = useActionState(createCourse)
  
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
        <Formsy clicker={formAction}
           div1={!true} name1='name' label1='name' type1='text' 
           div2={!true} name2='description' type2='text' label2='Describe the course'  
           div3={!true} name3='starttime' type3='date'  label3='Commencement Date'
           okaybtn={!true} action='Add Course'/>
     </div>
  </div> 
:
""
 }
</div>

  )
}

export default page