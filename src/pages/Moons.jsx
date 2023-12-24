import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'

const Moons = () => {
  const [selectedMoon, setSelectedMoon] = useState(1)
  console.log(selectedMoon)
  const containerStyle = {
    backgroundImage: 'url("./assets/destination/background-destination-mobile.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Bu, sayfanın tamamını kaplaması için gerekli olabilir
    // Diğer stil özellikleri buraya eklenebilir
  }

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
    <div style={containerStyle} className='pt-[88px] px-6'>
      <div className='w-full mb-10'>
        <h2 className='font-barlow-condensed flex gap-[18px] justify-center tracking-[2.7px] uppercase'>
          <span className='font-bold opacity-25'>01</span>
          Pick your destination
        </h2>
      </div>
      <div className='flex justify-center items-center mb-8'>
        {moons.map((item) => {
          if (item.id === selectedMoon) {
            return (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className='w-[200px] h-[200px] '
              />
            )
          }
        })}
      </div>
      <div className='flex flex-col'>
        <ul className='flex gap-[26px] items-center justify-center font-barlow-condensed tracking-[2.362px] text-sm mb-5 z-0'>
          {moons.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedMoon(item.id)}
              className={classNames('relative ', {
                'after:content-[""] after:block after:absolute after:bg-white after:h-1 after:w-full after:-bottom-2 after:left-0':
                  item.id === selectedMoon,
              })}
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

        <div>
          {moons.map((item) => {
            if (item.id === selectedMoon) {
              return (
                <div key={item.id} className='flex flex-col items-center'>
                  <h1 className='text-[56px] font-bellefair uppercase'>{item.name}</h1>
                  <p className='text-lightBlue text-center border-b pb-8 border-b-[#383B4B] mb-8'>
                    {item.desc}
                  </p>
                  <div className='uppercase flex flex-col items-center gap-3 mb-8'>
                    <h3 className='font-barlow-condensed tracking-[2.362px] text-sm text-lightBlue'>
                      avg. distance
                    </h3>
                    <h2 className='text-[28px] font-bellefair'>{item.ad}</h2>
                  </div>
                  <div className='uppercase flex flex-col items-center gap-3'>
                    <h3 className='font-barlow-condensed tracking-[2.362px] text-sm text-lightBlue'>
                      est. travel time
                    </h3>
                    <h2 className='text-[28px] font-bellefair'>{item.tm}</h2>
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
