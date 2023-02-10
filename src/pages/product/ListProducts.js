import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../service/Api'

const ListProducts = () => {

    // const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        callProducts()
    }, [])
    
    const callProducts = async () => {
        const response = await api.get('/products')
        setProducts(response.data)
        console.log(response.data)
    } 
    
    
    // const deleteProduct = async (id) => {
    //     const response = await api.delete(`/product/delete/${id}`)
    //     setProducts(response.data)
    // } 
    // navigate('/products')
    
    function fillTheTable() {
        return products.map((product) => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.createdAt}</td>
                <td>
                    <Link
                        to={`/product/update/${product.id}`} product={product}>
                        <button>Editar</button>
                    </Link>
                    {/* <button
                        onClick={() => deleteProduct(product.id)}
                    >Excluir
                    </button> */}
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