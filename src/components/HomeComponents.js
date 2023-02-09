import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/home/Home'
import "../pages/home/Home.css"
import {
        logo,imgAmdType,typepc1, typepc2, typepc3,gamdiasAuraGc2, 
        gab1, gab2,gab3,imgIntelType, imgBbdPc, imgBbdMonitor, imgBbdPeripherals, imgBbdHardware
} from '../img/imgs'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

const HomeScComponente = () => {
return(
<>
    <section className="adsDiv"> 
        <h1 className="ads-text "> ADS </h1>
        <img className="ads-log" src={logo} alt="logo da Nest"/>
        <h1 className="ads-text "> ADS </h1> 
    </section> 

    <span className='chatWhatsapp'> 
      <Link 
        to="https://api.whatsapp.com/message/JVU7KU5D3563D1?autoload=1&app_absent=0" 
        target="_blank" 
        rel='noreferrer' 
        >
        <RiIcons.RiWhatsappFill 
            alt="Chat do Whatsapp"
            className="icon-chat" 
        /> 
      </Link>  
    </span>

<section className="container"> 
        <div 
            id="typepc-text" 
            title="typepc-text" 
            className="typepc-text" 
            alt='QUAL É SEU TIPO DE PC?'
            > QUAL É SEU TIPO DE PC? 
        </div>

        <div className='imgsTypesPcs'>
            <div className='divTypePc1'>
                <Link to='/productScreen'>
                    <img
                        className="img-typepc-1" 
                        src={typepc1} 
                        alt="PC GAMER">
                    </img>
                    <span 
                        className="textTypePc-1 " 
                        id='textTypePc'>
                         GAMER 
                    </span>
                </Link>
            </div>
            
            <div className='divTypePc2'>
                <Link to='/productScreen'>
                    <img
                        className="img-typepc-2" 
                        src={typepc2} 
                        alt="PC OFFICE PREMIUM">
                    </img>
                    <span 
                        className="textTypePc-2 " 
                        id='textTypePc'>
                        OFFICE PREMIUM
                    </span>
                </Link>
            </div>

            <div className='divTypePc3'>
                <Link to='/productScreen'>
                    <img
                        className="img-typepc-3" 
                        src={typepc3} 
                        alt="PC OFFICE">
                    </img>
                    <span 
                        className="textTypePc-3 " 
                        id='textTypePc'>
                         OFFICE 
                    </span>
                </Link>
            </div>
        </div>
</section>     

<section className="container-2" title="container-2" >
      
        <div 
            id="hl" 
            title="highlights" 
            className="hl-text"
            >  DESTAQUES 
        </div>
        <div className='highLightsBoxs' id='highlightsBoxs'>
            <div className="hl-1 styleBox"> 
                 <Link
                    to='/login'
                    className="favoriteIcon"  
                    alt="Icone Favoitos">
                    <BsIcons.BsHeartFill/>
                </Link>
                <Link to='/nestpcGamer_1'>
                <img 
                    className="img-hl-1" 
                    srcSet={gab1} 
                    alt=""
                />
                </Link>

                <div className="descValue  desc-hl-1">
                    <span className='descriptionProduct' > NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6, 16GB RAM 3200MHZ 2X8GB, SSD 512GB, FONTE 500W 80+ BRONZE, 3 FANS RGB</span>
                    <span className="oldPrice-hl-1 oldPrice-hl"> DE R$2.999,00 POR: </span>
                    <span className=" currentPrice-hl-1 currentPrice-hl"> R$2.599,00 </span>
                    <span className=" installmentPrice-hl-1 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
                </div>
                <Link className='button-buy' to='/nestPcOne'>
                VER MAIS 
                    <button> </button>
                </Link>
            </div>

            <div className="hl-2 styleBox">
                <Link
                    to='/login'
                    className="favoriteIcon"  
                    alt="Icone Favoitos">
                    <BsIcons.BsHeartFill/>
                </Link>
                <img 
                    className="img-hl-2" 
                    srcSet={gab2} 
                    alt=""
                />
                <div className='descValue desc-hl-2'>
                    <span className='descriptionProduct' > NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6, 16GB RAM 3200MHZ 2X8GB, SSD 512GB, FONTE 500W 80+ BRONZE, 3 FANS RGB</span>
                    <span className="oldPrice-hl-3 oldPrice-hl"> DE R$2.999,00 POR: </span>
                    <span className=" currentPrice-hl-3 currentPrice-hl"> R$2.599,00 </span>
                    <span className=" installmentPrice-hl-3 installmentPrice-hl "> OU 12X DE R$280,00 </span>
                </div>
                <Link className='button-buy' to='/nestPcOne'>
                VER MAIS 
                    <button> </button>
                </Link>
            </div>


            <div className="hl-3 styleBox"> 
                <Link
                    to='/login'
                    className="favoriteIcon"  
                    alt="Icone Favoitos">
                    <BsIcons.BsHeartFill/>
                </Link>
                <img 
                    className="img-hl-3" 
                    srcSet={gab3} 
                    alt=""
                />
                <div className="descValue desc-hl-3">  
                    <span className='descriptionProduct' > NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6, 16GB RAM 3200MHZ 2X8GB, SSD 512GB, FONTE 500W 80+ BRONZE, 3 FANS RGB</span>
                    <span className="oldPrice-hl-3 oldPrice-hl"> DE R$2.999,00 POR: </span>
                    <span className=" currentPrice-hl-3 currentPrice-hl"> R$2.599,00 </span>
                    <span className=" installmentPrice-hl-3 installmentPrice-hl "> OU 12X DE R$280,00 </span>   
                </div> 
                <Link className='button-buy' to='/nestPcOne'>
                VER MAIS 
                    <button> </button>
                </Link>
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
                    to='/login'
                    className="favoriteIcon"  
                    alt="Icone Favoitos">
                    <BsIcons.BsHeartFill/>
                </Link>
            <Link to='/nestPcOne'>
            <img 
                className="img-bs-1" 
                srcSet={gamdiasAuraGc2} 
                alt="NESTPC ONE"
            />
            </Link>
            <div className="descValue desc-bs-1"> 
                <span className='descriptionProduct' > NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6, 16GB RAM 3200MHZ 2X8GB, SSD 512GB, FONTE 500W 80+ BRONZE, 3 FANS RGB</span>
                <span className=" oldPrice-bs-1 oldPrice"> DE R$3.999,00 POR: </span>
                <span className=" currentPrice-bs-1 currentPrice"> R$3.399,00 </span>
                <span className=" installmentPrice-bs-1 installmentPrice "> EM 12X DE R$245,00 </span>
            </div>
            <Link className='button-buy' to='/nestPcOne'>
            VER MAIS 
                <button> </button>
            </Link>
        </div>


        <div className="bs-2 styleBox">
            <Link
                to='/login'
                className="favoriteIcon"  
                alt="Icone Favoitos">
                <BsIcons.BsHeartFill/>
            </Link>
            <img
                className="img-bs-2" 
                srcSet={gab2} 
                alt=""
            />
            <div className="descValue desc-bs-2"> 
                <span className='descriptionProduct' > NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6, 16GB RAM 3200MHZ 2X8GB, SSD 512GB, FONTE 500W 80+ BRONZE, 3 FANS RGB</span>
                <span className=" oldPrice-bs-2 oldPrice"> DE R$2.999,00 POR: </span>
                <span className=" currentPrice-bs-2 currentPrice"> R$2.599,00 </span>
                <span className=" installmentPrice-bs-2 installmentPrice "> OU 12X DE R$280,00 </span>   
            </div>
            <Link className='button-buy' to='/nestPcOne'>
            VER MAIS 
                <button> </button>
            </Link>
        </div>

        <div className="bs-3 styleBox">  
                <Link
                    to='/login'
                    className="favoriteIcon"  
                    alt="Icone Favoitos">
                    <BsIcons.BsHeartFill/>
                </Link>
            <img 
                className="img-bs-3" 
                srcSet={gab3} 
                alt=""
            />
            <div className="descValue desc-bs-3">
                <span className='descriptionProduct' > NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6, 16GB RAM 3200MHZ 2X8GB, SSD 512GB, FONTE 500W 80+ BRONZE, 3 FANS RGB</span>
                <span className=" oldPrice-bs-3 oldPrice"> DE R$2.999,00 POR: </span>
                <span className=" currentPrice-bs-3 currentPrice"> R$2.599,00 </span>
                <span className=" installmentPrice-bs-3 installmentPrice "> OU 12X DE R$280,00 </span>  
            </div>
            <Link className='button-buy' to='/nestPcOne'>
            VER MAIS 
                <button> </button>
            </Link>
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