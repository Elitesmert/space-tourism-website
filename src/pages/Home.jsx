import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const containerStyle = {
    backgroundImage: 'url("./assets/home/background-home-mobile.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Bu, sayfanın tamamını kaplaması için gerekli olabilir
    // Diğer stil özellikleri buraya eklenebilir
  }
  return (
    <div style={containerStyle} className='pt-28 px-6'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-lightBlue font-barlow-condensed tracking-[2.7px]'>
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className='text-[80px] font-bellefair'>SPACE</h1>
        <p className='text-[15px] text-center leading-6 text-lightBlue'>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </p>
      </div>

      <div className='mt-20 flex items-center justify-center'>
        <Link
          to='/moons'
          className='uppercase w-[150px] h-[150px] rounded-full border-white border-[75px] text-black tracking-[1.25px] font-bellefair text-xl flex items-center justify-center transition-all outline outline-0 outline-black/20 hover:outline-[50px] hover:outline-black/20 hover:outline'
        >
          EXPLORE
        </Link>
      </div>
    </div>
  )
}

export default Home
