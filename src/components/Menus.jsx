'use client'
import React from 'react'
import { GrDashboard } from 'react-icons/gr'
import { SiPrivateinternetaccess } from 'react-icons/si'
import { GiCommercialAirplane } from 'react-icons/gi'
import { FaBuilding } from 'react-icons/fa'
import{ AiOutlineSetting } from 'react-icons/ai'
import { FaGraduationCap } from "react-icons/fa";
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Menus = () => {

  const menu = [
    {
      menuname: 'DashBoard',
      menulink: '/',
      menulogo: <GrDashboard />
    },
    {
      menuname: 'Students',
      menulink: '/student',
      menulogo: <GiCommercialAirplane />
    },

    {
      menuname: 'Courses',
      menulink: '/course',
      menulogo: <SiPrivateinternetaccess />
    },
    {
      menuname: 'Reports',
      menulink: '/reports',
      menulogo: <FaBuilding />
    },
    {
      menuname: 'Settings',
      menulink: '/settings',
      menulogo: <AiOutlineSetting />
    },
    
  ]

  const path = usePathname();
 
  return (
    <div className='w-full text-black flex flex-col justify-start  items-start h-screen lg:p-3 pl-1.5 space-y-2 shadow-black shadow-md bg-white'>
      <Link className="flex w-full justify-start items-center h-[40px] text-blue-700 mb-[50px] mt-[10px] " href="/">
        <FaGraduationCap className="text-blue-700 text-[40px] hidden lg:flex" />
        <h1 className='capitalize lg:text-[20px] text-xs font-bold font-[arial] text-blue-700'>edumanager</h1>
      </Link>
      <div>
        {menu.map((m, index) => (
          <div
           className =  {
            path === m.menulink 
            ?
            'flex lg:p-5 p-2 bg-blue-700 hover:bg-blue-700 text-white rounded-lg justify-start  lg:justify-center items-center h-[50px] lg:w-full space-x-5 cursor-pointer'
            :
            'flex text-blue-700  justify-center items-center h-[50px] lg:w-full space-x-5 cursor-pointer'
        }
            key={index}
          >
            <div className='hidden lg:flex'>{m.menulogo}</div>
            <Link href={m.menulink} className='cursor-pointer lg:text-[17px] text-xs'>
              {m.menuname}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}



export default Menus