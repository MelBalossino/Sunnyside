import burgerMenu from '../../assets/icon-hamburger.svg'

export const NavBar = () => {
  return (
    <nav className=" ">
        <ul className='bg-slate-50 w-[329px] h-[305px] absolute left-0 right-0 mx-auto
    top-[106px] flex flex-col items-center place-content-around 
    after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-b-white after:border-r-white after:border-l-transparent'>
            <li className=' cursor-pointer'>About</li>
            <li className=' cursor-pointer'>Services</li>
            <li className=' cursor-pointer'>Projects</li>
            <li className=' cursor-pointer'>Contact</li>
        </ul>
        <div className=' '>
        <img src={burgerMenu} alt="Hamburger icon" />
        </div>
    </nav>
  )
}
