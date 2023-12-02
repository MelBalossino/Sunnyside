import logo from '../../assets/logo.svg'
import { NavBar } from '../NavBar/NavBar'

export const Header = () => {
  return (
    <header class="bg-black">
    <img src={logo} alt="Logo" />
    <NavBar />
    </header>
  )
}
