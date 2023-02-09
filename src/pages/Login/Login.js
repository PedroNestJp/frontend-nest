import React from "react"
import "../Login/Login.css"
import LoginComponent from "../../components/LoginComponents"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import { Footer, SubFooter } from "../../components/FooterComponents"


const Login = () => {
 return(
  <>
    <NavbarShortComponent/>
    <LoginComponent/>
    <Footer/>
    <SubFooter/>
  </>
 )
}

export default Login