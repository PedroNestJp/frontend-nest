import React from "react"
import {HomeScComponente} from '../../components/HomeComponents'
import { HomeNavbarComponente } from "../../components/HomeNavbarComponent"
import { ContactLine1, ContactLine2 } from "../../components/ContactLines"
import "../home/Home.css"
import {Footer, SubFooter} from "../../components/FooterComponents"


const Home = () => {
    return(
            <div>
                <HomeNavbarComponente/>
                <ContactLine1/>
                <HomeScComponente/>
                <ContactLine2/>
                <Footer/>
                <SubFooter/>
                
            </div>
    )
}
export default Home