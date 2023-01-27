import { iconProfile, logo, menuHamburguer,iconShopCart, iconSupport, iconFavorites, iconLupa  } from "../img/imgs"
import "../pages/home/Home.css"
import { Link } from "react-router-dom"


const HomeNavbarComponente = () =>{
    return(
<div className="navbarhome">

        {/* <div>
            <select className='selection'>
                <option value='escolha'> escolha </option>
            </select>
        </div> */}
          <span > 
            <img srcSet={menuHamburguer} className="menuHamburguer" src="../assets/icons/menuHamburguer.png" alt=""/> 
          </span>

          <Link to='/home'>
            <img className="logoNestHeaderHome" src={logo} alt='logo' />
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
                <img srcSet={iconLupa} 
                  id="icon-lupa" 
                  title="icon-lupa" 
                  className="icon-lupa" 
                  type="submit"  
                  alt="icon-lupa"/>
              </button>
          </div>

          <div className="areaProfile"> 
              <Link to='/myAccount'>
                <img 
                  className="iconProfileHome" 
                  src={iconProfile} 
                  alt="iconProfile"/> 
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
                to='/ShoppingCart'> 
                <img 
                  srcSet={iconShopCart} 
                  className="icon-shoppingCart" 
                  id="iconShoppingCart" 
                  title="icon-shoppingCart"  
                  src="../assets/icons/icon-shoppingCart.png" 
                  alt="iconShoCar"/>
              </Link>
            </span>
            <span> 
                <Link 
                  to='/Support'>
                    <img 
                      srcSet={iconSupport} 
                      className="icon-support" 
                      id="iconSupporte" 
                      title="iconSupporte" 
                      src="../assets/icons/icon-support.png" 
                      alt="iconSupport"/>
                </Link>
            </span>
            <span > 
                <Link 
                  to='/Favorites'>
                    <img 
                      srcSet={iconFavorites} 
                      className="favoriteIcon" 
                      id="favoriteIcon" 
                      title="Favoriteicon" 
                      src="../assets/icons/favoriteIcon.png" 
                      alt="Favorite Icon"/>
                </Link>
            </span>
          </div>
  </div>
  )
  }

  export {HomeNavbarComponente}