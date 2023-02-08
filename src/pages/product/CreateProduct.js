import { useState } from "react"
import api from "../../service/Api"
import { Link, useNavigate } from 'react-router-dom'


const CreateProduct = () => {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const navigate = useNavigate();

    const cadastrarProduto = async (event) => {
        event.preventDefault()
        const product = {
            name: name,
            description: description,
            price: price 
        }
        const response = await api.post('/product/create', product)
        if (response.status === 200) {
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
                <label>name:</label>
                <input 
                    type="text" 
                    name="titulo" 
                    placeholder="name do produto" 
                    value={name}
                    onChange={(event) => setname(event.target.value)}
                 />
            </div>
            <div>
                <label>Descrição:</label>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Descrição do produto" 
                    value={description} 
                    onChange={(event) => setdescription(event.target.value)}/>
            </div>
            <div>
                <label>price:</label>
                <input 
                    type="text" 
                    name="price" 
                    placeholder="price do produto" 
                    value={price}
                    onChange={(event) => setprice(event.target.value)}
                    />
            </div>
            <button onClick={(e) => cadastrarProduto(e)}>Cadastrar</button>
        </div>
    )
}

export default CreateProduct