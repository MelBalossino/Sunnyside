import logo from '../../assets/logo.svg'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <header className=" absolute w-full px-6 pt-8 flex place-content-between font-Barlow ">
            <img src={logo} alt="Logo" />
            <NavBar />
        </header>
    )
}

export default Header
