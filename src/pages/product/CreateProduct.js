import { useState } from "react"
import api from "../../service/Api"
import { Link, useNavigate } from 'react-router-dom'


const CreateProduct = () => {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const navigate = useNavigate();

    const cadastrarProduto = async (event) => {
        event.preventDefault()
        const produto = {
            nome: nome,
            descricao: descricao,
            valor: valor 
        }
        const resposta = await api.post('/product/create', produto)
        if (resposta.status === 200) {
            navigate("/products");
        }
    }

    return (
        <div>
            <h1>Cadastrar produto</h1>
            <Link to="/products">
                <button>
                    Voltar
                </button>
            </Link> 
            <div>
                <label>Nome:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="Nome do produto" 
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                 />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text" 
                    name="descricao" 
                    placeholder="Descrição do produto" 
                    value={descricao} 
                    onChange={(event) => setDescricao(event.target.value)}/>
            </div>
            <div>
                <label>Valor:</label>
                <input 
                    type="text" 
                    name="Valor" 
                    placeholder="Valor do produto" 
                    value={valor}
                    onChange={(event) => setValor(event.target.value)}
                    />
            </div>
            <button onClick={(e) => cadastrarProduto(e)}>Cadastrar</button>
        </div>
    )
}

export default CreateProduct