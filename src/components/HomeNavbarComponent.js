import "../pages/home/Home.css"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import {logo } from "../img/imgs"
import * as BsIcons from 'react-icons/bs'
import * as RxIcons from 'react-icons/rx'
import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'

const HomeNavbarComponente = () =>{
    return(
<div className="navbarhome">

        {/* <div>
            <select className='selection'>
                <option value='escolha'> escolha </option>
            </select>
        </div> */} 
          <Navbar/>

          <Link to='/home'>
            <img 
              className="logoNestHeaderHome" 
              src={logo} 
              alt='logo' 
              />
          </Link>

          <div className="search">
            <input 
              className="inputSearch" 
              id="busque-aqui" 
              autoComplete="off" 
              placeholder="Busque aqui" 
              type="text">
            </input>

            <button className="button-submit" >
              <Link 
                to='/products' type='submit'  
                className='icon-lupa'
                alt='icon-lupa'
                title="icon-lupa"
                > 
                <RxIcons.RxMagnifyingGlass/>
              </Link>
            </button>
          </div>

          <div className="areaProfile"> 

            <Link 
              to='/myAccount' 
              alt="iconProfile" 
              className="iconProfileHome" 
            >
                <BsIcons.BsPersonCircle/>
            </Link>
            <span 
              className="text-profile-home">
              Faça seu{' '}
              <Link 
                to='/login' 
                id="link-login-header-home" 
                title="link-login-header" 
                className="link-login-home" 
                href="/login">
                LOGIN 
              </Link>
              {' '}ou
              <Link 
                to='/register' 
                id="link-cadastre-se-home" 
                title="link-cadastre-se" 
                className="link-cadastre-se-home" 
                href="/register">
                {' '}CADASTRE-SE
              </Link>
            </span>
          </div>

          <div className="iconsNavHome">
            <span> 
              <Link 
                to='/ShoppingCart'
                className="icon-shoppingCart" 
                id="iconShoppingCart" 
                title="icon-shoppingCart"  
                src="../assets/icons/icon-shoppingCart.png" 
                alt="iconShoCar">
                <FaIcons.FaShoppingCart/>
              </Link>
            </span>
            <span> 
              <Link 
                to='https://api.whatsapp.com/message/JVU7KU5D3563D1?autoload=1&app_absent=0'
                className="icon-support"
                id="iconSupporte"
                title="iconSupporte" 
                src="../assets/icons/icon-support.png" 
                alt="iconSupport">
                <RiIcons.RiCustomerService2Fill/> 
              </Link>
            </span>
            <span >
              <Link 
                to='/Favorites'
                className="favoriteIconNav" 
                id="favoriteIconNav" 
                title="Favoriteicon" 
                src="../assets/icons/favoriteIcon.png" 
                alt="Favorite Icon">
                <BsIcons.BsHeartFill/>
              </Link>
            </span>
          </div>
  </div>
  )
  }

  export {HomeNavbarComponente}