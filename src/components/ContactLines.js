import { Link } from "react-router-dom"
import { iconFacebook, iconGmail, iconInstagram, iconLinkedin, iconTelegram, iconWhatsapp, iconYoutube  } from "../img/imgs"
import "../pages/home/Home.css"

const ContactLine1 = () => {
    return(
    <div className="contactsLine" id="contactsLineHome">
    <span> 
        <a href="https://www.facebook.com/nestinformatica/"> 
            <img id="iconFacebook" className="social-media" srcSet={iconFacebook} alt=""/>
        </a>
    </span>
    <span>
      <a href="#"> 
        <img className="social-media" srcSet={iconGmail} alt=""/> 
      </a>
    </span>
    <span>
      <a href="https://www.instagram.com/nestinformatica/"> 
        <img className="social-media" srcSet={iconInstagram}  alt=""/> 
      </a>
    </span>
    <span> 
      <a  href="https://www.linkedin.com/company/nestinformatica/"> 
        <img className="social-media" srcSet={iconLinkedin} alt=""/> 
      </a>
    </span>
    <span> 
      <a href="#"> 
       <img className="social-media" srcSet={iconTelegram} alt=""/> 
      </a>
    </span>
    <span> 
      <a href="#"> 
        <img className="social-media" srcSet={iconWhatsapp} alt=""/> 
      </a>
    </span>
    <span> 
      <a href="https://www.youtube.com/channel/UCBH2a3RXY619wpctYJU8IbQ"> 
          <img className="social-media" srcSet={iconYoutube} alt=""/>  
      </a>
    </span>
</div>
)
}

const ContactLine2 = () =>{
    return(
        <div className="contactsLine-2">
        <span>
        <a href="https://www.facebook.com/nestinformatica/"> 
                <img id="iconFacebook" className="social-media" srcSet={iconFacebook} alt=""/>
            </a>
        </span> 
        <span> 
          <a href="#"> 
            <img className="social-media" srcSet={iconGmail} alt=""/> 
          </a>
        </span>
        <span> 
          <a href="https://www.instagram.com/nestinformatica/"> 
            <img className="social-media" srcSet={iconInstagram}  alt=""/> 
          </a>
        </span>
        <span> 
          <a  href="https://www.linkedin.com/company/nestinformatica/"> 
            <img className="social-media" srcSet={iconLinkedin} alt=""/> 
          </a>
        </span>
        <span> 
          <a href="#"> 
           <img className="social-media" srcSet={iconTelegram} alt=""/> 
          </a>
        </span>
        <span> 
          <a href="#"> 
            <img className="social-media" srcSet={iconWhatsapp} alt=""/> 
          </a>
        </span>
        <span> 
          <a href="https://www.youtube.com/channel/UCBH2a3RXY619wpctYJU8IbQ"> 
              <img className="social-media" srcSet={iconYoutube} alt=""/>  
          </a>
        </span>
  </div>
)
}
export {ContactLine1, ContactLine2 }