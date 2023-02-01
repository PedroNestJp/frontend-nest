import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../service/Api'

const ListarProdutos = () => {

    const [produtos, setProdutos] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        recuperarProdutos()
    }, [])

    const recuperarProdutos = async () => {
        const resposta = await api.get('/products')
        setProdutos(resposta.data)
    }

    const deletarProduto = async (id) => {
        const resposta = await api.delete(`/product/delete/${id}`)
        setProdutos(resposta.data)
    } 
    navigate('/products')

    const preencheTabela = () => {
        return produtos.map((produto) => (
            <tr>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.valor}</td>
                <td>{produto.createdAt}</td>
                <td>
                    <Link to={`/product/update/${produto.id}`} produto={produto}>
                        <button>Editar</button>
                    </Link>
                    <button onClick={() => deletarProduto(produto.id)}>Excluir</button>
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
            {produtos.length > 0 ? <table>
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
                    {preencheTabela()}
                </tbody>
            </table> : "Carregando produtos..."}
            
        </div>
    )
}

export default ListarProdutos