'use client'
import React,{ useState } from 'react'
import Formsy from '@/components/Formsy'
import Mains from '@/components/Mains'
import { FaPlus } from 'react-icons/fa'

function page() {

  const [isVisible,setIsVisible] = useState(false)
  
  const makeVisible =()=>{
    setIsVisible(!isVisible)
  }

  return (
  

  <div className='absolute top-[-160px]'>
 
  <Mains title='students management' icon=<FaPlus/> actiony='Add Student' doAction={makeVisible} />

 {
  isVisible 
  ?
  <div className=' w-[1400px] h-[800px] justify-center items-center absolute top-[150px] left-[300px] content-center overflow-hidden bg-black/30 bg-blend-color z-40'>
     <div className='h-[700px] w-[900px] bg-white shadow-md shadow-black flex flex-col justify-center items-center '>
      <div className='absolute top-[60px] right-[550px]'><button onClick={makeVisible} className='text-xl font-bold text-red-500 cursor-pointer'>X</button></div>
        <Formsy div1={!true} name1='name' label1='name' type1='text' div2={!true} name2='email' type2='email' label2='email' div3={!true} name3='course' label3='course' type3='text' div4={!true} name4='date' label4='date of enronment' type4='date' okaybtn={!true} action='Add Student'/>
     </div>
  </div>
:
""
 }
</div>
  )
}

export default page