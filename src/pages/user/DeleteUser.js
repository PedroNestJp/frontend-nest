import api from '../../service/Api'
import {useNavigate, useParams} from 'react-router-dom'

const DeleteUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const deleteUser = async () =>{
        const response = await api.delete(`/product/delete/${id}`)
        setUser(response.data)
        if (response.status === 200) {
            navigate('/users')
        }
        deleteUser()
    } 
}
export default DeleteUser