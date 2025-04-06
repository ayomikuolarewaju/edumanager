import React from 'react'


const Main = ({title,actiony,doAction,icon,children}) => {
 
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-[1400px] h-[500px] absolute top-[300px] left-[300px]  flex justify-between items-start pt-[20px] m-[10px]  bg-white shadow-md shadow-black rounded-2xl'>
            <div className='flex w-1/5 h-[70px] justify-start items-center  rounded-md p-3 absolute text-black left-10 top-5 capitalize font-bold text-xl'>
                <h1>{title}</h1>
            </div>
            <div className='flex flex-col w-3/5'>{children}</div>
            <div className='flex w-[180px] h-[70px] justify-center items-center text-center bg-blue-700 rounded-md p-3 flex-1 text-white absolute right-10 top-5'>
                <button className='flex space-x-3 text-md text-white justify-between items-center h-[30px] w-[150px] cursor-pointer' onClick={doAction}>{icon}{actiony}</button>
            </div>
        </div>
     )
  
}

export default Main