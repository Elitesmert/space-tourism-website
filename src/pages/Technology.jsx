import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'

const Moons = () => {
  const [currentTech, setCurrentTech] = useState(1)

  const tech = [
    {
      id: 1,
      title: 'LAUNCH VEHICLE',
      image: [
        './assets/technology/image-launch-vehicle-landscape.jpg',
        './assets/technology/image-launch-vehicle-portrait.jpg',
      ],
      desc: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!',
    },
    {
      id: 2,
      title: 'SPACEPORT',
      image: [
        './assets/technology/image-spaceport-landscape.jpg',
        './assets/technology/image-spaceport-tablet.jpg',
      ],
      desc: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
      id: 3,
      title: 'SPACE CAPSULE',
      image: [
        './assets/technology/image-space-capsule-landscape.jpg',
        './assets/technology/image-space-capsule-tablet.jpg',
      ],
      desc: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    },
  ]
  return (
    <div className='bg-[url("/assets/technology/background-technology-mobile.jpg")] xs:bg-[url("/assets/technology/background-technology-tablet.jpg")] md:bg-[url("/assets/technology/background-technology-desktop.jpg")] bg-cover bg-no-repeat bg-center min-h-screen pt-[88px] xs:pt-[136px]'>
      <div className='mb-8 xs:pl-9'>
        <h2 className='font-barlow-condensed flex gap-[18px] justify-center tracking-[2.7px] xs:tracking-[3.375px] uppercase xs:justify-start xs:text-xl'>
          <span className='font-bold opacity-25'>03</span>
          Meet your crew
        </h2>
      </div>

      <div className='flex flex-col items-center gap-8'>
        <div className='w-full h-[223px] xs:h-[310px]'>
          <div
            className={classNames(
              'bg-contain bg-no-repeat w-full h-full bg-center xs:bg-cover duration-300 ease-in-out',
              {
                'bg-[url("/assets/technology/image-launch-vehicle-landscape.jpg")]':
                  currentTech === 1,
                'md:bg-[url("/assets/technology/image-launch-vehicle-portrait.jpg")]':
                  currentTech === 1,
                'bg-[url("/assets/technology/image-spaceport-landscape.jpg")]': currentTech === 2,
                'md:bg-[url("/assets/technology/image-spaceport-portrait.jpg")]': currentTech === 2,
                'bg-[url("/assets/technology/image-space-capsule-landscape.jpg")]':
                  currentTech === 3,
                'md:bg-[url("/assets/technology/image-space-capsule-portrait.jpg")]':
                  currentTech === 3,
              }
            )}
          />
        </div>

        <div className='flex gap-4'>
          {tech.map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentTech(item.id)}
              className={classNames(
                'w-10 h-10 xs:w-[60px] xs:h-[60px] rounded-full bg-transparent flex items-center justify-center font-bellefair border border-white/25 hover:border-white cursor-pointer xs:text-2xl',
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
              <div key={item.id} className='flex flex-col items-center xs:gap-4 xs:px-36'>
                <h2 className='uppercase text-lightBlue font-barlow-condensed text-sm mb-2 tracking-[2.362px] xs:tracking-[2.7 px] xs:text-base'>
                  THE TERMINOLOGY…
                </h2>
                <h1 className='text-2xl font-bellefair uppercase mb-4 xs:text-[40px]'>
                  {item.title}
                </h1>
                <p className='text-lightBlue text-center text-[15px] xs:text-base'>{item.desc}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Moons
