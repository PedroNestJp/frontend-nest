
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from 'react-router-dom'
import api from "../../service/Api"

const EditProduct = (props) => {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [price, setprice] = useState("")
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        buscarProduto()
    })

    const buscarProduto = async () => {
        const resposta = await api.get(`/products/${id}`)
        setname(resposta.data.name)
        setdescription(resposta.data.description)
        setprice(resposta.data.price)
    }

    const editarProduto = async (event) => {
        event.preventDefault()
        const produto = {
            name: name,
            description: description,
            price: price 
        }
        const resposta = await api.put(`/product/update/${id}`, produto)
        if (resposta.status === 200) {
            navigate("/products");
        }
    }

    return (
        <div>
            <h1>Editar produto</h1>
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
                    onChange={(event) => setdescription(event.target.value)}
                />
            </div>
            <div>
                <label>Preço:</label>
                <input 
                    type="text" 
                    name="price" 
                    placeholder="price do produto" 
                    value={price}
                    onChange={(event) => setprice(event.target.value)}
                />
            </div>
            <button onClick={(e) => editarProduto(e)}>Atualizar</button>
        </div>
    )
}

export default EditProduct