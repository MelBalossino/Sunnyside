import logo from '../../assets/logo.svg'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <header className=" absolute w-full px-6 pt-8 font-Barlow ">
            <div className='flex place-content-between'>
                <img src={logo} alt="Logo" />
                <NavBar />
            </div>
        </header>
    )
}

export default Header
