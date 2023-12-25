import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(1)

  const crew = [
    {
      id: 1,
      name: 'Douglas Hurley',
      image: './assets/crew/image-douglas-hurley.png',
      role: 'Commander',
      desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
      id: 2,
      name: 'Mark Shuttleworth',
      image: './assets/crew/image-mark-shuttleworth.png',
      role: 'Mission Specialist',
      desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
      id: 3,
      name: 'Victor Glover',
      image: './assets/crew/image-victor-glover.png',
      role: 'Pilot',
      desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
      id: 4,
      name: 'Anousheh Ansari',
      image: './assets/crew/image-anousheh-ansari.png',
      role: 'Flight Engineer',
      desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
  ]

  return (
    <div className='bg-[url("/assets/crew/background-crew-mobile.jpg")] xs:bg-[url("/assets/crew/background-crew-tablet.jpg")] md:bg-[url("/assets/crew/background-crew-desktop.jpg")] bg-cover bg-no-repeat bg-center min-h-screen  pt-[88px] px-6 xs:px-9 xs:pt-[136px] md:pt-[212px] md:px-[165px]'>
      <div className='mb-8 xs:mb-[60px]'>
        <h2 className='font-barlow-condensed flex gap-[18px] justify-center tracking-[2.7px] xs:tracking-[3.375px] uppercase xs:justify-start xs:text-xl'>
          <span className='font-bold opacity-25'>02</span>
          Meet your crew
        </h2>
      </div>

      <div className='flex flex-col xs:flex-col-reverse items-center gap-8 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-x-20'>
        <div className='border-b-[#383B4B] w-full h-[223px] xs:h-[532px] xs:border-none border-b md:row-span-3 md:col-start-2 md:row-start-1'>
          <div
            style={{ backgroundImage: `url(${crew[currentCrew - 1].image})` }}
            className='bg-contain bg-no-repeat w-full h-full bg-center duration-300 ease-linear'
          />
        </div>

        <div className='flex gap-4 md:col-start-1 md:row-start-3'>
          {crew.map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentCrew(item.id)}
              className={classNames('w-[10px] h-[10px] rounded-full bg-white/15', {
                '!bg-white': item.id === currentCrew,
              })}
            />
          ))}
        </div>

        {crew.map((item) => {
          if (item.id === currentCrew) {
            return (
              <div
                key={item.id}
                className='flex flex-col items-center xs:gap-2 xs:h-[182px] md:-[712px] md:col-start-1 md:row-span-2 md:items-start md:h-[271px] md:self-end md:justify-between'
              >
                <h2 className='uppercase text-white/50 font-bellefair text-base mb-2 xs:text-2xl md:text-[32px]'>
                  {item.role}
                </h2>
                <h1 className='text-2xl font-bellefair uppercase mb-4 xs:text-[40px] xs:mb-4 md:text-[56px] md:leading-none'>
                  {item.name}
                </h1>
                <p className='text-lightBlue text-center xs:text-base md:text-start md:text-lg'>
                  {item.desc}
                </p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Crew
