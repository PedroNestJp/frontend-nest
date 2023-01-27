import React from "react"
import "../Login/Login.css"
import LoginComponent from "../../components/LoginComponents"
import NavbarShortComponent from "../../components/NavbarShortComponent"

const Login = () => {
 return(
  <>
    <NavbarShortComponent/>
    <LoginComponent/>
  </>
 )
}

export default Login