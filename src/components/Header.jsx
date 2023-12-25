import classNames from 'classnames'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='px-6 pt-6 xs:pt-0 xs:px-0 xs:pl-12 flex justify-between items-center fixed w-full md:mt-10'>
      <div>
        <Link to='/'>
          <img src='./assets/shared/logo.svg' alt='' className='w-10 h-10 xs:w-12 xs:h-12' />
        </Link>
      </div>
      <div className='h-[1px] bg-white/25 absolute w-[37%] left-[11.1%] z-10 hidden md:block' />
      <div className='hidden xs:block bg-black/5 backdrop-blur-[40px] h-24 px-12 md:pr-[167px] md:pl-[123px]'>
        <ul className='hidden xs:flex gap-8 font-barlow-condensed text-sm md:text-base h-full tracking-[2.362px]'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              classNames(
                'flex h-full border-b-3 border-b-transparent hover:border-b-white/50 items-center gap-[11px]',
                {
                  'border-b-white': isActive,
                }
              )
            }
          >
            <span className='hidden md:block'>00</span>
            <li className='uppercase self-center'>HOME</li>
          </NavLink>
          <NavLink
            to='/moons'
            className={({ isActive }) =>
              classNames(
                'flex h-full border-b-3 border-b-transparent hover:border-b-white/50 items-center gap-[11px]',
                {
                  'border-b-white': isActive,
                }
              )
            }
          >
            {' '}
            <span className='hidden md:block'>01</span>
            <li className='uppercase self-center'>DESTINATION</li>
          </NavLink>
          <NavLink
            to='/crew'
            className={({ isActive }) =>
              classNames(
                'flex h-full border-b-3 border-b-transparent hover:border-b-white/50 items-center gap-[11px]',
                {
                  'border-b-white': isActive,
                }
              )
            }
          >
            {' '}
            <span className='hidden md:block'>02</span>
            <li className='uppercase self-center'>CREW</li>
          </NavLink>
          <NavLink
            to='/technology'
            className={({ isActive }) =>
              classNames(
                'flex h-full border-b-3 border-b-transparent hover:border-b-white/50 items-center gap-[11px]',
                {
                  'border-b-white': isActive,
                }
              )
            }
          >
            {' '}
            <span className='hidden md:block'>03</span>
            <li className='uppercase self-center'>TECHNOLOGY</li>
          </NavLink>
        </ul>
      </div>

      <div className='xs:hidden'>
        {!isOpen && (
          <img
            src='./assets/shared/icon-hamburger.svg'
            alt=''
            onClick={toggleMenu}
            className={classNames('cursor-pointer', {
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
