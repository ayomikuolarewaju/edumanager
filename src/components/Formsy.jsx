
import React from 'react'


const Formsy = ({
  name1,
  label1,
  type1,
  name2,
  label2,
  type2,
  name3,
  label3,
  type3,
  name4,
  label4,
  type4,
  name5,
  label5,
  action,
  clicker,
  okaybtn = true,
  div1 = true,
  div2 = true,
  div3 = true,
  div4 = true,
  div5 = true,
  value1,
  value2,
  value3,
  value4,
  value5,
}) => {
  return (
    <div className='h-screen  md:w-[600px] flex flex-col justify-start items-center'>
      <div className='flex h-[100px] md:w-full justify-center items-center mb-[10px]'>
        <h4></h4>
      </div>
      <form className='flex flex-col  gap-4 p-4  rounded-lg shadow-2xl' action={clicker}>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          hidden={div1}
        >
          <label className='text-black text-sm font-bold capitalize'>
            {label1}
          </label>
          <input
           placeholder={value1}
            type={type1}
            name={name1}
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          hidden={div2}
        >
          <label className='text-black text-sm font-bold capitalize'>
            {label2}
          </label>
          <input
            type={type2}
            placeholder={value2}
            name={name2}
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          hidden={div3}
        >
          <label className='text-black text-sm font-bold capitalize'>
            {label3}
          </label>
          <input
            type={type3}
            placeholder={value3}
            name={name3}
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          hidden={div4}
        >
          <label className='text-black text-sm font-bold capitalize'>
            {label4}
          </label>
          <input
            type={type4}
            placeholder={value4}
            name={name4}
            className='md:w-[400px] p-5 rounded-lg text-black text-md font-bold border-2 border-gray-300 focus:outline-none focus:border-gray-500'
          />
        </div>
        <div
          className='flex flex-col gap-2 md:w-1/2 justify-center items-start h-[100px]'
          hidden={div5}
        >
          <label className='text-black text-sm font-bold capitalize'>
            {label5}
          </label>
         <select className='flex flex-col'>
          <option  value={value5}>{name5}</option>
         </select>
        </div>
        <div
          className='flex justify-start mt-4 cursor-pointer'
          hidden={okaybtn}
        >
          <button
            className='capitalize cursor-pointer md:w-[400px] bg-blue-700 text-white p-5 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out'
            type='submit'
          >
            {action}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Formsy
