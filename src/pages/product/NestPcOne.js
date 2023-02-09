import React from "react"
import '../product/ProductScreen.css'
import { ContactLine1 } from "../../components/ContactLines"
import { Footer, SubFooter } from "../../components/FooterComponents"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import NestPcOneComponent from "../../components/productsComponents/NestPcOne"

const NestPcOne = () => {
 return(
  <>
    <NavbarShortComponent/>
    <NestPcOneComponent/>
    <ContactLine1/>
    <Footer/>
    <SubFooter/>
  </>
 )
}

export default NestPcOne