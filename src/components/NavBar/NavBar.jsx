import burgerMenu from '../../assets/icon-hamburger.svg'
import { useState } from 'react'

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(prevState => !prevState)
  }

  return (
    <nav className=" ">
      <ul className={`bg-slate-50 py-[28px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-b-white after:border-r-white after:border-l-transparent text-Dark-grayish-blue text-xl ${showMenu ? "flex" : "hidden"}`}>
        <li className=' cursor-pointer'>About</li>
        <li className=' cursor-pointer'>Services</li>
        <li className=' cursor-pointer'>Projects</li>
        <li className=' cursor-pointer bg-Yellow w-[120px] h-[46px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue '>Contact</li>
      </ul>
      <div className=' cursor-pointer' onClick={handleClick}>
        <img src={burgerMenu} alt="Hamburger menu" />
      </div>
    </nav>
  )
}

export default NavBar
