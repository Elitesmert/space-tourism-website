import React from 'react'
import { useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='px-6 pt-6 flex justify-between items-center fixed w-full'>
      <div>
        <Link to='/'>
          <img src='./assets/shared/logo.svg' alt='' className='w-10 h-10' />
        </Link>
      </div>

      <div>
        {!isOpen && (
          <img
            src='./assets/shared/icon-hamburger.svg'
            alt=''
            onClick={toggleMenu}
            className={classNames('cursor-pointer xs:hidden', {
              hidden: isOpen,
            })}
          />
        )}
      </div>
      <div
        className={classNames(
          'xs:hidden w-0 h-screen absolute bg-white/5 backdrop-blur-2xl right-0 top-0 flex flex-col text-white !ease-in-out overflow-hidden transition-width pt-8 gap-16',
          {
            '!w-3/4': isOpen,
          }
        )}
      >
        <div>
          <img
            src='./assets/shared/icon-close.svg'
            alt=''
            onClick={toggleMenu}
            className='cursor-pointer ml-auto mr-7'
          />
        </div>

        <ul className='flex flex-col font-barlow-condensed pl-8 gap-8'>
          <Link onClick={toggleMenu} to='/' className='flex text-base gap-3'>
            <span className='font-bold'>00</span>
            <li className='uppercase'>HOME</li>
          </Link>
          <Link onClick={toggleMenu} to='/moons' className='flex text-base gap-3'>
            <span className='font-bold'>01</span>
            <li className='uppercase'>DESTINATION</li>
          </Link>
          <Link onClick={toggleMenu} to='/crew' className='flex text-base gap-3'>
            <span className='font-bold'>02</span>
            <li className='uppercase'>CREW</li>
          </Link>
          <Link onClick={toggleMenu} to='/technology' className='flex text-base gap-3'>
            <span className='font-bold'>03</span>
            <li className='uppercase'>TECHNOLOGY</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header
