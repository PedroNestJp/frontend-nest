import '../pages/finalizeOrder/FinalizeOrder.css'
import {redragonSuperior1} from '../img/imgs'

const FinalizeOrderComponent = () =>{
    return(
    <>
        <h1 className="titleFinalizeOrder"> FINALIZA SEU PEDIDO </h1>
        <div className="containerMain">
            <div className="contentFinalizeOrder">
                <div className="containerChildOne">
                    <span className='imgProductAdd'> 
                        <img  
                            src={redragonSuperior1}
                        /> 
                    </span> 
                    <span className='descProductAdd'> 
                        Gabinete Gamer Redragon Superion,
                        Mid Tower, Vidro Temperado, Black,
                        ATX, Sem Fonte, Sem Fan, GC-MB211 
                    </span>
                    <div className='selectQuantity'>
                        <span> quantidade </span>
                        <div className='buttonsInput'>
                            <button> + </button>
                            <input />
                            <button> - </button>
                        </div>
                    </div>
                    <div className='valueProductSelected'>
                        <span> Valor </span>
                        <div className='boxValueProductSelected'>
                            R$2.999,00
                        </div>
                    </div>
                </div>
                <div className='selectAddres'>
                    <input className='inputCep' />
                    <button type='submit' className='buttonSubmitCep'> BUSCAR </button>
                    <span> <a href='https://buscacepinter.correios.com.br/app/endereco/index.php' className='findCep'> ENCONTRE SEU CEP </a> </span>
                </div>
            </div>
            <div className="containerChildTwo">
                <div className='orderSummary'> RESUMO DO PEDIDO: </div>
                <div className='subTotal'> SUBTOTAL DOS ITENS:  </div>
                <div className='freigthCost'> CUSTO DO FRETE: </div>
                <div className='total'>
                    <span className='spanTotal'> TOTAL : </span>
                    <span className='spanPreviousPrice'> R$3349,00 EM ATÉ 12X DE </span>
                    <span className='spanIntallmentPrice'> R$245,00 </span>
                    <span className='ou'> OU </span>
                    <span className='spanCashPrice'> R$3.049,00 A  VISTA </span>
                </div>
                <button className='checkout'> FINALIZAR </button>
            </div>
        </div>
    </>
    )
}

export default FinalizeOrderComponent