import React, { useState } from 'react'
import api from  '../service/Api'
import {Link , useNavigate } from 'react-router-dom'

import '../pages/register/Register.css'
import '../pages/register/Register'

const RegisterComponents = () =>{

    const [nomeCompleto, setFullName] = useState("")
    const [cpf, setCpf] = useState("")
    const [dataNascimento, setBirthDate] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCell] = useState("")
    const [senha, setPassword] = useState("")
    const [repetirSenha, setRePassword] = useState("")
    const [acceptTermOne, setAcceptTermOne] = useState("")
    const [acceptTermTwo, setAcceptTermTwo] = useState("")
    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault()
        const user = {
            nomeCompleto: nomeCompleto,
            cpf: cpf,
            dataNascimento : dataNascimento,
            email: email, 
            celular: celular, 
            senha: senha,
            repetirSenha: repetirSenha,
            acceptTermOne: acceptTermOne,
            acceptTermTwo : acceptTermTwo
        }
        const resposta = await api.post('/user/create', user)
        if (resposta.status === 200) {
            navigate("/users");
        }
    }

return(

<main className="main">

    <form>

    <div className="content">
        <h1 className="title"> CRIAR CONTA </h1>

        
        <div className='typePerson'>
            <div className="physicalPerson"> PESSOA FÍSICA </div>
                <input 
                    className="circlePPerson" 
                    id='circlePPerson' 
                    type="radio" defaultChecked
                />
            <div className="legalPerson"> PESSOA JURÍDICA </div>
                <input 
                    className="circleLegalPerson" 
                    id='circleLegalPerson' 
                    type="radio" 
                />
        </div>

        <section className='inputs'>

            <input 
                className="input-name inputsRegister" 
                placeholder="Nome completo*:" 
                type="text" 
                name="fullName" id="fullName"
                value={nomeCompleto}
                onChange={(event) => setFullName(event.target.value)}
                
            />
            <input 
                className="input-cpf inputsRegister" 
                placeholder="CPF*:" 
                type="number" 
                name="cpf" id="cpf"
                value={cpf}
                onChange={(event) => setCpf(event.target.value)}
            />
            <input className="input-birthDate inputsRegister" 
                placeholder="Data de Nascimento*:" 
                type="text" 
                name="birthDate" id="input-birthDate"
                value={dataNascimento} 
                onChange={() => setBirthDate()}
            />
            <input className="input-tell inputsRegister" 
                placeholder="Celular*:" 
                type="number" 
                name="Tell" id="input-tell"
                value={celular}
                onChange={(event) => setCell(event.target.value)}

            />
            <input className="input-email inputsRegister" 
                placeholder="E-mail*:" 
                type="text" 
                name="email" id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                
            />
            <input className="input-password inputsRegister" 
                placeholder="Senha*:" 
                type="password" 
                name="password" id="password"
                value={senha}
                onChange={(event) => setPassword(event.target.value)}

            />
            <input className="input-repeatPassword inputsRegister" 
                placeholder="Repetir Senha*:" 
                type="password" 
                name="repeatPassword" id="repeatPassword"
                value={repetirSenha}
                onChange={(event) => setRePassword(event.target.value)}

            />
            <h3 className="required-field" > (*) Campos obrigatórios </h3>

        </section>

    </div>

    <div className='termsBtnRegister'>
        <section className='terms'>
            <div className='term'>
                <input 
                    className='acceptTermsInput1' 
                    type="checkbox"
                    value={acceptTermOne}
                    onChange={(event) => setAcceptTermOne(event.target.value)}
                /> 
                <h2 
                    className="accept-terms-1"> 
                        Quero receber ofertas e novidades por e-mail, SMS ou WhatsApp 
                </h2>
            </div>
            <div className='term2'>
                <input 
                    className='acceptTermsInput2'  
                    type="checkbox"
                    value={acceptTermTwo}
                    onChange={(event) => setAcceptTermTwo(event.target.value)}
                /> 
                <h2 
                    className="accept-terms-2"> 
                        Li e estou de acordo com as políticas da empresa e políticas de privacidade.*  
                </h2>
            </div>

        </section>

        <div className='btnCreateAccount' >
            <Link to="/user/create">
                <button 
                    className="creat-account" 
                    type="submit" 
                    name='btnCreateAccount'
                    onClick={(e) =>  registerUser(e)}> 
                    <span className="creat-account-text"> CRIAR CONTA </span> 
                </button>
            </Link>
        </div>
         
    </div>
    </form>
</main>
)
}

export default RegisterComponents