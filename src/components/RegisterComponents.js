import React, { useState, useEffect } from 'react'
import api from  '../service/Api'
import {Link , useNavigate } from 'react-router-dom'

import '../pages/register/Register.css'
import '../pages/register/Register'

const RegisterComponents = () =>{

    const [fullName, setFullName] = useState("")
    const [cpf, setCpf] = useState("")
    const [dateOfBirth, setBirthDate] = useState("")
    const [email, setEmail] = useState("")
    const [cellPhone, setCell] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRePassword] = useState("")
    const [acceptTermOne, setAcceptTermOne] = useState(2)
    const [acceptTermTwo, setAcceptTermTwo] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        registerUser()
        }, [])

    const registerUser = async (event) => {
        event.preventDefault()
        const user = {
            fullName: fullName,
            cpf: cpf,
            dateOfBirth : dateOfBirth,
            email: email, 
            cellPhone: cellPhone, 
            password: password,
            repeatPassword: repeatPassword,
            acceptTermOne: acceptTermOne,
            acceptTermTwo : acceptTermTwo
        }
        const response = await api.post('/user/create', user)
        if (response.status === 200) {
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
                value={fullName}
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
                value={dateOfBirth} 
                onChange={() => setBirthDate()}
            />
            <input className="input-tell inputsRegister" 
                placeholder="cellPhone*:" 
                type="number" 
                name="Tell" id="input-tell"
                value={cellPhone}
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
                placeholder="password*:" 
                type="password" 
                name="password" id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}

            />
            <input className="input-repeatPassword inputsRegister" 
                placeholder="Repetir password*:" 
                type="password" 
                name="repeatPassword" id="repeatPassword"
                value={repeatPassword}
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