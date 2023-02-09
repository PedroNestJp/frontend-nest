import React from "react"
import '../product/ProductScreen.css'
import { ContactLine1 } from "../../components/ContactLines"
import { Footer, SubFooter } from "../../components/FooterComponents"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import NestpcGamer_1Component from "../../components/productsComponents/NestpcGamer-1Component"

const NestpcGamer_1 = () => {
 return(
  <>
    <NavbarShortComponent/>
    <NestpcGamer_1Component/>
    <ContactLine1/>
    <Footer/>
    <SubFooter/>
  </>
 )
}

export default NestpcGamer_1