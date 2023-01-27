import React from "react"
import '../product/ProductScreen.css'
import { ContactLine1 } from "../../components/ContactLines"
import { Footer, SubFooter } from "../../components/FooterComponents"
import NavbarShortComponent from "../../components/NavbarShortComponent"
import ProductScreenComponent from "../../components/ProductScreenComponents"

const ProductScreen = () => {
 return(
  <>
    <NavbarShortComponent/>
    <ProductScreenComponent/>
    <ContactLine1/>
    <Footer/>
    <SubFooter/>
  </>
 )
}

export default ProductScreen