import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../service/Api'

const ListProducts = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        // callProducts()
    }, [])

    const callProducts = async () => {
        const response = await api.get('/products')
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        const response = await api.delete(`/product/delete/${id}`)
        setProducts(response.data)
    } 
    navigate('/products')

    const fillTheTable = () => {
        return products.map((produto) => (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.name}</td>
                <td>{produto.descricao}</td>
                <td>{produto.valor}</td>
                <td>{produto.createdAt}</td>
                <td>
                    <Link 
                        to={`/product/update/${produto.id}`} produto={produto}>
                        <button>Editar</button>
                    </Link>
                    <button 
                        onClick={() => deleteProduct(produto.id)}
                        >Excluir
                    </button>
                </td>
            </tr>
          ))
    }

    return (
        <div>
            <h1>Produtos</h1>
            <div>
                <Link to="/product/create">
                    <button>
                        Cadastrar
                    </button>
                </Link>
            </div>
            {products.length > 0 ? <table>
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome do produto</td>
                        <td>Descrição</td>
                        <td>valor</td>
                        <td>Criado em:</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {fillTheTable()}
                </tbody>
            </table> : "Carregando produtos..."}
            
        </div>
    )
}

export default ListProducts