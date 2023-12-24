import classNames from 'classnames'
import React from 'react'
import { useState } from 'react'

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState(1)

  const containerStyle = {
    backgroundImage: 'url("./assets/crew/background-crew-mobile.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  }
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
            style={{ backgroundImage: `url(${crew[currentCrew - 1].image})` }}
            className='bg-contain bg-no-repeat w-full h-full bg-center duration-300 ease-linear'
          />
        </div>

        <div className='flex gap-4'>
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

        <div className='flex flex-col items-center'>
          {crew.map((item) => {
            if (item.id === currentCrew) {
              return (
                <>
                  <h2 className='uppercase text-white/50 font-bellefair text-base mb-2'>
                    {item.role}
                  </h2>
                  <h1 className='text-2xl font-bellefair uppercase mb-4'>{item.name}</h1>
                  <p className='text-lightBlue text-center'>{item.desc}</p>
                </>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Crew
