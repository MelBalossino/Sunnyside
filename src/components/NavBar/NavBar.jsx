import burgerMenu from '../../assets/icon-hamburger.svg'
import { useState } from 'react'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <nav className="sm:h-[24px]">
      <ul className={`${showMenu ? "flex" : "hidden"} bg-slate-50 py-[28px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-b-white after:border-r-white after:border-l-transparent text-Dark-grayish-blue text-xl z-10
      
      sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:mt-0
      sm:py-0 sm:relative sm:text-white
      
      md:w-[500px]`}>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Services</li>
        <li className='cursor-pointer'>Projects</li>
        <button className='cursor-pointer bg-Yellow w-[135px] h-[46px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue text-sm sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'>CONTACT</button>
      </ul>
      <div className='cursor-pointer sm:hidden' onClick={handleClick}>
        <img src={burgerMenu} alt="Hamburger menu" />
      </div>
    </nav>
  )
}

export default NavBar
