import React from "react"
import FinalizeOrderComponent from '../../components/FinalizeOrderComponent'
import NavbarShortComponent from "../../components/NavbarShortComponent"
import {Footer, SubFooter} from '../../components/FooterComponents'

const FinalizeOrderScreen = () =>{
    return(
        <>
            <NavbarShortComponent/>
            <FinalizeOrderComponent/>
            <Footer/>
            <SubFooter/>
        </>
    )
}

export default FinalizeOrderScreen