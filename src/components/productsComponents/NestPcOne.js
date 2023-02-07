import "../../pages/product/ProductScreen.css"
import { iconShopCart, iconTime, gab1, gamdiasAuraGc2  } from '../../img/imgs'

const NestPcOneSc = () => {
    return(

        <div className="mainContentProduct">
            <div className="containerProductFather">
                <section className='containerProductChild1'>
                    <div className="imgProduct">
                        <img className="imgPrincipal" src={gamdiasAuraGc2}/>
                    </div>
                    <div className="imgsProducts">
                        <span className='imgsProductsSub'>
                            <img id='nestPcOneImgSec1' src={gamdiasAuraGc2}/>
                            <img id='nestPcOneImgSec2' src={gamdiasAuraGc2}/>
                            <img id='nestPcOneImgSec2' src={gamdiasAuraGc2}/> 
                        </span>
                    </div>
                
                </section>
                <section className="containerProductDesc">
                    <div className="promotionCall"> 
                        <div className='stopwatch'>
                            <span className='offersEnd'> A oferta termina em : </span>
                            <span className='timeLeft'> 2 DIAS 05:35 <img src={iconTime}/> </span>
                        </div>
                        <div className='cardsPromo' >
                            <div className='offerDiscaunt'>
                                <span> 2 </span>
                                <span> Vendidos </span>
                            </div>
                            <div className='numberOfSales'>
                                <span> 15% </span>
                                <span> Desconto no pix </span>
                            </div>
                        </div>

                    </div>
                    <div className="descText">
                    NESTPC GAMER, i3-10100f, GTX1650 4GB GDDR6,
                    16GB RAM 3200MHZ 2X8GB, SSD 512GB, 
                    FONTE 500W 80+ BRONZE, 3 FANS RGB
                    </div>
                    <div className="rating">
                        <div className='ratingStars'> ⭐⭐⭐⭐⭐ </div>
                        <div className='ratingText'> 2 avaliações </div>
                    </div>
                    <div className="hanking">
                        <button className='buttonTop10'>
                            TOP 10
                        </button>
                        <label> MAIS VENDIDOS</label>
                    </div>
                    <div className="value">
                    
                        <span className="oldPriceNestPcOneSc"> DE R$3.999,00 POR: </span>
                        <span className="currentPriceProductScreen"> R$2.999,00 </span>
                        <span className=" installmentPriceProductScreen"> OU 12X DE R$249,00 </span>
                        <span className="discountPix"> 15% de desconto no pix </span>

                    </div>
                    <div className="addCart">
                
                        <button className="addCartButton"> <a href='/finalizeOrder'> ADICIONAR AO CARRINHO </a> </button>
                        
                    </div>

                </section>

            </div>

        </div>


    )
}

export default NestPcOneSc