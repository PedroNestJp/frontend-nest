import  '../pages/product/ProductScreen.css'
import { iconShopCart, iconTime, redragonSuperior1, redragonSuperior2, redragonSuperior3 } from '../img/imgs'

const ProductScreen = () => {
    return(

        <div className="mainContentProduct">
            <div className="containerProductFather">
                <section className='containerProductChild1'>
                    <div className="imgProduct">
                        <img id='imgPrincipal' src={redragonSuperior1}/>
                    </div>
                    <div className="imgsProducts">
                        <img id='redragonSuperior1' src={redragonSuperior1}/>
                        <img id='redragonSuperior2' src={redragonSuperior2}/>
                        <img id='redragonSuperior2' src={redragonSuperior3}/>
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
                                <span> 6 </span>
                                <span> Vendidos </span>
                            </div>
                            <div className='numberOfSales'>
                                <span> 15% </span>
                                <span> Desconto no pix </span>
                            </div>
                        </div>

                    </div>
                    <div className="descText">
                    Gabinete Gamer Redragon Superion,
                    Mid Tower, Vidro Temperado, Black,
                    ATX, Sem Fonte, Sem Fan, GC-MB211
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
                    
                        <span className="oldPriceProductScreen"> DE R$3.999,00 POR: </span>
                        <span className="currentPriceProductScreen"> R$3.360,00 </span>
                        <span className=" installmentPriceProductScreen"> OU 12X DE R$280,00 </span>
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

export default ProductScreen