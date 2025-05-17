
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FaSearchLocation } from "react-icons/fa";


function Header() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-[1400px] h-[80px] absolute top-0 left-[300px] hidden xl:flex justify-between items-center m-[10px]  bg-white shadow-md shadow-black rounded-2xl'>
        <div className='flex w-[500px] h-[70px] justify-start items-center left-10 absolute space-x-3  border-2 border-gray-300  rounded-md p-3 flex-1'>
        <FaSearchLocation className="text-lg text-blue-700"/>
            <input type="text" placeholder='Search...' className="p-4 w-[400px] h-[60px] "  />
        </div>
        <div className='flex w-[100px] h-[70px] absolute right-10 justify-end items-center text-center space-x-[10px]'>
            <FaUser className='text-lg p-2 bg-blue-700 text-white size-[40px] rounded-full' />
            <h2>Admin</h2>
            </div>
    </div>
  )
}

export default Header