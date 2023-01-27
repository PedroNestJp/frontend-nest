import React from "react";
import '../pages/Login/Login'
import LoginCss from '../pages/Login/Login.css'
import logo from '../assets/logoNestHome.png'
import iconProfile from '../assets/icons/icon-profile.png'



const LoginComponent = () => {

    return(

        <> 

            <div className="main-container"> 
                <div id="loginScTitle" className="title">  FAZER LOGIN  </div>
                <section className="inputsLogin">
                <input className="email" 
                    placeholder="E- mail, CPF ou CNPJ" 
                    type="email"
                    autoComplete="username"
                    aria-label="Digite seu email"
                    required
                />
                <input className="senha"
                    id="loginScInput"  
                    placeholder="Senha" 
                    type="password"
                    autoComplete="password"
                    aria-label="Digite sua senha"
                    required
                />
                </section>

                <a href="/home" rel="noopener noreferrer">
                    <button 
                        className="enter" 
                        type="submit"> 
                        <span 
                            className="enter-text"> ENTRAR 
                        </span> 
                    </button>
                </a>
                <span className="text-forgotPassword">Esqueceu a senha?</span>
                <span className="lineLogin"></span>
                <span className="text-loginSocial"> QUERO ACESSAR COM MINHAS REDES SOCIAIS </span>
                
                    <a  href="https://www.facebook.com/" 
                        target="_blank" rel="noopener noreferrer">
                        <button className="login-fb"> 
                            <span className="fb-text"> Facebook </span> 
                        </button>
                    </a>    
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S722111738%3A1665814673109566&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AQDHYWqFRhC9qnoWQvCfYnofNkkE0iIDHSo0K-hHsggThToSlYXyMH6pwF3TOFZzkS5X381Kl9Kt" target="_blank" rel="noopener noreferrer">
                        <button className="login-gg"> 
                            <span className="gg-text"> Google </span> 
                        </button>
                    </a>
             
                <div className="loginOrLine">
                    <span className="line1"></span>
                    <span className="textOr">ou</span>
                    <span className="line2"></span>
                </div>
                <span className="span4"> Não tem cadastro ?</span>
                <a href="/registrationSc" rel="noopener noreferrer">
                    <button className="register" > 
                        <span className="register-text"> CADASTRE-SE </span> 
                    </button>
                </a> 
            </div>
            
        </>

    )
}

export default LoginComponent