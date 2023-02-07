import React from 'react'
import '../pages/home/Home'
import "../pages/home/Home.css"
import {
        logo, iconChat, iconFavorites, imgAmdType,typepc1, typepc2, typepc3, 
        gab1, gab2,gab3,imgIntelType, imgBbdPc, imgBbdMonitor, imgBbdPeripherals, imgBbdHardware
} from '../img/imgs'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HomeScComponente = () => {
return(
<>
    <section className="adsDiv"> 
        <h1 className="ads-text "> ADS </h1>
        <img className="ads-log" src={logo} alt="logoNest"/>
        <h1 className="ads-text "> ADS </h1> 
    </section> 

    <span> 
      <Link 
        className="icon-chat"
        target="_blank" 
        rel='noreferrer' 
        to="https://api.whatsapp.com/message/JVU7KU5D3563D1?autoload=1&app_absent=0"  
        alt="Chat do Whatsapp">
        <RiIcons.RiWhatsappFill/> 
      </Link>  
    </span>

<section className="container"> 
        <div id="typepc-text" title="typepc-text" className="typepc-text"> QUAL É SEU TIPO DE PC? </div>

        <div className='imgsTypesPcs'>
            <div className='divTypePc1'>
                <img className="img-typepc-1" srcSet={typepc1} alt=""/>
                <span className="textTypePc-1 "> <a id='textTypePc' href='./productScreen'> GAMER </a> </span>
            </div>
            <div className='divTypePc2'>
                <img className="img-typepc-2" srcSet={typepc2} alt=""/>
                <span className="textTypePc-2 "> <a id='textTypePc' href='./productScreen'> OFFICE PREMIUM </a> </span>
            </div>
            <div className='divTypePc3'>
                <img className="img-typepc-3" srcSet={typepc3} alt=""/>
                <span className="textTypePc-3 "> <a id='textTypePc' href='./productScreen'> OFFICE </a> </span>
            </div>
        </div>
</section>     

<section className="container-2" title="container-2" >
      
        <div id="hl" title="highlights" className="hl-text">  DESTAQUES </div>
        <div className='highLightsBoxs' id='highlightsBoxs'>
            <div className="hl-1 styleBox"> 
                 <Link
                    to='/favorites'
                    className="favoriteIcon"  
                    alt="">
                    <BsIcons.BsHeartFill/>
                </Link>
                <img className="img-hl-1" srcSet={gab1} src="../assets/gabinetes/gab1.png" alt=""/>
                <div className="descValue  desc-hl-1">
                    <span className="oldPrice-hl-1 oldPrice-hl"> DE R$2.999,00 POR: </span>
                    <span className=" currentPrice-hl-1 currentPrice-hl"> R$2.599,00 </span>
                    <span className=" installmentPrice-hl-1 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
                </div>
                <button className="button-buy"> VER MAIS </button>
            </div>

            <div className="hl-2 styleBox">
                <Link
                    to='/favorites'
                    className="favoriteIcon"  
                    alt="">
                    <BsIcons.BsHeartFill/>
                </Link>
                <img className="img-hl-2" srcSet={gab2} src="../assets/gabinetes/gab2.png" alt=""/>
                <div className='descValue desc-hl-2'>    
                    <span className="oldPrice-hl-3 oldPrice-hl"> DE R$2.999,00 POR: </span>
                    <span className=" currentPrice-hl-3 currentPrice-hl"> R$2.599,00 </span>
                    <span className=" installmentPrice-hl-3 installmentPrice-hl "> OU 12X DE R$280,00 </span>
                </div>
                <button className="button-buy"> VER MAIS </button>
            </div>

            <div className="hl-3 styleBox"> 
                <Link
                    to='/favorites'
                    className="favoriteIcon"  
                    alt="">
                    <BsIcons.BsHeartFill/>
                </Link>
                <img className="img-hl-3" srcSet={gab3} src="../assets/gabinetes/gab3.png" alt=""/>
                <div className="descValue desc-hl-3">  
                    <span className="oldPrice-hl-3 oldPrice-hl"> DE R$2.999,00 POR: </span>
                    <span className=" currentPrice-hl-3 currentPrice-hl"> R$2.599,00 </span>
                    <span className=" installmentPrice-hl-3 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
                </div> 
                <button className="button-buy"> VER MAIS </button> 
            </div>
        </div>
</section>

<section className='buyByPlatform' id='buyByPlatformHome'>
        <div className="text-buy-by-platform"> COMPRE POR PLATAFORMA </div>
        <div className='divBuyByPlatform'>
            <div className='divPlatformIntel' id='textPlatform'>            
                <span className="text-platform-intel"> INTEL </span>
                <img className="platform-intel" srcSet={imgIntelType} src="../assets/icons/img-intel-processor.png" alt="Plataforma Intel"/>
            </div>
            <div className='divPlatformAmd' id='textPlatform'>
                <span className="text-platform-amd"> AMD </span>
                <img className="platform-amd" srcSet={imgAmdType} src="../assets/icons/img-amd-processor.png" alt="Plataforma AMD"/>
            </div>
        </div>
</section>
  
<section className="container-3" id="container-3" title="container-3">
    <div className="bs-text"> MAIS VENDIDOS </div>
    <div className='bestSelersBox' id='highlightsBoxs'>
        <div className="bs-1 styleBox"> 
                <Link
                    to='/favorites'
                    className="favoriteIcon"  
                    alt="">
                    <BsIcons.BsHeartFill/>
                </Link>
            <img className="img-bs-1" srcSet={gab1} src="../assets/gabinetes/gab1.png" alt=""/>
            <div className="descValue desc-bs-1"> 
                <span className=" oldPrice-bs-1 oldPrice"> DE R$2.999,00 POR: </span>
                <span className=" currentPrice-bs-1 currentPrice"> R$2.599,00 </span>
                <span className=" installmentPrice-bs-1 installmentPrice "> OU 12X DE R$280,00 </span>   
            </div>
            <button className="button-buy"> VER MAIS  </button>
        </div>

        <div className="bs-2 styleBox">
                <Link
                    to='/favorites'
                    className="favoriteIcon"  
                    alt="">
                    <BsIcons.BsHeartFill/>
                </Link> 
            <img className="img-bs-2" srcSet={gab2} src="../assets/gabinetes/gab2.png" alt=""/>
            <div className="descValue desc-bs-2"> 
                <span className=" oldPrice-bs-2 oldPrice"> DE R$2.999,00 POR: </span>
                <span className=" currentPrice-bs-2 currentPrice"> R$2.599,00 </span>
                <span className=" installmentPrice-bs-2 installmentPrice "> OU 12X DE R$280,00 </span>   
            </div>
            <button className="button-buy"> VER MAIS  </button>
        </div>

        <div className="bs-3 styleBox">  
                <Link
                    to='/favorites'
                    className="favoriteIcon"  
                    alt="">
                    <BsIcons.BsHeartFill/>
                </Link>
            <img className="img-bs-3" srcSet={gab3} src="../assets/gabinetes/gab3.png" alt=""/>
            <div className="descValue desc-bs-3"> 
                <span className=" oldPrice-bs-3 oldPrice"> DE R$2.999,00 POR: </span>
                <span className=" currentPrice-bs-3 currentPrice"> R$2.599,00 </span>
                <span className=" installmentPrice-bs-3 installmentPrice "> OU 12X DE R$280,00 </span>  
            </div>
            <button className="button-buy"> VER MAIS  </button>
        </div>
    </div>
</section>

<section className='departments' id='departmentsHome'>
    <div className="departmentsText"> 🗄DEPARTAMENTOS </div> 
    
    <div className='bbdBoxs'>
        <div className="bbd-1 styleBox-bbd">
            <img className="img-bbd-1" srcSet={imgBbdPc} src="../assets/pcs.png" alt=""/>
            <span className="bbd-text bbd-text-1"> PCS COMPLETOS </span>
        </div>
         
        <div className="bbd-2 styleBox-bbd"> 
            <img  className="img-bbd-2" srcSet={imgBbdMonitor} src="../assets/monitores.png" alt=""/> 
            <span className="bbd-text bbd-text-2"> MONITORES </span>  
        </div>

        <div className="bbd-3 styleBox-bbd">
            <img className="img-bbd-3" srcSet={imgBbdPeripherals} src="../assets/perifericos.png" alt=""/> 
            <span className="bbd-text bbd-text-3"> PERIFERICOS </span> 
        </div>

        <div className="bbd-4 styleBox-bbd">
            <img className="img-bbd-4" srcSet={imgBbdHardware} src="../assets/hardware.png" alt="imgHardware"/>
            <span className="bbd-text bbd-text-4"> HARDWARE </span> 
        </div>
    </div> 
</section>
</>
)
}

export { HomeScComponente }