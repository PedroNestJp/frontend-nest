import React from "react"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import RegisterComponents from "../../components/RegisterComponents"
import {Footer, SubFooter} from '../../components/FooterComponents'
import "../register/Register.css"
import { ContactLine2 } from '../../components/ContactLines'

const register = () => {
 return(
  <>
    <NavbarShortComponent/>
    <RegisterComponents/>
    <ContactLine2/>
    <Footer/>
    <SubFooter/>
  </>
 )
}

export default register