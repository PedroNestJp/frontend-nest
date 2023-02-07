import React from "react"
import '../product/ProductScreen.css'
import { ContactLine1 } from "../../components/ContactLines"
import { Footer, SubFooter } from "../../components/FooterComponents"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import NestPcOneSc from "../../components/productsComponents/NestPcOne"

const ProductScreen = () => {
 return(
  <>
    <NavbarShortComponent/>
    <NestPcOneSc/>
    <ContactLine1/>
    <Footer/>
    <SubFooter/>
  </>
 )
}

export default ProductScreen