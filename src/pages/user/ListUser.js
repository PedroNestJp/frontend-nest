import api from "../../service/Api"
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const ListUser = () => {

    const [usuarios, setUser] = useState([])
    // const navigate = useNavigate()

useEffect(() => {
     recuperarUsuarios()
     }, [])

    const recuperarUsuarios = async () => {
        const resposta = await api.get('/users')
        setUser(resposta.data)
    }

    function preencheTabela() {
        return usuarios.map((user) => (
            <tr>
                <td>{user.id}</td>
                <td>{user.nomeCompleto}</td>
                <td>{user.cpf}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.updatedAt}</td>
                <td>
                    <Link to={`/user/update/${user.id}`} user={user}>
                        <button>Update</button>
                    </Link>
                </td>
            </tr>
        ))
    }

    return (
        <div>
            <h1>Users</h1>
            <div>
                <Link to="/user/create">
                    <button>
                        Cadastrar
                    </button>
                </Link>
            </div>
            {usuarios.length > 0 ? <table>
                <thead>
                    <tr>
                        <td>Código</td>
                        <td>Nome do usuario</td>
                        <td>cpf</td>
                        <td>email</td>
                        <td>createdAt</td>
                        <td>updatedAt</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {preencheTabela()}
                </tbody>
            </table> : "Carregando usuarios..."}
            
        </div>
    )
}

export default ListUser