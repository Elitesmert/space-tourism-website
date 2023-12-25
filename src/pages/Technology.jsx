import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'

const Moons = () => {
  const [currentTech, setCurrentTech] = useState(1)

  const containerStyle = {
    backgroundImage: 'url("./assets/destination/background-destination-mobile.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  }

  const tech = [
    {
      id: 1,
      title: 'LAUNCH VEHICLE',
      image: './assets/technology/image-launch-vehicle-portrait.jpg',
      desc: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!',
    },
    {
      id: 2,
      title: 'SPACEPORT',
      image: './assets/technology/image-spaceport-landscape.jpg',
      desc: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      id: 3,
      title: 'SPACE CAPSULE',
      image: './assets/technology/image-space-capsule-portrait.jpg',
      desc: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    },
  ]
  return (
    <div style={containerStyle} className='pt-[88px] px-6'>
      <div className='mb-8'>
        <h2 className='font-barlow-condensed flex gap-[18px] justify-center tracking-[2.7px] uppercase'>
          <span className='font-bold opacity-25'>02</span>
          Meet your crew
        </h2>
      </div>

      <div className='flex flex-col items-center gap-8'>
        <div className='border-b-[#383B4B] w-full h-[223px] border-b'>
          <div
            style={{ backgroundImage: `url(${tech[currentTech - 1].image})` }}
            className='bg-contain bg-no-repeat w-full h-full bg-center duration-200 ease-linear'
          />
        </div>

        <div className='flex gap-4'>
          {tech.map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentTech(item.id)}
              className={classNames(
                'w-10 h-10 rounded-full bg-transparent flex items-center justify-center font-bellefair border border-white/25 hover:border-white cursor-pointer',
                {
                  '!bg-white text-black !border-transparent': item.id === currentTech,
                }
              )}
            >
              {item.id}
            </div>
          ))}
        </div>

        {tech.map((item) => {
          if (item.id === currentTech) {
            return (
              <div key={item.id} className='flex flex-col items-center'>
                <h2 className='uppercase text-lightBlue font-barlow-condensed text-sm mb-2 tracking-[2.362px]'>
                  THE TERMINOLOGY…
                </h2>
                <h1 className='text-2xl font-bellefair uppercase mb-4'>{item.title}</h1>
                <p className='text-lightBlue text-center text-[15px]'>{item.desc}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Moons
