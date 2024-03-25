import './header.css'
import Logo from '../assets/cat 1.png'
const Header = () => {
    return (
        <header>
            <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li>LOGIN</li>
                    <li>REGISTRAR</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header