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
  console.log(path)
  // const path = window.location.pathname;
  return (
    <div className='w-full text-black flex flex-col justify-start items-start h-screen p-3 space-y-2 shadow-black shadow-md bg-white'>
      <div className="flex w-full justify-start items-center h-[40px] text-blue-700 mb-[50px] mt-[10px] ">
        <FaGraduationCap className="text-blue-700 text-[40px]" />
        <h1 className='capitalize text-[20px] font-bold font-[arial] text-blue-700'>edumanager</h1>
      </div>
      <div>
        {menu.map((m, index) => (
          <div
           className =  {
            path === m.menulink 
            ?
            'flex p-5 bg-blue-700 hover:bg-blue-700 text-white rounded-lg  justify-center items-center h-[50px] w-full space-x-5 cursor-pointer'
            :
            'flex text-blue-700  justify-center items-center h-[50px] w-full space-x-5 cursor-pointer'
        }
            key={index}
          >
            <div>{m.menulogo}</div>
            <Link href={m.menulink} className='cursor-pointer'>
              {m.menuname}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}



export default Menus