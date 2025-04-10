import React from 'react'
import { GrDashboard } from 'react-icons/gr'
import { SiPrivateinternetaccess } from 'react-icons/si'
import { GiCommercialAirplane } from 'react-icons/gi'
import { FaGraduationCap} from 'react-icons/fa'



const Reports = ({value1,value2,value3,value4}) => {
    const menu = [
        {
          menuname: 'Total Students',
          menuvalue: value1,
          menulogo: <GrDashboard />
        },
        {
          menuname: 'Total Courses',
          menuvalue: value2,
          menulogo: <GiCommercialAirplane />
        },
    
        {
          menuname: 'Graduants',
          menuvalue: value3,
          menulogo: <FaGraduationCap />
        },
        {
          menuname: 'Reports',
          menuvalue: value4,
          menulogo: <FaGraduationCap />
        },
    ]

  return (
    
        <div className='w-[800px] h-[300px] absolute top-[180px] left-[100px] pt-[20px] m-[10px] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 grid grid-cols-1 md:grid-cols-4 gap-[340px]  justify-start items-center'>
            {
                menu.map((m,index)=>(
                    <div className='flex flex-col w-[300px] h-[150px] gap-[10px] justify-center items-start rounded-2xl p-3 bg-white shadow-md shadow-black' key={index}>
                        <div className='text-white text-[30px] bg-blue-700 w-[50px] h-[50px] rounded-xl justify-center items-center p-2'>{m.menulogo}</div>
                        <div>{m.menuname}</div>
                        <div className='font-bold text-2xl'>{m.menuvalue}</div>

                    </div>
                ))
            }

        </div>
    
  )
}

export default Reports