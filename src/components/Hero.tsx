import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner.jpg)] bg-left lg:bg-[16%] bg-cover'
    style={{backgroundSize: "15%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[110px] font-bold leading-tight flex justify-center items-center'> 
            <div>
                <p>I'm</p>
                <p>Bilal</p>
                <p>Waseem</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
