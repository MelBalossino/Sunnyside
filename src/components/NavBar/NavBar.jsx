import burgerMenu from '../../assets/icon-hamburger.svg'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div>
        <img src={burgerMenu} alt="Hamburger icon" />
        </div>
    </nav>
  )
}
