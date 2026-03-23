import React from 'react'

export const NumberCounting = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center w-full h-auto p-4'>
      <div className=' relative flex flex-col items-center justify-center w-full h-40 m-2 rounded-lg faah-purple-gradient'>
      <img src={'/src/assets/vector1.png'} alt='' className='absolute left-0 top-0 h-full object-cover opacity-80' />
        <img src={'/src/assets/vector1.png'} alt='' className='absolute right-0 top-0 h-full object-cover opacity-80 scale-x-[-1]' />
        <p className='text-white'>In Progress</p>
        <h1 className='text-3xl font-bold text-white'>1000</h1>
      </div>
      <div className='relative flex flex-col items-center justify-center w-full h-40 m-2 rounded-lg faah-green-gradient'>
      <img src={'/src/assets/vector1.png'} alt='' className='absolute left-0 top-0 h-full object-cover opacity-80' />
        <img src={'/src/assets/vector1.png'} alt='' className='absolute right-0 top-0 h-full object-cover opacity-80 scale-x-[-1]' />
        <p className='text-white'>Resolved</p>
        <h1 className='text-3xl font-bold text-white'>500</h1>
      </div>
    </div>
  )
}
