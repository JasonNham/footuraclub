import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#e943ff] font-bold p-2'>Invest in Yourself</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Get Paid to Run</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            Run 
            </p>
          <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 py-4' strings={['to earn', 'with Footura Club']} typeSpeed={100} backSpeed={130} loop />
        </div>
        <button className='text-white bg-[#e943ff] w-[150px] rounded-md font-medium my-6 mx-auto py-3'>Register Today</button>
      </div>

    </div>
  )
}

export default Hero