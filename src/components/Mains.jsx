import React from 'react'


const Main = ({title,actiony,doAction,icon,children}) => {
 
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 lg:w-[1400px] w-[300px] lg:h-[600px] space-x-[100px] absolute lg:top-[300px] lg:left-[300px]  flex justify-between items-start  pt-[20px] lg:m-[10px] left-[100px] m-[5px] lg:bg-white lg:shadow-md shadow-black rounded-2xl'>
            <div className='flex lg:w-2/5 h-[70px] justify-start items-center  rounded-md p-3  capitalize font-bold lg:text-xl'>
                <h1>{title}</h1>
            </div>
            
            <div className='flex lg:2/5 lg:h-[70px] justify-center items-center text-center bg-blue-700 rounded-md lg:p-3 p-1.5 text-white'>
                <button className='flex space-x-3 lg:text-md text-sm text-white justify-center items-center h-[30px] lg:w-[150px] w-[100px] cursor-pointer gap-4' onClick={doAction}>{icon}{actiony}</button>
            </div> 
        </div>
     )
  
}

export default Main