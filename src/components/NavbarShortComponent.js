import { Link } from 'react-router-dom'
import {iconProfile, logo } from '../img/imgs'


const NavbarShortComponent = () =>{
    return(

    <div className="navbarShort">
        <a href="./home" rel="noopener noreferrer">
            <img className="logoNestHeader" id="logoNestHeader" title="logoNestHeader"  alt="logoNestHeader" src={logo} />
        </a>
        <div className='areaProfileNavShort'>
            <a href="./myAccount.html">               
                <i className="fa-solid fa-user"></i>
            </a>
            <span className="textProfileNavShort">
                    Faça seu{' '}
                <a className="linkLoginNavShort" id="linkLoginNavShort" title="linkLoginNavShort" href="./login">
                    LOGIN{' '}
                </a>
                    ou{' '}
                <a className="linkRegisterNavShort" id="linkRegisterNavShort" title="linkRegisterNavShort" href="/register">
                    CADASTRE-SE
                </a>
            </span>
        </div>     
</div>
)
} 
export default NavbarShortComponent