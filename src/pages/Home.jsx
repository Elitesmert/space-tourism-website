import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[url("/assets/home/background-home-mobile.jpg")] xs:bg-[url("/assets/home/background-home-tablet.jpg")] md:bg-[url("/assets/home/background-home-desktop.jpg")] bg-cover bg-no-repeat bg-center min-h-screen pt-[88px] xs:pt-[202px] px-6 xs:px-40 md:flex md:justify-between md:pt-[387px]'>
      <div className='flex flex-col items-center gap-4 xs:gap-6 md:w-[450px] md:items-start'>
        <h2 className='text-lightBlue font-barlow-condensed tracking-[2.7px] xs:text-xl xs:tracking-[3.375px] md:text-[28px] md:tracking-[3.725px]'>
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className='text-[80px] font-bellefair xs:text-[150px] xs:leading-[150px]'>SPACE</h1>
        <p className='text-[15px] xs:text-base md:text-lg text-center leading-6 md:text-start text-lightBlue'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>

      <div className='mt-20 flex items-center justify-center md:mt-0'>
        <Link
          to='/moons'
          className='uppercase w-[150px] h-[150px] xs:w-[242px] xs:h-[242px] md:w-[274px] md:h-[274px]  rounded-full border-white border-[75px] xs:border-[121px] md:border-[137px] text-black tracking-[1.25px] font-bellefair text-xl xs:text-[32px] xs:tracking-[2px] flex items-center justify-center transition-all outline outline-0 outline-black/20 hover:outline-[50px] xs:hover:outline-[70px] hover:outline-black/20 hover:outline'
        >
          EXPLORE
        </Link>
      </div>
    </div>
  )
}

export default Home
