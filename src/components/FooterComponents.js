import { logo } from "../img/imgs"
import '../pages/home/Home.css'

const Footer = ()=>{
    return(

    <section className="footer">
        <div className="info-footer"> 
            <div className="texts-info-footer">
                <div className="institutional">
                    <p>Institutional</p>
                    <li>
                        <a className=" whoAreWe-footer ">Quem somos</a>
                    </li>
                    <li>
                        <a className=" termsFooter ">Termos e Condições de Venda</a>
                    </li>
                    <li>
                        <a className="exchangeAndReturnPolicy-footer ">Política de Troca e Devoluções</a>
                    </li>
                </div>
                <div className="doubts">
                <p> Dúvidas </p>
                    <li>
                        <a className="howToBuy-footer">Como comprar</a>
                    </li>
                    <li>
                        <a className=" deadlineAndDelivery-footer">Prazos e entregas</a>
                    </li>
                    <li>
                        <a className=" paymentMethods-footer">Formas de Pagamentos</a>
                    </li>
                </div>
                <div className="client">
                <p> Clientes </p>
                    <li>
                        <a className=" myAccount-footer">Minha conta</a>
                    </li>
                    <li>
                        <a className="myRequests-footer">Meus pedidos</a>
                    </li>
                    <li>
                        <a className="myTickets-footer">Meus tickets</a>
                    </li>
                </div>
                <div className="help">
                <p> Ajuda </p>
                    <li>
                        <a className="tutorialVideos-footer">Videos Tutoriais</a>
                    </li>
                    <li>
                        <a className="productHandling-footer">Manuseio do Produto</a>
                    </li>
                    <li>
                        <a className="contactUs-footer">Fale Conosco</a>
                    </li>
                </div>

            </div>
        </div>
        
    </section>

)
}

const SubFooter = ()=>{
    return(
        <section className="subFooter">
            <div className="certifications"></div>
                <div className="businessInformation">
                    <div className="logoSubFooter">
                        <a href="/home">
                            <img className="logoSubFooter" src={logo} alt='logo' />
                        </a>
                    </div>
                    <div className="businessTexts">
                        <p> NEST INFORMÁTICA ATACADO E VAREJO DE PRODUTOS DE INFORMATICA LTDA </p>
                        <p> CNPJ: 43.061.678/0001-97 | JOÃO PESSOA-PB </p>
                    </div>
                    <div className="openingHours">
                        <p> ATENDIMENTO </p>
                        <p> De segunda a sexta das 8:30 às 12H / 13H às 18H </p>
                        <p> SOMOS E-COMMERCE  NÃO TEMOS ATENDIMENTO LOCAL </p>
                    </div>
                </div>
        </section>
    )
}
export {Footer, SubFooter}
