import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'

const Moons = () => {
  const [selectedMoon, setSelectedMoon] = useState(1)

  const bgImage = [
    { image: './assets/destination/background-destination-tablet.jpg' },
    {
      image: './assets/destination/background-destination-desktop.jpg',
    },
  ]

  console.log(bgImage)
  const moons = [
    {
      id: 1,
      name: 'Moon',
      image: './assets/destination/image-moon.png',
      desc: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      ad: '384,400 km',
      tm: '3 DAYS',
    },
    {
      id: 2,
      name: 'Mars',
      image: './assets/destination/image-mars.png',
      desc: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      ad: '225 mil. km',
      tm: '9 MONTHS',
    },
    {
      id: 3,
      name: 'Europa',
      image: './assets/destination/image-europa.png',
      desc: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      ad: '628 mil. km',
      tm: '3 YEARS',
    },
    {
      id: 4,
      name: 'Titan',
      image: './assets/destination/image-titan.png',
      desc: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      ad: '1.6 bil. km',
      tm: '7 YEARS',
    },
  ]
  return (
    <div className='bg-[url("/assets/destination/background-destination-mobile.jpg")] xs:bg-[url("/assets/destination/background-destination-tablet.jpg")] md:bg-[url("/assets/destination/background-destination-desktop.jpg")] bg-cover bg-no-repeat bg-center min-h-screen pt-[88px] px-6 xs:px-9 xs:pt-[136px] md:pt-[212px] md:px-[165px]'>
      <div className='w-full mb-10 md:mb-16'>
        <h2 className='font-barlow-condensed flex gap-[18px] justify-center tracking-[2.7px] xs:tracking-[3.375px] uppercase xs:justify-start xs:text-xl'>
          <span className='font-bold opacity-25'>01</span>
          Pick your destination
        </h2>
      </div>

      <div className='md:grid md:grid-cols-main gap-x-32'>
        <div className='flex justify-center items-center mb-8 xs:mb-12'>
          {moons.map((item) => {
            if (item.id === selectedMoon) {
              return (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  className='w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] md:w-[445px] md:h-[445px]'
                />
              )
            }
          })}
        </div>
        <div className='flex flex-col xs:px-14 md:items-start'>
          <ul className='flex gap-[26px] items-center justify-center font-barlow-condensed tracking-[2.362px] md:tracking-[2.7px] text-sm xs:text-base mb-5 cursor-pointer'>
            {moons.map((item) => (
              <li
                key={item.id}
                onClick={() => setSelectedMoon(item.id)}
                className={classNames(
                  'border-b-3 border-b-transparent hover:border-b-white/50 pb-3 transition-colors',
                  {
                    ' !border-b-white': item.id === selectedMoon,
                  }
                )}
              >
                <h3
                  className={classNames('text-lightBlue', {
                    'text-white': item.id === selectedMoon,
                  })}
                >
                  {item.name}
                </h3>
              </li>
            ))}
          </ul>

          {moons.map((item) => {
            if (item.id === selectedMoon) {
              return (
                <div key={item.id} className='flex flex-col items-center md:items-start'>
                  <h1 className='text-[56px] font-bellefair uppercase md:text-[100px]'>
                    {item.name}
                  </h1>
                  <p className='text-lightBlue text-center border-b pb-8 border-b-[#383B4B] mb-8 md:text-lg md:text-start'>
                    {item.desc}
                  </p>
                  <div className='md:flex gap-20'>
                    <div className='uppercase flex flex-col items-center gap-3 mb-8 md:mb-0 md:items-start'>
                      <h3 className='font-barlow-condensed tracking-[2.362px] text-sm text-lightBlue'>
                        avg. distance
                      </h3>
                      <h2 className='text-[28px] font-bellefair'>{item.ad}</h2>
                    </div>
                    <div className='uppercase flex flex-col items-center gap-3 md:items-start'>
                      <h3 className='font-barlow-condensed tracking-[2.362px] text-sm text-lightBlue'>
                        est. travel time
                      </h3>
                      <h2 className='text-[28px] font-bellefair'>{item.tm}</h2>
                    </div>
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Moons
